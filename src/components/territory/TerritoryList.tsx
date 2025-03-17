import TerritoryItem from './TerritoryItem'
import { UserTerritory } from '@/types/user'
import useGlobalStore from '@/store/global'
import useUserStore from '@/store/user'

interface TerritoryListProps {
  territories: UserTerritory[]
}

function TerritoryList({ territories }: TerritoryListProps) {
  const { setHoverTerritory } = useGlobalStore()
  const { addVisitedTerritory, removeVisitedTerritory } = useUserStore()
  const { addFavoriteTerritory, removeFavoriteTerritory } = useUserStore()

  const list = territories.map((territory) => {
    return <TerritoryItem
      key={territory.code}
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
  return list
}

export default TerritoryList