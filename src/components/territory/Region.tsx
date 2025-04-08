import TerritoryList from './TerritoryList'

import type { UserTerritory } from '@/types/user'
import type { TerritoryRegion } from '@/types/territory'

interface RegionProps {
  region: TerritoryRegion
  territories: UserTerritory[]
  activeStatus?: 'visited' | 'wishlist'
  showCounter?: boolean
  activeCount?: number
  allCount?: number
}

function Region({ region, territories, activeStatus, showCounter, activeCount, allCount }: RegionProps) {
  return (
    <>
      <div className='px-4 py-3 flex items-center justify-between'>
        <div className="text-xl font-bold">{region}</div>
        {showCounter && (
          <div className="text-md">{activeCount}/{allCount}</div>
        )}
      </div>
      <TerritoryList territories={territories} activeStatus={activeStatus} />
    </>
  )
}

export default Region