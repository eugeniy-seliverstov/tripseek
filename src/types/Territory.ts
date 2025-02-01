import territories from '@/data/territories'

export type TerritoryType = (typeof territories)[number]
export type TerritoryName = TerritoryType['name']
export type TerritoryCode = TerritoryType['code']
export type TContinent = TerritoryType['continent']
