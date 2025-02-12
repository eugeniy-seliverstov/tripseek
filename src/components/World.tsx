import { useState, useEffect } from 'react'
import { geoTimes } from 'd3-geo-projection'
import { ComposableMap, Geographies, Geography, GeographyProps } from 'react-simple-maps'

import TerritoryPopover from './territory/TerritoryPopover'
import { getTerritoryByCode, getCodeByName } from '@/data/territoriesUtils'

import useGlobalStore from '@/store/global'
import useTerritoriesStore from '@/store/territories'

import { Nullable } from '@/types/utils'
import { TerritoryCode, TerritoryName, TerritoryType } from '@/types/territory'

import map from '../assets/map/countries-110m.json'

const getGeographyStyle = (isActive: boolean, isVisited: boolean): GeographyProps['style'] => {
  let defaultColor = 'rgba(255, 255, 255, 0.25)'
  if (isVisited && isActive) defaultColor = '#F57D5C'
  else if (isActive)  defaultColor = '#5CD4F5'
  else if (isVisited)  defaultColor = '#FFFFFF'
  // #5CF5CA

  const hoverColor = isVisited ? '#F57D5C' : '#5CD4F5'

  return {
    default: { fill: defaultColor, outline: 'none', pointerEvents: 'auto' },
    hover: { fill: hoverColor, outline: 'none', cursor: 'pointer' },
    pressed: { fill: hoverColor, outline: 'none' },
  }
}

function World() {
  const [hoverTerritory, setHoverTerritory] = useState<Nullable<TerritoryType>>(null)
  const [mouseCoordinates, setMouseCoordinates] = useState({ clientX: 0, clientY: 0 })

  const { hoverTerritory: globalHoverTerritory } = useGlobalStore()
  const { visited } = useTerritoriesStore()

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

              const isActive = territory?.code === globalHoverTerritory?.code
              const isVisited = territory?.code ? visited.includes(territory.code) : false

              return <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth={1}
                style={getGeographyStyle(isActive, isVisited)}
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