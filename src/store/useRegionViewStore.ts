import { create } from 'zustand'

import type { TerritoryRegion } from '@/types/territory'
import type { Nullable } from '@/types/utils'

export type RegionViewMode = 'grid' | 'list'

interface RegionViewStore {
  viewMode: RegionViewMode
  selectedRegion: Nullable<TerritoryRegion>

  setViewMode: (mode: RegionViewMode) => void
  setSelectedRegion: (region: Nullable<TerritoryRegion>) => void
}

const useRegionViewStore = create<RegionViewStore>(set => ({
  viewMode: 'grid',
  selectedRegion: null,
  setViewMode: (mode): void => set(() => ({ viewMode: mode })),
  setSelectedRegion: (region): void => set(() => ({ selectedRegion: region })),
}))

export default useRegionViewStore
