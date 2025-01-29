import { groupBy } from 'lodash'
import territories from '@/data/territories'
import { TContinent } from '@/types/Territory'
import TerritoryList from './territory/TerritoryList'
import useGlobalStore from '@/store/global'

function Sidebar() {
  const { setHoverTerritory } = useGlobalStore()

  const continents = territories
    .map(territory => territory.continent)
    .filter((territory, index, arr) => arr.indexOf(territory) === index)
    .sort()
  const groupedTerritories = groupBy(territories, ({ continent }: { continent: TContinent }) => continent)

  const continentsList = continents.map((continent, index) =>
    <div key={continent}>
      <div className="px-4 py-3 text-xl font-bold">{continent}</div>
      <TerritoryList
        territories={groupedTerritories[continent]}
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