import territories from '@/data/territories'

type BaseTerritory = (typeof territories)[number]

export type TerritoryName = BaseTerritory['name']
export type TerritoryCode = BaseTerritory['code']
export type TerritoryType = BaseTerritory['type']
export type TerritoryContinent = BaseTerritory['continent']

export interface Territory {
  name: TerritoryName
  code: TerritoryCode
  type: TerritoryType
  continent: TerritoryContinent
  visited?: boolean
  favorite?: boolean
}