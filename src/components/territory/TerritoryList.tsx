import Territory from './Territory'
import { TTerritory } from '@/types/Territory'
import { GlobalStoreActions } from '@/store/global'

interface TerritoryListProps {
  territories: TTerritory[]
  setHoverTerritory: GlobalStoreActions['setHoverTerritory']
}

function TerritoryList({ territories, setHoverTerritory }: TerritoryListProps) {
  const list = territories.map((territory) =>
    <Territory
      key={territory.iso3}
      code={territory.iso3}
      name={territory.name}
      onMouseEnter={() => setHoverTerritory(territory)}
      onMouseLeave={() => setHoverTerritory(null)}
    />
  )
  return list
}

export default TerritoryList