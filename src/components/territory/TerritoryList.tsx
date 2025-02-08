import Territory from './Territory'
import { TerritoryType } from '@/types/territory'
import { GlobalStoreActions } from '@/store/global'

interface TerritoryListProps {
  territories: TerritoryType[]
  setHoverTerritory: GlobalStoreActions['setHoverTerritory']
}

function TerritoryList({ territories, setHoverTerritory }: TerritoryListProps) {
  const list = territories.map((territory) =>
    <Territory
      key={territory.code}
      territory={territory}
      onMouseEnter={() => setHoverTerritory(territory)}
      onMouseLeave={() => setHoverTerritory(null)}
    />
  )
  return list
}

export default TerritoryList