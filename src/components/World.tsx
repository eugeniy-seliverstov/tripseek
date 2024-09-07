import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { geoTimes } from 'd3-geo-projection'

import map from '../assets/map/countries-110m.json'

function World() {
 return (
  <>
    <ComposableMap
      width={1000}
      height={600}
      projection={geoTimes()
        .translate([980 / 2, 50 + 551 / 2])
        .scale(205)
        .rotate([-11, 0, 0])}
    >
      <Geographies geography={map}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
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
                  outline: 'none',
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  </>
 )
}

export default World