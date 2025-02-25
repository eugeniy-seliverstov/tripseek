import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TerritoryCode } from '@/types/territory'
import unique from '@/utils/unique'

export interface UserStore {
  visited: TerritoryCode[]
}

export interface UserStoreActions {
  addVisitedTerritory: (code: TerritoryCode) => void
  removeVisitedTerritory: (code: TerritoryCode) => void
}

const useUserStore = create<UserStore & UserStoreActions>()(
  persist(
    (set) => ({
      visited: [],
      addVisitedTerritory: (code: TerritoryCode) =>
        set((state) => ({ visited: unique([...state.visited, code]) })),
      removeVisitedTerritory: (code: TerritoryCode) =>
        set((state) => ({ visited: state.visited.filter(value => value !== code) })),
    }),
    { name: 'territories' }
  )
)

export default useUserStore