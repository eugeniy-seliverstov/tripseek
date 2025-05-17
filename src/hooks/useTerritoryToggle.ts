import type { Filter } from '@/store/useFilterStore'
import type { TerritoryCode } from '@/types/territory'

interface UseTerritoryToggleProps {
  filter: Filter
  toggleVisitedTerritory: (code: TerritoryCode) => void
  toggleWishlistTerritory: (code: TerritoryCode) => void
}

interface UseTerritoryToggleResult {
  toggleTerritory: (code: TerritoryCode, event: React.MouseEvent<Element>) => void
}

export const useTerritoryToggle = ({
  filter,
  toggleVisitedTerritory,
  toggleWishlistTerritory,
}: UseTerritoryToggleProps): UseTerritoryToggleResult => {
  const toggleTerritory = (code: TerritoryCode, event: React.MouseEvent<Element>): void => {
    const { shiftKey, altKey, metaKey } = event

    const isWishlistAction = shiftKey && (altKey || metaKey)
    const isVisitedAction = shiftKey && !isWishlistAction

    if (isWishlistAction && (filter === 'wishlist' || filter === 'all')) {
      toggleWishlistTerritory(code)
      return
    }

    if (isVisitedAction && (filter === 'visited' || filter === 'all')) {
      toggleVisitedTerritory(code)
    }
  }

  return { toggleTerritory }
}
