import { useMemo } from 'react'
import useUserStore from '@/store/useUserStore'
import { SORTED_REGIONS } from '@/constants/regions'
import { getTerritoriesByRegion } from '@/utils/territories'
import type { GroupedUserTerritories } from '@/types/user'

export default function useUserTerritories(): GroupedUserTerritories {
  const { visited, wishlist } = useUserStore()

  return useMemo(() => {
    const grouped = {} as GroupedUserTerritories

    for (const region of SORTED_REGIONS) {
      const raw = getTerritoriesByRegion(region)

      grouped[region] = raw.map((territory) => ({
        ...territory,
        visited: visited.includes(territory.code),
        wishlist: wishlist.includes(territory.code),
      }))
    }

    return grouped
  }, [visited, wishlist])
}