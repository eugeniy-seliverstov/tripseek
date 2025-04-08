import { Territory } from './territory'

export interface UserTerritory extends Territory {
  visited?: boolean
  wishlist?: boolean
}