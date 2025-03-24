import { useMemo } from 'react'

import useUserStore from '@/store/user'
import regions from '@/constants/regions'

import type { UserTerritory } from '@/types/user'
import type { TerritoryRegion } from '@/types/territory'

import { getTerritoriesByRegion } from '@/utils/territories'

type GroupedUserTerritories = Record<TerritoryRegion, {
  all: UserTerritory[]
  visited: UserTerritory[]
  favorite: UserTerritory[]
}>

export default function useUserTerritories() {
  const { visited, favorite } = useUserStore()

  const groupedTerritories = useMemo(() => {
    const grouped = {} as GroupedUserTerritories

    regions.forEach(region => {
      const territories = getTerritoriesByRegion(region) ?? []

      const all = territories.map(territory => ({
        ...territory,
        visited: visited.includes(territory.code),
        favorite: favorite.includes(territory.code),
      }))

      grouped[region] = {
        all,
        visited: all.filter(territory => territory.visited),
        favorite: all.filter(territory => territory.favorite)
      }
    })

    return grouped
  }, [visited, favorite])

  return groupedTerritories
}