import { create } from 'zustand'

import type { Territory } from '@/types/territory'
import type { Nullable } from '@/types/utils'

export interface HoverStore {
  mapHoverTerritory: Nullable<Territory>
  sidebarHoverTerritory: Nullable<Territory>

  setMapHoverTerritory: (territory: Nullable<Territory>) => void
  setSidebarHoverTerritory: (territory: Nullable<Territory>) => void
}

const useHoverStore = create<HoverStore>(set => ({
  mapHoverTerritory: null,
  sidebarHoverTerritory: null,

  setMapHoverTerritory: (territory): void => set(() => ({ mapHoverTerritory: territory })),
  setSidebarHoverTerritory: (territory): void => set(() => ({ sidebarHoverTerritory: territory })),
}))

export default useHoverStore
