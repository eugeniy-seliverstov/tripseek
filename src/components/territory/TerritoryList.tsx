import Territory from './Territory'
import { TerritoryType } from '@/types/territory'
import useGlobalStore from '@/store/global'
import useTerritoriesStore from '@/store/territories'

interface TerritoryListProps {
  territories: TerritoryType[]
}

function TerritoryList({ territories }: TerritoryListProps) {
  const { setHoverTerritory } = useGlobalStore()
  const { addVisitedTerritory, removeVisitedTerritory } = useTerritoriesStore()

  const list = territories.map((territory) => {
    return <Territory
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