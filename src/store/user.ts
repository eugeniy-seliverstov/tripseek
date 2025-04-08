import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TerritoryCode } from '@/types/territory'
import unique from '@/utils/unique'

export interface UserStore {
  visited: TerritoryCode[],
  favorite: TerritoryCode[],
}

export interface UserStoreActions {
  addVisitedTerritory: (code: TerritoryCode) => void
  removeVisitedTerritory: (code: TerritoryCode) => void
  addFavoriteTerritory: (code: TerritoryCode) => void
  removeFavoriteTerritory: (code: TerritoryCode) => void
}

const useUserStore = create<UserStore & UserStoreActions>()(
  persist(
    (set) => ({
      visited: [],
      favorite: [],
      addVisitedTerritory: (code: TerritoryCode) =>
        set((state) => ({ visited: unique([...state.visited, code]), favorite: [...state.favorite.filter(value => value !== code)] })),
      removeVisitedTerritory: (code: TerritoryCode) =>
        set((state) => ({ visited: state.visited.filter(value => value !== code) })),
      addFavoriteTerritory: (code: TerritoryCode) =>
        set((state) => ({ favorite: unique([...state.favorite, code]) })),
      removeFavoriteTerritory: (code: TerritoryCode) =>
        set((state) => ({ favorite: state.favorite.filter(value => value !== code) })),
    }),
    { name: 'territories' }
  )
)

export default useUserStore