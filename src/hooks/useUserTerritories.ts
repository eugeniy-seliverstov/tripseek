import { useMemo } from 'react'

import useUserStore from '@/store/user'
import regions from '@/constants/regions'

import type { UserTerritory } from '@/types/user'
import type { TerritoryRegion } from '@/types/territory'

import { getTerritoriesByRegion } from '@/utils/territories'

type GroupedUserTerritories = Record<TerritoryRegion, {
  all: UserTerritory[]
  visited: UserTerritory[]
  wishlist: UserTerritory[]
}>

export default function useUserTerritories() {
  const { visited, wishlist } = useUserStore()

  const groupedTerritories = useMemo(() => {
    const grouped = {} as GroupedUserTerritories

    regions.forEach(region => {
      const territories = getTerritoriesByRegion(region) ?? []

      const all = territories.map(territory => ({
        ...territory,
        visited: visited.includes(territory.code),
        wishlist: wishlist.includes(territory.code),
      }))

      grouped[region] = {
        all,
        visited: all.filter(territory => territory.visited),
        wishlist: all.filter(territory => territory.wishlist)
      }
    })

    return grouped
  }, [visited, wishlist])

  return groupedTerritories
}