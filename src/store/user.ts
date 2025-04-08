import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TerritoryCode } from '@/types/territory'
import unique from '@/utils/unique'

export interface UserStore {
  visited: TerritoryCode[],
  wishlist: TerritoryCode[],
}

export interface UserStoreActions {
  addVisitedTerritory: (code: TerritoryCode) => void
  removeVisitedTerritory: (code: TerritoryCode) => void
  addWishlistTerritory: (code: TerritoryCode) => void
  removeWishlistTerritory: (code: TerritoryCode) => void
}

const useUserStore = create<UserStore & UserStoreActions>()(
  persist(
    (set) => ({
      visited: [],
      wishlist: [],
      addVisitedTerritory: (code: TerritoryCode) =>
        set((state) => ({ visited: unique([...state.visited, code]), wishlist: [...state.wishlist.filter(value => value !== code)] })),
      removeVisitedTerritory: (code: TerritoryCode) =>
        set((state) => ({ visited: state.visited.filter(value => value !== code) })),
      addWishlistTerritory: (code: TerritoryCode) =>
        set((state) => ({ wishlist: unique([...state.wishlist, code]) })),
      removeWishlistTerritory: (code: TerritoryCode) =>
        set((state) => ({ wishlist: state.wishlist.filter(value => value !== code) })),
    }),
    { name: 'territories' }
  )
)

export default useUserStore