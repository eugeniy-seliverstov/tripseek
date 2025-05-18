import { motion, AnimatePresence } from 'framer-motion'
import { useState, ReactElement } from 'react'
import { LuArrowLeft } from 'react-icons/lu'

import { RegionViewSelector } from '@/components/sidebar/region/RegionViewSelector'
import { RegionView } from '@/components/sidebar/region/views/RegionView'
import { RegionViewGrid } from '@/components/sidebar/region/views/RegionViewGrid'
import { RegionViewList } from '@/components/sidebar/region/views/RegionViewList'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useUserTerritories } from '@/hooks/useUserTerritories'
import { useRegionViewStore } from '@/store/useRegionViewStore'
import { cn } from '@/utils/cn'

const motionProps = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.2 },
}

export const AllTerritories = (): ReactElement => {
  const { grouped: groupedTerritories } = useUserTerritories()
  const [searchQuery, setSearchQuery] = useState('')
  const { selectedRegion, setSelectedRegion, viewMode, setViewMode } = useRegionViewStore()

  return (
    <>
      <div
        className={cn(
          'flex items-center px-4 mt-3 mb-1 gap-3',
          selectedRegion ? 'justify-start' : 'justify-end',
        )}
      >
        {selectedRegion && (
          <Button
            variant='outline'
            size='icon'
            className='p-3'
            onClick={() => {
              setSelectedRegion(null)
              setSearchQuery('')
            }}
          >
            <LuArrowLeft />
          </Button>
        )}
        <Input
          placeholder={`Country / Territory${selectedRegion ? '' : ' / Region'}`}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        {!selectedRegion && !searchQuery && (
          <RegionViewSelector value={viewMode} onChange={setViewMode} />
        )}
      </div>

      <AnimatePresence mode='wait'>
        {selectedRegion ? (
          <motion.div key='region' {...motionProps}>
            <RegionView
              region={selectedRegion}
              territories={groupedTerritories[selectedRegion]}
              searchQuery={searchQuery}
            />
          </motion.div>
        ) : viewMode === 'grid' && !searchQuery ? (
          <motion.div key='grid' {...motionProps}>
            <RegionViewGrid
              groupedTerritories={groupedTerritories}
              onRegionClick={setSelectedRegion}
            />
          </motion.div>
        ) : (
          <motion.div key='list' {...motionProps}>
            <RegionViewList groupedTerritories={groupedTerritories} searchQuery={searchQuery} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
