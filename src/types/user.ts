import { Territory, TerritoryRegion } from '@/types/territory'

export interface UserTerritory extends Territory {
  visited?: boolean
  wishlist?: boolean
}

export type GroupedUserTerritories = Record<TerritoryRegion, UserTerritory[]>
