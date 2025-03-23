import TerritoryList from './TerritoryList'

import type { UserTerritory } from '@/types/user'
import type { TerritoryContinent } from '@/types/territory'

interface ContinentProps {
  continent: TerritoryContinent
  territories: UserTerritory[]
  activeStatus?: 'visited' | 'favorite'
  showCounter?: boolean
  activeCount?: number
  allCount?: number
}

function Continent({ continent, territories, activeStatus, showCounter, activeCount, allCount }: ContinentProps) {
  return (
    <>
      <div className='px-4 py-3 flex items-center justify-between'>
        <div className="text-xl font-bold">{continent}</div>
        {showCounter && (
          <div className="text-md">{activeCount}/{allCount}</div>
        )}
      </div>
      <TerritoryList territories={territories} activeStatus={activeStatus} />
    </>
  )
}

export default Continent