import { geoTimes } from 'd3-geo-projection'
import { memo, ReactElement } from 'react'
import { ComposableMap } from 'react-simple-maps'

import { MapTerritories } from '@/components/map/MapTerritories'
import { useMobile } from '@/hooks/useMobile'

const MapComponent = (): ReactElement => {
  const isMobile = useMobile()

  return (
    <ComposableMap
      width={1000}
      height={600}
      className='max-h-full'
      projection={geoTimes()
        .translate([980 / 2, (isMobile ? 110 : 50) + 551 / 2])
        .scale(205)
        .rotate([-11, 0, 0])}
    >
      <MapTerritories />
    </ComposableMap>
  )
}

export const Map = memo(MapComponent)
