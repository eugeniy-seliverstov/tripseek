import Region from '@/components/sidebar/region/Region'
import { SORTED_REGIONS } from '@/constants/regions'

import type { UserTerritory } from '@/types/user'
import type { GroupedUserTerritories } from '@/types/user'

interface RegionViewListProps {
  groupedTerritories: GroupedUserTerritories
}

const sortByVisited = (a: UserTerritory, b: UserTerritory): number => {
  if (a.visited && !b.visited) return -1
  if (!a.visited && b.visited) return 1
  return a.name.localeCompare(b.name)
}

function RegionViewList({ groupedTerritories }: RegionViewListProps) {
  return (
    <>
      {SORTED_REGIONS.map(region => {
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

export default RegionViewList