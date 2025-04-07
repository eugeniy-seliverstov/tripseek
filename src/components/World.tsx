import { useState, useEffect } from 'react'
import { geoTimes } from 'd3-geo-projection'
import { ComposableMap, Geographies, Geography, GeographyProps } from 'react-simple-maps'

import TerritoryPopover from './territory/TerritoryPopover'

import useUserStore from '@/store/user'
import useStore from '@/store/app'

import type { Filter } from '@/store/app'
import type { Nullable } from '@/types/utils'
import type { TerritoryCode, TerritoryName, Territory } from '@/types/territory'

import map from '../assets/map/countries-110m.json'
import { getTerritoryByCode, getCodeByName } from '@/utils/territories'

const COLORS = {
  default: 'rgba(255, 255, 255, 0.25)',
  visited: '#FFFFFF',
  favorite: '#FFFFFF',
  hoverDefault: '#5CD4F5',
  hoverVisited: '#F57D5C',
  hoverFavorite: '#5CF5CA',
}

const getGeographyStyle = (
  filter: Filter,
  isVisited: boolean,
  isFavorite: boolean,
  isHovered: boolean
): GeographyProps['style'] => {
  let defaultColor = COLORS.default
  let hoverColor = COLORS.hoverDefault

  if (filter === 'visited' || filter === 'all') {
    if (isVisited) {
      defaultColor = COLORS.visited
      hoverColor = COLORS.hoverVisited
    }
  } else if (filter === 'favorite') {
    if (isFavorite) {
      defaultColor = COLORS.favorite
      hoverColor = COLORS.hoverFavorite
    }
  }

  if (isHovered) {
    if (filter === 'visited' || filter === 'all') {
      defaultColor = isVisited ? COLORS.hoverVisited : COLORS.hoverDefault
    } else if (filter === 'favorite') {
      defaultColor = isFavorite ? COLORS.hoverFavorite : COLORS.hoverDefault
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

  const { visited, favorite } = useUserStore()
  const { filter, hoverTerritory: sidebarHoverTerritory } = useStore()

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      setMouseCoordinates({ clientX, clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

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
              const isFavorite = territory?.code ? favorite.includes(territory.code) : false

              return <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth={1}
                style={getGeographyStyle(filter, isVisited, isFavorite, isHovered)}
                onMouseEnter={() => setHoverTerritory(territory)}
                onMouseLeave={() => setHoverTerritory(null)}
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