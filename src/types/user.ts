import { Territory, TerritoryRegion } from './territory'

export interface UserTerritory extends Territory {
  visited?: boolean
  wishlist?: boolean
}

export type GroupedUserTerritories = Record<TerritoryRegion, UserTerritory[]>