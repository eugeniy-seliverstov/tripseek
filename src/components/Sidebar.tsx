import { useMemo } from 'react'
import territories from '@/data/territories'
import { TerritoryType, TerritoryContinent } from '@/types/territory'
import TerritoryList from './territory/TerritoryList'
import useTerritoriesStore from '@/store/territories'
import { getTerritoriesByContinent } from '@/data/territoriesUtils'

function Sidebar() {
  const { visited } = useTerritoriesStore()

  const continents = useMemo(() => Array.from(new Set(territories.map(t => t.continent))).sort(), [])
  const groupedTerritories = useMemo(() => {
    const grouped = {} as Record<TerritoryContinent, TerritoryType[]>
    continents.forEach((continent) => {
      grouped[continent] = getTerritoriesByContinent(continent)?.map(territory => ({ ...territory, visited: visited.includes(territory.code) }))
    })
    return grouped
  }, [continents, visited])

  const continentsList = continents.map((continent, index) =>
    <div key={continent}>
      <div className='pl-4 pr-6 py-3 flex items-center justify-between'>
        <div className=" text-xl font-bold">{continent}</div>
        <div className="text-md">{groupedTerritories[continent]?.filter(e => e.visited).length}/{groupedTerritories[continent]?.length}</div>
      </div>
      <TerritoryList territories={groupedTerritories[continent]} />
      {index !== continents.length - 1 && <hr className="mt-4 mb-2"/>}
    </div>
  )

  return (
    <div className="max-h-full overflow-auto py-3">
      {continentsList}
    </div>
  )
}

export default Sidebar