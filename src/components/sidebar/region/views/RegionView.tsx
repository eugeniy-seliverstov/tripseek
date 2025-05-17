import type { TerritoryRegion } from '@/types/territory'
import type { UserTerritory } from '@/types/user'
import type { ReactElement } from 'react'

import { Region } from '@/components/sidebar/region/Region'

interface RegionViewProps {
  region: TerritoryRegion
  territories: UserTerritory[]
  searchQuery?: string
}

const sortByVisited = (a: UserTerritory, b: UserTerritory): number => {
  if (a.visited && !b.visited) return -1
  if (!a.visited && b.visited) return 1
  return a.name.localeCompare(b.name)
}

export const RegionView = ({
  region,
  territories,
  searchQuery,
}: RegionViewProps): ReactElement | null => {
  const normalizedQuery = searchQuery?.toLowerCase().trim() ?? ''
  const regionTerritories = territories.slice().sort(sortByVisited)

  const filteredTerritories =
    !normalizedQuery || region.toLowerCase().includes(normalizedQuery)
      ? regionTerritories
      : regionTerritories.filter(territory =>
          territory.name.toLowerCase().includes(normalizedQuery),
        )

  if (normalizedQuery && filteredTerritories.length === 0) {
    return null
  }

  const visitedCodes = new Set(
    regionTerritories.filter(territory => territory.visited).map(territory => territory.code),
  )

  return (
    <Region
      name={region}
      territories={filteredTerritories}
      showCounters={!normalizedQuery}
      activeCount={visitedCodes.size}
      totalCount={regionTerritories.length}
      isActive={(territory: UserTerritory) => visitedCodes.has(territory.code)}
    />
  )
}
