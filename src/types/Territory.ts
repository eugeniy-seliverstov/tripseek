import territories from '@/data/territories'

export type TTerritory = (typeof territories)[number]
export type TTerritoryName = TTerritory['name']
export type TTerritoryIso2 = TTerritory['iso2']
export type TTerritoryIso3 = TTerritory['iso3']
export type TContinent = TTerritory['continent']
