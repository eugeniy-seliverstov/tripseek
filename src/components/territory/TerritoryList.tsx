import Territory from './Territory'
import { TTerritory } from '@/types/Territory'

interface TerritoryListProps {
  territories: TTerritory[]
}

function TerritoryList({ territories }: TerritoryListProps) {
  const list = territories.map(({name, iso3: code}) =>
    <Territory key={code} name={name} code={code}></Territory>
  )
  return list
}

export default TerritoryList