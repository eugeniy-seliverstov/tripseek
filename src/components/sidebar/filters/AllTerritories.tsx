
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import RegionView from '@/components/sidebar/region/views/RegionView'
import RegionViewList from '@/components/sidebar/region/views/RegionViewList'
import RegionViewGrid from '@/components/sidebar/region/views/RegionViewGrid'
import RegionViewSelector from '@/components/sidebar/region/RegionViewSelector'

import useRegionViewStore from '@/store/useRegionViewStore'
import useUserTerritories from '@/hooks/useUserTerritories'

import { cn } from '@/lib/utils'

function AllTerritories() {
  const groupedTerritories = useUserTerritories()
  const { selectedRegion, setSelectedRegion, viewMode, setViewMode } = useRegionViewStore()

  return (
    <>
      <div
        className={cn(
          'flex items-center px-4 mt-2',
          selectedRegion ? 'justify-start' : 'justify-end'
        )}
      >
        {selectedRegion ? (
          <Button
            variant='link'
            className='p-0 gap-1 text-gray-500 hover:text-gray-900'
            onClick={() => setSelectedRegion(null)}
          >
            <ArrowLeft />
            Back to regions
          </Button>
        ) : (
          <RegionViewSelector value={viewMode} onChange={setViewMode} />
        )}
      </div>

      {selectedRegion ? (
        <RegionView
          region={selectedRegion}
          territories={groupedTerritories[selectedRegion]}
        />
      ) : viewMode === 'grid' ? (
        <RegionViewGrid
          groupedTerritories={groupedTerritories}
          onRegionClick={setSelectedRegion}
        />
      ) : (
        <RegionViewList groupedTerritories={groupedTerritories} />
      )}
    </>
  )
}

export default AllTerritories
