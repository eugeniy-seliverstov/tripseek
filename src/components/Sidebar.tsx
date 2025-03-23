import Continent from './territory/Continent'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import continents from '@/constants/continents'
import useFilterStore, { Filter } from '@/store/filter'

import useUserTerritories from '@/hooks/useUserTerritories'

function Sidebar() {
  const { filter, setFilter } = useFilterStore()
  const groupedTerritories = useUserTerritories()

  const filteredContinents = continents.filter(continent => {
    if (filter === 'visited') return groupedTerritories[continent].visited.length > 0
    if (filter === 'favorite') return groupedTerritories[continent].favorite.length > 0
    return true
  })

  return (
    <div className="max-h-full overflow-auto py-3">
      <Tabs defaultValue={filter} onValueChange={(value) => setFilter(value as Filter)} className="w-full px-4">
        <TabsList className="w-full flex justify-between">
          <TabsTrigger value="visited" className="flex-1">Visited</TabsTrigger>
          <TabsTrigger value="favorite" className="flex-1">Favorite</TabsTrigger>
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
        </TabsList>
      </Tabs>
      {filteredContinents.map((continent) => {
        const continentTerritories = groupedTerritories[continent]
        const visibleTerritories =
          filter === 'visited' ? continentTerritories.visited :
          filter === 'favorite' ? continentTerritories.favorite :
          continentTerritories.all

        const activeStatus = filter === 'all' ? 'visited' : filter

        return (
          <Continent
            continent={continent}
            territories={visibleTerritories}
            activeStatus={activeStatus}
            showCounter={filter !== 'favorite'}
            activeCount={continentTerritories[activeStatus].length}
            allCount={continentTerritories.all.length}
          />
        )
      })}
    </div>
  )
}

export default Sidebar