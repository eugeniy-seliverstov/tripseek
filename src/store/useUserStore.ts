import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { TerritoryCode } from '@/types/territory'
import unique from '@/utils/unique'

export interface UserStore {
  visited: TerritoryCode[]
  wishlist: TerritoryCode[]
}

export interface UserStoreActions {
  addVisitedTerritory: (code: TerritoryCode) => void
  removeVisitedTerritory: (code: TerritoryCode) => void
  toggleVisitedTerritory: (code: TerritoryCode) => void

  addWishlistTerritory: (code: TerritoryCode) => void
  removeWishlistTerritory: (code: TerritoryCode) => void
  toggleWishlistTerritory: (code: TerritoryCode) => void
}

const useUserStore = create<UserStore & UserStoreActions>()(
  persist(
    (set, get) => ({
      visited: [],
      wishlist: [],

      addVisitedTerritory: (code: TerritoryCode): void =>
        set(state => ({
          visited: unique([...state.visited, code]),
          wishlist: state.wishlist.filter(value => value !== code),
        })),
      removeVisitedTerritory: (code: TerritoryCode): void =>
        set(state => ({
          visited: state.visited.filter(value => value !== code),
        })),
      toggleVisitedTerritory: (code: TerritoryCode): void => {
        const { visited, addVisitedTerritory, removeVisitedTerritory } = get()
        if (visited.includes(code)) {
          removeVisitedTerritory(code)
        } else {
          addVisitedTerritory(code)
        }
      },

      addWishlistTerritory: (code: TerritoryCode): void =>
        set(state => ({
          wishlist: state.visited.includes(code)
            ? state.wishlist
            : unique([...state.wishlist, code]),
        })),
      removeWishlistTerritory: (code: TerritoryCode): void =>
        set(state => ({
          wishlist: state.wishlist.filter(value => value !== code),
        })),
      toggleWishlistTerritory: (code: TerritoryCode): void => {
        const { wishlist, removeWishlistTerritory, addWishlistTerritory } = get()
        if (wishlist.includes(code)) {
          removeWishlistTerritory(code)
        } else {
          addWishlistTerritory(code)
        }
      },
    }),
    { name: 'territories' },
  ),
)

export default useUserStore
