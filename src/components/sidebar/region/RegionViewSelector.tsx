import { LuList, LuLayoutGrid } from 'react-icons/lu'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export type RegionViewType = 'list' | 'grid'

interface RegionViewSelectorProps {
  value: RegionViewType
  onChange: (value: RegionViewType) => void
}

function RegionViewSelector({ value, onChange }: RegionViewSelectorProps) {
  return (
    <Tabs value={value} onValueChange={val => onChange(val as RegionViewType)}>
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