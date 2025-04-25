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
        const visitedCodes = new Set(regionTerritories.filter(territory => territory.visited).map(territory => territory.code))

        return (
          <Region
            key={region}
            name={region}
            territories={regionTerritories}
            showCounters
            activeCount={visitedCodes.size}
            totalCount={regionTerritories.length}
            isActive={(territory: UserTerritory) => visitedCodes.has(territory.code)}
          />
        )
      })}
    </>
  )
}

export default AllRegions
