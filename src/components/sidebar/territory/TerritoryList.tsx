import { motion } from 'framer-motion'

import type { UserTerritory } from '@/types/user'
import type { ReactElement } from 'react'

import { TerritoryItem } from '@/components/sidebar/territory/TerritoryItem'
import { useHoverStore } from '@/store/useHoverStore'
import { useUserStore } from '@/store/useUserStore'

interface TerritoryListProps {
  territories: UserTerritory[]
  animation?: boolean
  isActive?: (territory: UserTerritory) => boolean
}

export const TerritoryList = ({
  territories,
  animation = true,
  isActive,
}: TerritoryListProps): ReactElement[] => {
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
      <motion.div
        key={territory.code}
        {...(animation && {
          layout: true,
          transition: { type: 'spring', stiffness: 500, damping: 30 },
        })}
        whileHover={{ scale: 1.01, zIndex: 1 }}
        className='relative'
      >
        <TerritoryItem
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
      </motion.div>
    )
  })
}
