import TerritoryItem from './TerritoryItem'
import { Territory } from '@/types/territory'
import useGlobalStore from '@/store/global'
import useTerritoriesStore from '@/store/territories'

interface TerritoryListProps {
  territories: Territory[]
}

function TerritoryList({ territories }: TerritoryListProps) {
  const { setHoverTerritory } = useGlobalStore()
  const { addVisitedTerritory, removeVisitedTerritory } = useTerritoriesStore()

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