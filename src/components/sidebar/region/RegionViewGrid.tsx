import RegionPreview from './RegionPreview'
import { SORTED_REGIONS } from '@/constants/regions'
import type { GroupedUserTerritories } from '@/types/user'

interface RegionViewGridProps {
  groupedTerritories: GroupedUserTerritories
}

function RegionViewGrid({ groupedTerritories }: RegionViewGridProps) {
  return (
    <div className='my-3 px-4 grid grid-cols-2 gap-3'>
      {SORTED_REGIONS.map(region => {
        const territories = groupedTerritories[region]
        const visited = territories.filter(t => t.visited).length

        return (
          <RegionPreview
            key={region}
            region={region}
            visited={visited}
            total={territories.length}
          />
        )
      })}
    </div>
  )
}

export default RegionViewGrid