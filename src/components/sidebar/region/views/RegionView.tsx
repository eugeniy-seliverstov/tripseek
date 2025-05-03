import Region from '@/components/sidebar/region/Region'
import type { UserTerritory } from '@/types/user'
import type { TerritoryRegion } from '@/types/territory'

interface RegionViewProps {
  region: TerritoryRegion
  territories: UserTerritory[]
}

const sortByVisited = (a: UserTerritory, b: UserTerritory): number => {
  if (a.visited && !b.visited) return -1
  if (!a.visited && b.visited) return 1
  return a.name.localeCompare(b.name)
}

function RegionView({region, territories }: RegionViewProps) {
  const regionTerritories = territories.slice().sort(sortByVisited)
  const visitedCodes = new Set(regionTerritories.filter(territory => territory.visited).map(territory => territory.code))

  return (
    <Region
      name={region}
      territories={regionTerritories}
      showCounters
      activeCount={visitedCodes.size}
      totalCount={regionTerritories.length}
      isActive={(territory: UserTerritory) => visitedCodes.has(territory.code)}
    />
  )
}

export default RegionView