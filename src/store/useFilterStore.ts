import { create } from 'zustand'

export type Filter = 'visited' | 'wishlist' | 'all'

export interface FilterStore {
  filter: Filter
  setFilter: (filter: Filter) => void
  initFilter: (count: number) => void
}

const useFilterStore = create<FilterStore>((set) => ({
  filter: 'visited',
  setFilter: (filter) => set(() => ({ filter })),
  initFilter: (count) => set(() => ({ filter: count ? 'visited' : 'all' })),
}))

export default useFilterStore