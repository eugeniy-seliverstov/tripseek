import { useState, useEffect } from 'react'
import { geoTimes } from 'd3-geo-projection'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import TerritoryPopover from './territory/TerritoryPopover'
import { TerritoryIso3 } from '@/types/Territory'

import map from '../assets/map/countries-110m.json'

function World() {
  const [hoverTerritory, setHoverTerritory] = useState<Territory | null>(null)
  const [mouseCoordinates, setMouseCoordinates] = useState({ clientX: 0, clientY: 0 })

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      setMouseCoordinates({ clientX, clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })

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
              const territory: Territory = {
                name: geo.properties.NAME,
                iso2: geo.properties.ISO_A2,
                iso3: geo.properties.ISO_A3,
              }

              return <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth={1}
                style={{
                  default: {
                    fill: "rgba(255, 255, 255, 0.25)",
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