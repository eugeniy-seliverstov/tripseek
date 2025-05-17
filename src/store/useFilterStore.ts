import { create } from 'zustand'

export type Filter = 'visited' | 'wishlist' | 'all'

export interface FilterStore {
  filter: Filter
  setFilter: (filter: Filter) => void
  initFilter: (count: number) => void
}

export const useFilterStore = create<FilterStore>(set => ({
  filter: 'visited',
  setFilter: (filter): void => set(() => ({ filter })),
  initFilter: (count): void => set(() => ({ filter: count ? 'visited' : 'all' })),
}))
