import territories from '@/data/territories'

type BaseTerritory = (typeof territories)[number]

export type TerritoryName = BaseTerritory['name']
export type TerritoryCode = BaseTerritory['code']
export type TerritoryContinent = BaseTerritory['continent']

export type TerritoryType = {
  name: TerritoryName,
  code: TerritoryCode,
  continent: TerritoryContinent,
  other?: boolean,
  disputed?: boolean,
}