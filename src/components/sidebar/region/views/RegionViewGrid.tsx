import type { TerritoryRegion } from '@/types/territory'
import type { GroupedUserTerritories } from '@/types/user'
import type { ReactElement } from 'react'

import { RegionPreview } from '@/components/sidebar/region/RegionPreview'
import { SORTED_REGIONS } from '@/constants/regions'

interface RegionViewGridProps {
  groupedTerritories: GroupedUserTerritories
  onRegionClick: (region: TerritoryRegion) => void
}

export const RegionViewGrid = ({
  groupedTerritories,
  onRegionClick,
}: RegionViewGridProps): ReactElement => {
  return (
    <>
      <div className='my-2 px-4 grid grid-cols-2 gap-3'>
        {SORTED_REGIONS.map(region => {
          const territories = groupedTerritories[region]
          const visited = territories.filter(t => t.visited).length

          return (
            <RegionPreview
              key={region}
              region={region}
              visited={visited}
              total={territories.length}
              onClick={() => onRegionClick(region)}
            />
          )
        })}
      </div>
    </>
  )
}
