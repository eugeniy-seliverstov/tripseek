import { useState } from 'react'
import { LuArrowLeft } from 'react-icons/lu'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import RegionView from '@/components/sidebar/region/views/RegionView'
import RegionViewList from '@/components/sidebar/region/views/RegionViewList'
import RegionViewGrid from '@/components/sidebar/region/views/RegionViewGrid'
import RegionViewSelector from '@/components/sidebar/region/RegionViewSelector'

import useRegionViewStore from '@/store/useRegionViewStore'
import useUserTerritories from '@/hooks/useUserTerritories'

import { cn } from '@/utils/cn'

function AllTerritories() {
  const { grouped: groupedTerritories } = useUserTerritories()
  const [searchQuery, setSearchQuery] = useState('')
  const { selectedRegion, setSelectedRegion, viewMode, setViewMode } = useRegionViewStore()

  return (
    <>
      <div
        className={cn(
          'flex items-center px-4 mt-3 mb-1 gap-3',
          selectedRegion ? 'justify-start' : 'justify-end',
          viewMode === 'grid' && !selectedRegion ? 'mb-3' : '',
        )}
      >
        {selectedRegion && (
          <Button
            variant='outline'
            size='icon'
            className='p-3'
            onClick={() => { setSelectedRegion(null); setSearchQuery(''); }}
          >
            <LuArrowLeft />
          </Button>
        )}
        <Input
          placeholder={`Country / Territory${selectedRegion ? '' : ' / Region'}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {!selectedRegion && !searchQuery && (
          <RegionViewSelector value={viewMode} onChange={setViewMode} />
        )}
      </div>

      {selectedRegion ? (
        <RegionView
          region={selectedRegion}
          territories={groupedTerritories[selectedRegion]}
          searchQuery={searchQuery}
        />
      ) : viewMode === 'grid' && !searchQuery ? (
        <RegionViewGrid
          groupedTerritories={groupedTerritories}
          onRegionClick={setSelectedRegion}
        />
      ) : (
        <RegionViewList
          groupedTerritories={groupedTerritories}
          searchQuery={searchQuery}
        />
      )}
    </>
  )
}

export default AllTerritories
