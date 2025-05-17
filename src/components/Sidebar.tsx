import { useEffect, ReactElement } from 'react'

import type { Filter } from '@/store/useFilterStore'

import { Header } from '@/components/sidebar/Header'
import { AllTerritories } from '@/components/sidebar/filters/AllTerritories'
import { VisitedTerritories } from '@/components/sidebar/filters/VisitedTerritories'
import { WishlistTerritories } from '@/components/sidebar/filters/WishlistTerritories'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useFilterStore } from '@/store/useFilterStore'
import { useUserStore } from '@/store/useUserStore'

export const Sidebar = (): ReactElement => {
  const { filter, setFilter, initFilter } = useFilterStore()
  const { visited } = useUserStore()

  const filterViews: Record<Filter, ReactElement> = {
    visited: <VisitedTerritories />,
    wishlist: <WishlistTerritories />,
    all: <AllTerritories />,
  }

  useEffect(() => {
    initFilter(visited.length)
  }, [])

  return (
    <div className='w-full sm:w-2/5 max-w-md h-full bg-background text-text overflow-auto'>
      <Header />

      <Tabs
        value={filter}
        onValueChange={value => setFilter(value as Filter)}
        className='w-full px-4'
      >
        <TabsList className='w-full flex justify-between'>
          <TabsTrigger value='visited' className='flex-1'>
            Visited
          </TabsTrigger>
          <TabsTrigger value='wishlist' className='flex-1'>
            Want to visit
          </TabsTrigger>
          <TabsTrigger value='all' className='flex-1'>
            All
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {filterViews[filter]}
    </div>
  )
}
