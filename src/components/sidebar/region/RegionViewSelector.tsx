import { LuList, LuLayoutGrid } from 'react-icons/lu'

import type { RegionViewMode } from '@/store/useRegionViewStore'
import type { ReactElement } from 'react'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface RegionViewSelectorProps {
  value: RegionViewMode
  onChange: (value: RegionViewMode) => void
}

function RegionViewSelector({ value, onChange }: RegionViewSelectorProps): ReactElement {
  return (
    <Tabs value={value} onValueChange={val => onChange(val as RegionViewMode)}>
      <TabsList>
        <TabsTrigger value='list' className='p-2'>
          <LuList />
        </TabsTrigger>
        <TabsTrigger value='grid' className='p-2'>
          <LuLayoutGrid />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default RegionViewSelector
