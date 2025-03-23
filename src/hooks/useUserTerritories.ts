import { useMemo } from 'react'

import useUserStore from '@/store/user'
import continents from '@/constants/continents'

import type { UserTerritory } from '@/types/user'
import type { TerritoryContinent } from '@/types/territory'

import { getTerritoriesByContinent } from '@/data/territoriesUtils'

type GroupedUserTerritories = Record<TerritoryContinent, {
  all: UserTerritory[]
  visited: UserTerritory[]
  favorite: UserTerritory[]
}>

export default function useUserTerritories() {
  const { visited, favorite } = useUserStore()

  const groupedTerritories = useMemo(() => {
    const grouped = {} as GroupedUserTerritories

    continents.forEach(continent => {
      const territories = getTerritoriesByContinent(continent) ?? []

      const all = territories.map(territory => ({
        ...territory,
        visited: visited.includes(territory.code),
        favorite: favorite.includes(territory.code),
      }))

      grouped[continent] = {
        all,
        visited: all.filter(territory => territory.visited),
        favorite: all.filter(territory => territory.favorite)
      }
    })

    return grouped
  }, [visited, favorite])

  return groupedTerritories
}