import TerritoryItem from './TerritoryItem'
import { Territory } from '@/types/territory'
import useGlobalStore from '@/store/global'
import useUserStore from '@/store/user'

interface TerritoryListProps {
  territories: Territory[]
}

function TerritoryList({ territories }: TerritoryListProps) {
  const { setHoverTerritory } = useGlobalStore()
  const { addVisitedTerritory, removeVisitedTerritory } = useUserStore()

  const list = territories.map((territory) => {
    return <TerritoryItem
      key={territory.code}
      territory={territory}
      onMouseEnter={() => setHoverTerritory(territory)}
      onMouseLeave={() => setHoverTerritory(null)}
      onClick={() => {
        if (territory.visited) removeVisitedTerritory(territory.code)
        else addVisitedTerritory(territory.code)
      }}
    />
  })
  return list
}

export default TerritoryList