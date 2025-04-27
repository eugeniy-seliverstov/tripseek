import { JSX } from 'react'
import Header from '@/components/sidebar/Header'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AllRegions from '@/components/sidebar/filters/AllRegions'
import VisitedRegions from '@/components/sidebar/filters/VisitedRegions'
import WishlistRegions from '@/components/sidebar/filters/WishlistRegions'

import useFilterStore from '@/store/useFilterStore'
import type { Filter } from '@/store/useFilterStore'

function Sidebar() {
  const { filter, setFilter } = useFilterStore()

  const filterViews: Record<Filter, JSX.Element> = {
    visited: <VisitedRegions />,
    wishlist: <WishlistRegions />,
    all: <AllRegions />
  }

  return (
    <div className="w-full sm:w-2/5 max-w-md h-full bg-white overflow-auto">
      <Header />

      <Tabs defaultValue={filter} onValueChange={(value) => setFilter(value as Filter)} className="w-full px-4">
        <TabsList className="w-full flex justify-between">
          <TabsTrigger value="visited" className="flex-1">Visited</TabsTrigger>
          <TabsTrigger value="wishlist" className="flex-1">Want to visit</TabsTrigger>
          <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
        </TabsList>
      </Tabs>

      {filterViews[filter]}
    </div>
  )
}

export default Sidebar