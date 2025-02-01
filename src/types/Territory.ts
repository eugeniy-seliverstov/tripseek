import territories from '@/data/territories'

export type TTerritory = (typeof territories)[number]
export type TTerritoryName = TTerritory['name']
export type TTerritoryCode = TTerritory['code']
export type TContinent = TTerritory['continent']
