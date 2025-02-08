import { create } from 'zustand'
import { TerritoryType } from '@/types/territory'
import { Nullable } from '@/types/utils'

export interface GlobalStoreState {
  hoverTerritory: Nullable<TerritoryType>
}

export interface GlobalStoreActions {
  setHoverTerritory: (newTerritory: Nullable<TerritoryType>) => void
}

const useGlobalStore = create<GlobalStoreState & GlobalStoreActions>((set) => ({
  hoverTerritory: null,
  setHoverTerritory: (newTerritory: Nullable<TerritoryType>) => set(() => ({ hoverTerritory: newTerritory }))
}))

export default useGlobalStore