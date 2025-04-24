import { create } from 'zustand'

export type Filter = 'visited' | 'wishlist' | 'all'

export interface FilterStore {
  filter: Filter
  setFilter: (filter: Filter) => void
}

const useFilterStore = create<FilterStore>((set) => ({
  filter: 'visited',
  setFilter: (filter) => set(() => ({ filter })),
}))

export default useFilterStore