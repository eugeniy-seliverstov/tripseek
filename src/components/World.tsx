import React, { useState, useEffect } from 'react'
import { geoTimes } from 'd3-geo-projection'
import { ComposableMap, Geographies, Geography, GeographyProps } from 'react-simple-maps'

import TerritoryPopover from './sidebar/territory/TerritoryPopover'

import useUserStore from '@/store/useUserStore'
import useHoverStore from '@/store/useHoverStore'
import useFilterStore from '@/store/useFilterStore'

import type { Nullable } from '@/types/utils'
import type { Filter } from '@/store/useFilterStore'
import type { TerritoryCode, TerritoryName, Territory } from '@/types/territory'

import map from '../assets/map/countries-110m.json'
import { getTerritoryByCode, getCodeByName } from '@/utils/territories'

const COLORS = {
  fill:          '#FFFFFF',
  default:       'rgba(255, 255, 255, 0.25)',
  hoverDefault:  '#9AB9E6',
  visited:       '#F6A38C',
  hoverVisited:  '#F7886A',
  wishlist:      '#B8EBDD',
  hoverWishlist: '#5CF5CA',
}

const getGeographyStyle = (
  filter: Filter,
  isVisited: boolean,
  isWishlist: boolean,
  isHovered: boolean
): GeographyProps['style'] => {
  let defaultColor = COLORS.default
  let hoverColor = COLORS.hoverDefault

  if (filter === 'visited') {
    if (isVisited) {
      defaultColor = COLORS.fill
      hoverColor = COLORS.hoverVisited
    }
  } else if (filter === 'wishlist') {
    if (isWishlist) {
      defaultColor = COLORS.fill
      hoverColor = COLORS.hoverWishlist
    }
  } else if (filter === 'all') {
    if (isVisited) {
      defaultColor = COLORS.visited
      hoverColor = COLORS.hoverVisited
    } else if (isWishlist) {
      defaultColor = COLORS.wishlist
      hoverColor = COLORS.hoverWishlist
    }
  }

  if (isHovered) {
    if (filter === 'visited') {
      defaultColor = isVisited ? COLORS.hoverVisited : COLORS.hoverDefault
    } else if (filter === 'wishlist') {
      defaultColor = isWishlist ? COLORS.hoverWishlist : COLORS.hoverDefault
    } else if (filter === 'all') {
      defaultColor = isVisited
        ? COLORS.hoverDefault
        : isWishlist
        ? COLORS.hoverWishlist
        : COLORS.hoverDefault
    }
  }

  return {
    default: { fill: defaultColor, outline: 'none', pointerEvents: 'auto' },
    hover: { fill: hoverColor, outline: 'none', cursor: 'pointer' },
    pressed: { fill: hoverColor, outline: 'none' },
  }
}

function World() {
  const [hoverTerritory, setHoverTerritory] = useState<Nullable<Territory>>(null)
  const [mouseCoordinates, setMouseCoordinates] = useState({ clientX: 0, clientY: 0 })

  const { filter } = useFilterStore()
  const { hoverTerritory: sidebarHoverTerritory } = useHoverStore()
  const { visited, wishlist, toggleVisitedTerritory, toggleWishlistTerritory } = useUserStore()

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      setMouseCoordinates({ clientX, clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const onClickTerritory = (event: React.MouseEvent<SVGPathElement>, territory: Nullable<Territory>) => {
    if (!territory) return

    const code = territory.code
    const { shiftKey, altKey, metaKey } = event

    const isWishlistAction = shiftKey && (altKey || metaKey)
    const canModifyWishlist = filter === 'wishlist' || filter === 'all'
    if (isWishlistAction && canModifyWishlist) {
      toggleWishlistTerritory(code)
      return
    }

    const isVisitedAction = shiftKey && !isWishlistAction
    const canModifyVisited = filter === 'visited' || filter === 'all'
    if (isVisitedAction && canModifyVisited) {
      toggleVisitedTerritory(code)
    }
  }

  return (
    <>
      <ComposableMap
        width={1000}
        height={600}
        className='max-h-full'
        projection={geoTimes()
          .translate([980 / 2, 50 + 551 / 2])
          .scale(205)
          .rotate([-11, 0, 0])}
      >
        <Geographies geography={map}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const code = geo.properties.ISO_A3 !== '-99'
                ? geo.properties.ISO_A3 as TerritoryCode
                : getCodeByName(geo.properties.NAME_LONG as TerritoryName)
              const territory = code ? getTerritoryByCode(code) : null

              const isHovered = territory?.code === sidebarHoverTerritory?.code
              const isVisited = territory?.code ? visited.includes(territory.code) : false
              const isWishlist = territory?.code ? wishlist.includes(territory.code) : false

              return <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth={1}
                style={getGeographyStyle(filter, isVisited, isWishlist, isHovered)}
                onMouseEnter={() => setHoverTerritory(territory)}
                onMouseLeave={() => setHoverTerritory(null)}
                onClick={(event) => onClickTerritory(event, territory)}
              />
            })
          }
        </Geographies>
      </ComposableMap>

      {hoverTerritory && (
        <TerritoryPopover
          territory={hoverTerritory}
          clientX={mouseCoordinates.clientX}
          clientY={mouseCoordinates.clientY}
        />
      )}
    </>
  )
}

export default World