import { useState, useEffect } from 'react'
import { geoTimes } from 'd3-geo-projection'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import TerritoryPopover from './territory/TerritoryPopover'
import { getTerritoryByCode, getCodeByName } from '@/data/territoriesUtils'
import useGlobalStore from '@/store/global'

import { Nullable } from '@/types/utils'
import { TerritoryCode, TerritoryName, TerritoryType } from '@/types/territory'

import map from '../assets/map/countries-110m.json'

function World() {
  const [hoverTerritory, setHoverTerritory] = useState<Nullable<TerritoryType>>(null)
  const [mouseCoordinates, setMouseCoordinates] = useState({ clientX: 0, clientY: 0 })

  const { hoverTerritory: globalHoverTerritory } = useGlobalStore()

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
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
              const code = geo.properties.ISO_A3 !== '-99' ? geo.properties.ISO_A3 as TerritoryCode : getCodeByName(geo.properties.NAME_LONG as TerritoryName)
              const territory = code ? getTerritoryByCode(code) : null
              const isActiveTerritory = territory?.code === globalHoverTerritory?.code

              return <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth={1}
                style={{
                  default: {
                    fill: isActiveTerritory ? "#ED008E": "rgba(255, 255, 255, 0.25)",
                    outline: "none",
                    pointerEvents: 'auto',
                  },
                  hover: {
                    fill: "#ED008E",
                    outline: "none",
                    cursor: "pointer",
                  },
                  pressed: {
                    fill: "#ED008E",
                    outline: 'none',
                  },
                }}
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