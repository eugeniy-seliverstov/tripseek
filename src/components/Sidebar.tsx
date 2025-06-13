import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, ReactElement } from 'react'

import type { Filter } from '@/store/useFilterStore'

import { Header } from '@/components/sidebar/Header'
import { AllTerritories } from '@/components/sidebar/filters/AllTerritories'
import { VisitedTerritories } from '@/components/sidebar/filters/VisitedTerritories'
import { WishlistTerritories } from '@/components/sidebar/filters/WishlistTerritories'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useMobile } from '@/hooks/useMobile'
import { useFilterStore } from '@/store/useFilterStore'
import { useUserStore } from '@/store/useUserStore'

export const Sidebar = (): ReactElement => {
  const { filter, setFilter, initFilter } = useFilterStore()
  const { visited } = useUserStore()
  const isMobile = useMobile()

  const filterViews: Record<Filter, ReactElement> = {
    visited: <VisitedTerritories />,
    wishlist: <WishlistTerritories />,
    all: <AllTerritories />,
  }

  useEffect(() => {
    initFilter(visited.length)
  }, [])

  return (
    <div className='w-full sm:w-1/2 md:2/5 sm:max-w-md min-h-0 sm:h-full flex flex-col grow bg-background text-text rounded-t-3xl sm:rounded-none'>
      {!isMobile && <Header />}

      <Tabs
        value={filter}
        onValueChange={value => setFilter(value as Filter)}
        className='w-full mt-5 px-4'
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

      <AnimatePresence mode='wait'>
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className='grow min-h-0 overflow-auto'
        >
          {filterViews[filter]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
