import { create } from 'zustand'
import type { Nullable } from '@/types/utils'
import type { Territory } from '@/types/territory'

export interface HoverStore {
  mapHoverTerritory: Nullable<Territory>
  sidebarHoverTerritory: Nullable<Territory>

  setMapHoverTerritory: (territory: Nullable<Territory>) => void
  setSidebarHoverTerritory: (territory: Nullable<Territory>) => void
}

const useHoverStore = create<HoverStore>((set) => ({
  mapHoverTerritory: null,
  sidebarHoverTerritory: null,

  setMapHoverTerritory: (territory) => set(() => ({ mapHoverTerritory: territory })),
  setSidebarHoverTerritory: (territory) => set(() => ({ sidebarHoverTerritory: territory })),
}))

export default useHoverStore