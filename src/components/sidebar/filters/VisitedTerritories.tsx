import { PiMapTrifold } from 'react-icons/pi'

import type { ReactElement } from 'react'

import { EmptyState } from '@/components/sidebar/EmptyState'
import { Region } from '@/components/sidebar/region/Region'
import { SORTED_REGIONS } from '@/constants/regions'
import { useUserTerritories } from '@/hooks/useUserTerritories'

export const VisitedTerritories = (): ReactElement => {
  const { visited, grouped: groupedTerritories } = useUserTerritories()
  const filteredRegions = SORTED_REGIONS.filter(region =>
    groupedTerritories[region].some(territory => territory.visited),
  )

  return (
    <>
      {visited.length === 0 && (
        <EmptyState
          icon={PiMapTrifold}
          title='No visited countries yet'
          description='Mark the countries you’ve been to and track your adventures'
        />
      )}

      {filteredRegions.map(region => {
        const regionTerritories = groupedTerritories[region]
        const visitedTerritories = regionTerritories.filter(territory => territory.visited)

        return (
          <Region
            key={region}
            name={region}
            territories={visitedTerritories}
            showCounters
            activeCount={visitedTerritories.length}
            totalCount={regionTerritories.length}
          />
        )
      })}
    </>
  )
}
