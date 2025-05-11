import territories from '@/constants/territories'

type BaseTerritory = (typeof territories)[number]

export type TerritoryName = BaseTerritory['name']
export type TerritoryCode = BaseTerritory['code']
export type TerritoryType = BaseTerritory['type']
export type TerritoryRegion = BaseTerritory['region']

export interface Territory {
  name: TerritoryName
  code: TerritoryCode
  type: TerritoryType
  region: TerritoryRegion
}
