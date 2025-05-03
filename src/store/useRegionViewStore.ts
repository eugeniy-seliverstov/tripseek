import { create } from 'zustand'
import type { Nullable } from '@/types/utils'
import type { TerritoryRegion } from '@/types/territory'

export type RegionViewMode = 'grid' | 'list'

interface RegionViewStore {
  viewMode: RegionViewMode
  selectedRegion: Nullable<TerritoryRegion>

  setViewMode: (mode: RegionViewMode) => void
  setSelectedRegion: (region: Nullable<TerritoryRegion>) => void
}

const useRegionViewStore = create<RegionViewStore>((set) => ({
  viewMode: 'grid',
  selectedRegion: null,
  setViewMode: (mode) => set(() => ({ viewMode: mode })),
  setSelectedRegion: (region) => set(() => ({ selectedRegion: region })),
}))

export default useRegionViewStore
