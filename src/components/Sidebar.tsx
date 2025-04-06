import Header from '@/components/sidebar/Header'
import Region from '@/components/territory/Region'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import regions from '@/constants/regions'
import useFilterStore, { Filter } from '@/store/filter'

import useUserTerritories from '@/hooks/useUserTerritories'

function Sidebar() {
  const { filter, setFilter } = useFilterStore()
  const groupedTerritories = useUserTerritories()

  const filteredRegions = regions.filter(region => {
    if (filter === 'visited') return groupedTerritories[region].visited.length > 0
    if (filter === 'favorite') return groupedTerritories[region].favorite.length > 0
    return true
  })

  return (
    <div className="max-h-full overflow-auto py-3">
      <Header />

      <Tabs defaultValue={filter} onValueChange={(value) => setFilter(value as Filter)} className="w-full px-4">
        <TabsList className="w-full flex justify-between">
          <TabsTrigger value="visited" className="flex-1">Visited</TabsTrigger>
          <TabsTrigger value="favorite" className="flex-1">Favorite</TabsTrigger>
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
        </TabsList>
      </Tabs>
      {filteredRegions.map((region) => {
        const regionTerritories = groupedTerritories[region]
        const visibleTerritories =
          filter === 'visited' ? regionTerritories.visited :
          filter === 'favorite' ? regionTerritories.favorite :
          regionTerritories.all

        const activeStatus = filter === 'all' ? 'visited' : filter

        return (
          <Region
            key={region}
            region={region}
            territories={visibleTerritories}
            activeStatus={activeStatus}
            showCounter={filter !== 'favorite'}
            activeCount={regionTerritories[activeStatus].length}
            allCount={regionTerritories.all.length}
          />
        )
      })}
    </div>
  )
}

export default Sidebar