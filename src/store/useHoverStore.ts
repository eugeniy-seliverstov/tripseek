import { create } from 'zustand'
import type { Nullable } from '@/types/utils'
import type { Territory } from '@/types/territory'

export interface HoverStore {
  hoverTerritory: Nullable<Territory>
  setHoverTerritory: (territory: Nullable<Territory>) => void
}

const useHoverStore = create<HoverStore>((set) => ({
  hoverTerritory: null,
  setHoverTerritory: (territory) => set(() => ({ hoverTerritory: territory })),
}))

export default useHoverStore