import { create } from 'zustand'
import { TTerritory } from '@/types/Territory'

export interface GlobalStoreState {
  hoverTerritory: TTerritory | null
}

export interface GlobalStoreActions {
  setHoverTerritory: (newTerritory: TTerritory | null) => void
}

const useGlobalStore = create<GlobalStoreState & GlobalStoreActions>((set) => ({
  hoverTerritory: null,
  setHoverTerritory: (newTerritory: TTerritory | null) => set(() => ({ hoverTerritory: newTerritory }))
}))

export default useGlobalStore