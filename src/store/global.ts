import { create } from 'zustand'
import { TerritoryType } from '@/types/Territory'

export interface GlobalStoreState {
  hoverTerritory: TerritoryType | null
}

export interface GlobalStoreActions {
  setHoverTerritory: (newTerritory: TerritoryType | null) => void
}

const useGlobalStore = create<GlobalStoreState & GlobalStoreActions>((set) => ({
  hoverTerritory: null,
  setHoverTerritory: (newTerritory: TerritoryType | null) => set(() => ({ hoverTerritory: newTerritory }))
}))

export default useGlobalStore