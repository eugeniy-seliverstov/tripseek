import Region from '@/components/sidebar/territory/Region'
import useUserTerritories from '@/hooks/useUserTerritories'
import regions from '@/constants/regions'
import type { UserTerritory } from '@/types/user'

const sortByVisited = (a: UserTerritory, b: UserTerritory): number => {
  if (a.visited && !b.visited) return -1
  if (!a.visited && b.visited) return 1
  return a.name.localeCompare(b.name)
}

function AllRegions() {
  const groupedTerritories = useUserTerritories()

  return (
    <>
      {regions.map(region => {
        const regionTerritories = groupedTerritories[region].slice().sort(sortByVisited)
        const visitedTerritories = regionTerritories.filter(territory => territory.visited)

        return (
          <Region
            key={region}
            name={region}
            territories={regionTerritories}
            activeStatus="visited"
            showCounters={true}
            activeCount={visitedTerritories.length}
            totalCount={regionTerritories.length}
          />
        )
      })}
    </>
  )
}

export default AllRegions
