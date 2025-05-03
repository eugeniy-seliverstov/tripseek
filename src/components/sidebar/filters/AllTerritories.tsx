import { useState } from 'react'

import RegionViewList from '@/components/sidebar/region/RegionViewList'
import RegionViewGrid from '@/components/sidebar/region/RegionViewGrid'
import RegionViewSelector from '@/components/sidebar/region/RegionViewSelector'

import useUserTerritories from '@/hooks/useUserTerritories'

import type { RegionViewType } from '@/components/sidebar/region/RegionViewSelector'

function AllTerritories() {
  const [view, setView] = useState<RegionViewType>('list')
  const groupedTerritories = useUserTerritories()

  return (
    <>
      <div className='flex justify-end px-4 mt-2'>
        <RegionViewSelector value={view} onChange={setView}/>
      </div>

      {view === 'list' && <RegionViewList groupedTerritories={groupedTerritories} />}
      {view === 'grid' && <RegionViewGrid groupedTerritories={groupedTerritories} />}
    </>
  )
}

export default AllTerritories
