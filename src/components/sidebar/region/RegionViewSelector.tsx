import { LuList, LuLayoutGrid } from 'react-icons/lu'

import type { RegionViewMode } from '@/store/useRegionViewStore'
import type { ReactElement } from 'react'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'

interface RegionViewSelectorProps {
  value: RegionViewMode
  onChange: (value: RegionViewMode) => void
}

export const RegionViewSelector = ({ value, onChange }: RegionViewSelectorProps): ReactElement => {
  return (
    <Tabs value={value} onValueChange={val => onChange(val as RegionViewMode)}>
      <TabsList>
        <TabsTrigger value='list' className='p-2'>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='flex items-center'>
                <LuList />
              </div>
            </TooltipTrigger>
            <TooltipContent side='top' sideOffset={12} collisionPadding={8}>
              List view
            </TooltipContent>
          </Tooltip>
        </TabsTrigger>

        <TabsTrigger value='grid' className='p-2'>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='flex items-center'>
                <LuLayoutGrid />
              </div>
            </TooltipTrigger>
            <TooltipContent side='top' sideOffset={12} collisionPadding={8}>
              Grid view
            </TooltipContent>
          </Tooltip>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
