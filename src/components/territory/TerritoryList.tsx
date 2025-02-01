import Territory from './Territory'
import { TerritoryType } from '@/types/Territory'
import { GlobalStoreActions } from '@/store/global'

interface TerritoryListProps {
  territories: TerritoryType[]
  setHoverTerritory: GlobalStoreActions['setHoverTerritory']
}

function TerritoryList({ territories, setHoverTerritory }: TerritoryListProps) {
  const list = territories.map((territory) =>
    <Territory
      key={territory.code}
      code={territory.code}
      name={territory.name}
      onMouseEnter={() => setHoverTerritory(territory)}
      onMouseLeave={() => setHoverTerritory(null)}
    />
  )
  return list
}

export default TerritoryList