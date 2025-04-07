import { create } from 'zustand'
import { Territory } from '@/types/territory'
import { Nullable } from '@/types/utils'

export type Filter = 'visited' | 'favorite' | 'all'

export interface StoreState {
  filter: Filter
  hoverTerritory: Nullable<Territory>
}

export interface StoreActions {
  setFilter: (filter: Filter) => void
  setHoverTerritory: (newTerritory: Nullable<Territory>) => void
}

const useStore = create<StoreState & StoreActions>((set) => ({
  filter: 'visited',
  setFilter: (filter) => set(() => ({ filter })),
  hoverTerritory: null,
  setHoverTerritory: (newTerritory) => set(() => ({ hoverTerritory: newTerritory }))
}))

export default useStore