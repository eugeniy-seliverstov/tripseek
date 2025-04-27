import { memo } from 'react'
import { geoTimes } from 'd3-geo-projection'
import { ComposableMap } from 'react-simple-maps'

import Territories from '@/components/map/Territories'

import type { Nullable } from '@/types/utils'
import type { Territory } from '@/types/territory'

interface WorldProps {
  onTerritoryEnter: (territory: Nullable<Territory>) => void
  onTerritoryLeave: () => void
}

function World({ onTerritoryEnter, onTerritoryLeave }: WorldProps) {
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
      <Territories
        onTerritoryEnter={onTerritoryEnter}
        onTerritoryLeave={onTerritoryLeave}
      />
    </ComposableMap>
  )
}

export default memo(World)