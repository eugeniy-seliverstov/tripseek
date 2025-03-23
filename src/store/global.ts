import { create } from 'zustand'
import { Territory } from '@/types/territory'
import { Nullable } from '@/types/utils'

export interface GlobalStoreState {
  hoverTerritory: Nullable<Territory>
}

export interface GlobalStoreActions {
  setHoverTerritory: (newTerritory: Nullable<Territory>) => void
}

const useGlobalStore = create<GlobalStoreState & GlobalStoreActions>((set) => ({
  hoverTerritory: null,
  setHoverTerritory: (newTerritory) => set(() => ({ hoverTerritory: newTerritory }))
}))

export default useGlobalStore