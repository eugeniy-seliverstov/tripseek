import TerritoryItem from './TerritoryItem'

import useGlobalStore from '@/store/global'
import useUserStore from '@/store/user'

import type { UserTerritory } from '@/types/user'

interface TerritoryListProps {
  territories: UserTerritory[]
  activeStatus?: 'visited' | 'favorite'
}

function TerritoryList({ territories, activeStatus }: TerritoryListProps) {
  const {
    addVisitedTerritory,
    addFavoriteTerritory,
    removeVisitedTerritory,
    removeFavoriteTerritory,
  } = useUserStore()
  const { setHoverTerritory } = useGlobalStore()

  return territories.map((territory) => {
    const active =
      activeStatus === 'favorite' ? territory.favorite ?? false :
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
        else {
          if (territory.favorite) removeFavoriteTerritory(territory.code)
          addVisitedTerritory(territory.code)
        }
      }}
      onFavoriteClick={() => {
        if (territory.favorite) removeFavoriteTerritory(territory.code)
        else addFavoriteTerritory(territory.code)
      }}
    />
  })
}

export default TerritoryList