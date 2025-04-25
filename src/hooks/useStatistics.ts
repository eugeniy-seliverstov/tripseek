import { useMemo } from 'react'
import useUserStore from '@/store/useUserStore'
import useUserTerritories from '@/hooks/useUserTerritories'
import { getTerritoryByCode } from '@/utils/territories'
import territories from '@/constants/territories'

export interface StatItem {
  label: string
  visited: number
  total: number
}

export default function useStatistics(): StatItem[] {
  const { visited } = useUserStore()
  const groupedTerritories = useUserTerritories()

  return useMemo(() => {
    const countryTotal = territories.filter(territory => territory.type === 'country').length
    const countryVisited = visited.filter(code => getTerritoryByCode(code)?.type === 'country').length

    const regionTotal = Object.keys(groupedTerritories).length
    const regionVisited = Object.values(groupedTerritories).filter(region => region.some(territory => territory.visited)).length

    return [
      { label: 'Countries', visited: countryVisited, total: countryTotal },
      { label: 'Territories', visited: visited.length, total: territories.length },
      { label: 'Regions', visited: regionVisited, total: regionTotal },
    ]
  }, [visited, groupedTerritories])
}
