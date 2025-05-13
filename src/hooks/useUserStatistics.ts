import { useMemo } from 'react'

import type { StatItem } from '@/types/statistics'

import territories from '@/constants/territories'
import useUserTerritories from '@/hooks/useUserTerritories'
import useUserStore from '@/store/useUserStore'
import { getTerritoryByCode } from '@/utils/territories'

function useUserStatistics(): StatItem[] {
  const { visited } = useUserStore()
  const { grouped: groupedTerritories } = useUserTerritories()

  return useMemo(() => {
    const countryTotal = territories.filter(territory => territory.type === 'country').length
    const countryVisited = visited.filter(
      code => getTerritoryByCode(code)?.type === 'country',
    ).length

    const regionTotal = Object.keys(groupedTerritories).length
    const regionVisited = Object.values(groupedTerritories).filter(region =>
      region.some(territory => territory.visited),
    ).length

    return [
      {
        label: 'Countries',
        visited: countryVisited,
        total: countryTotal,
        hint: 'Based on the UN list. Some marked territories may not count as countries.',
      },
      { label: 'Territories', visited: visited.length, total: territories.length },
      { label: 'Regions', visited: regionVisited, total: regionTotal },
    ]
  }, [visited, groupedTerritories])
}

export default useUserStatistics
