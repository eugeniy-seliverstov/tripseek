import TerritoryItem from './TerritoryItem'

import useUserStore from '@/store/useUserStore'
import useHoverStore from '@/store/useHoverStore'

import type { UserTerritory } from '@/types/user'

interface TerritoryListProps {
  territories: UserTerritory[]
  activeStatus?: 'visited' | 'wishlist'
}

function TerritoryList({ territories, activeStatus }: TerritoryListProps) {
  const {
    addVisitedTerritory,
    addWishlistTerritory,
    removeVisitedTerritory,
    removeWishlistTerritory,
  } = useUserStore()
  const { setHoverTerritory } = useHoverStore()

  return territories.map((territory) => {
    const active =
      activeStatus === 'wishlist' ? territory.wishlist ?? false :
      activeStatus === 'visited' ? territory.visited ?? false :
      true

    return <TerritoryItem
      key={territory.code}
      active={active}
      territory={territory}
      onMouseEnter={() => setHoverTerritory(territory)}
      onMouseLeave={() => setHoverTerritory(null)}
      onVisitedClick={() => {
        if (territory.visited) removeVisitedTerritory(territory.code)
        else addVisitedTerritory(territory.code)
      }}
      onWishlistClick={() => {
        if (territory.wishlist) removeWishlistTerritory(territory.code)
        else addWishlistTerritory(territory.code)
      }}
    />
  })
}

export default TerritoryList