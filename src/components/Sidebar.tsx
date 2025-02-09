import territories from '@/data/territories'
import { TerritoryType } from '@/types/territory'
import TerritoryList from './territory/TerritoryList'
import useGlobalStore from '@/store/global'

function Sidebar() {
  const { setHoverTerritory } = useGlobalStore()

  const continents = territories
    .map(territory => territory.continent)
    .filter((territory, index, arr) => arr.indexOf(territory) === index)
    .sort()
  const groupedTerritories = Object.groupBy(territories, (territoriy => territoriy.continent))

  const continentsList = continents.map((continent, index) =>
    <div key={continent}>
      <div className="px-4 py-3 text-xl font-bold">{continent}</div>
      <TerritoryList
        territories={(groupedTerritories[continent] ?? []) as TerritoryType[]}
        setHoverTerritory={setHoverTerritory}
      />
      {index !== continents.length && <hr className="mt-4 mb-2"/>}
    </div>
  )

  return (
    <div className="max-h-full overflow-auto py-3">
      {continentsList}
    </div>
  )
}

export default Sidebar