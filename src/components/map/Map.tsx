import { memo } from 'react'
import { geoTimes } from 'd3-geo-projection'
import { ComposableMap } from 'react-simple-maps'

import MapTerritories from '@/components/map/MapTerritories'

function Map() {
  return (
    <ComposableMap
      width={1000}
      height={600}
      className='max-h-full'
      projection={geoTimes()
        .translate([980 / 2, 50 + 551 / 2])
        .scale(205)
        .rotate([-11, 0, 0])}
    >
      <MapTerritories />
    </ComposableMap>
  )
}

export default memo(Map)