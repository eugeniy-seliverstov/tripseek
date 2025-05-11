import type { UserTerritory } from '@/types/user'
import type { ReactElement } from 'react'

import TerritoryItem from '@/components/sidebar/territory/TerritoryItem'
import useHoverStore from '@/store/useHoverStore'
import useUserStore from '@/store/useUserStore'

interface TerritoryListProps {
  territories: UserTerritory[]
  isActive?: (territory: UserTerritory) => boolean
}

function TerritoryList({ territories, isActive }: TerritoryListProps): ReactElement[] {
  const {
    addVisitedTerritory,
    addWishlistTerritory,
    removeVisitedTerritory,
    removeWishlistTerritory,
  } = useUserStore()
  const setSidebarHoverTerritory = useHoverStore(state => state.setSidebarHoverTerritory)

  return territories.map(territory => {
    const active = isActive?.(territory) ?? true

    return (
      <TerritoryItem
        key={territory.code}
        active={active}
        territory={territory}
        onMouseEnter={() => setSidebarHoverTerritory(territory)}
        onMouseLeave={() => setSidebarHoverTerritory(null)}
        onVisitedClick={() => {
          if (territory.visited) removeVisitedTerritory(territory.code)
          else addVisitedTerritory(territory.code)
        }}
        onWishlistClick={() => {
          if (territory.wishlist) removeWishlistTerritory(territory.code)
          else addWishlistTerritory(territory.code)
        }}
      />
    )
  })
}

export default TerritoryList
