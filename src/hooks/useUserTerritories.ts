import { useMemo } from 'react'

import type { TerritoryCode } from '@/types/territory'
import type { GroupedUserTerritories } from '@/types/user'

import { SORTED_REGIONS } from '@/constants/regions'
import { useUserStore } from '@/store/useUserStore'
import { getTerritoriesByRegion } from '@/utils/territories'

interface UserTerritoriesResult {
  visited: TerritoryCode[]
  wishlist: TerritoryCode[]
  grouped: GroupedUserTerritories
}

export const useUserTerritories = (): UserTerritoriesResult => {
  const { visited, wishlist } = useUserStore()

  return useMemo(() => {
    const grouped = {} as GroupedUserTerritories

    for (const region of SORTED_REGIONS) {
      const raw = getTerritoriesByRegion(region)

      grouped[region] = raw.map(territory => ({
        ...territory,
        visited: visited.includes(territory.code),
        wishlist: wishlist.includes(territory.code),
      }))
    }

    return { visited, wishlist, grouped }
  }, [visited, wishlist])
}
