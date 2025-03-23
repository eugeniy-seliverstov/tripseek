import { create } from 'zustand'

export type Filter = 'visited' | 'favorite' | 'all'

export interface FilterStoreState {
  filter: Filter,
}

export interface FilterStoreActions {
  setFilter: (filter: Filter) => void
}

const useFilterStore = create<FilterStoreState & FilterStoreActions>((set) => ({
  filter: 'visited',
  setFilter: (filter) => set(() => ({ filter })),
}))

export default useFilterStore