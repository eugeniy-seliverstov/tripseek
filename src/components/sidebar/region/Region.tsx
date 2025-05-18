import { motion } from 'framer-motion'

import type { TerritoryRegion } from '@/types/territory'
import type { UserTerritory } from '@/types/user'
import type { ReactElement } from 'react'

import { TerritoryList } from '@/components/sidebar/territory/TerritoryList'

interface RegionProps {
  name: TerritoryRegion
  territories: UserTerritory[]
  showCounters?: boolean
  activeCount?: number
  totalCount?: number
  animation?: boolean
  isActive?: (territory: UserTerritory) => boolean
}

const motionProps = {
  layout: true,
  transition: { type: 'spring', stiffness: 500, damping: 30 },
}

export const Region = ({
  name,
  territories,
  showCounters,
  activeCount,
  totalCount,
  animation = true,
  isActive,
}: RegionProps): ReactElement => {
  const countries: UserTerritory[] = []
  const otherTerritories: UserTerritory[] = []
  const disputedTerritories: UserTerritory[] = []

  territories.forEach(territory => {
    if (territory.type === 'country') countries.push(territory)
    else if (territory.type === 'other') otherTerritories.push(territory)
    else if (territory.type === 'disputed') disputedTerritories.push(territory)
  })

  const sections: { label: string; territories: UserTerritory[] }[] = [
    { label: 'Countries', territories: countries },
    { label: 'Other Territories', territories: otherTerritories },
    { label: 'Disputed Territories', territories: disputedTerritories },
  ]

  return (
    <>
      <div className='sticky top-0 z-[10]'>
        <motion.div
          {...(animation && motionProps)}
          className='flex items-center justify-between px-4 pt-3 pb-2 transition-colors duration-300 bg-background text-text'
        >
          <div className='text-xl font-bold'>{name}</div>
          {showCounters && (
            <span className='text-md'>
              {activeCount}/{totalCount}
            </span>
          )}
        </motion.div>
      </div>
      {sections.map(({ label, territories }) =>
        territories.length > 0 ? (
          <div key={label} className='mb-2'>
            <motion.div
              {...(animation && motionProps)}
              className='sticky top-[48px] z-[5] mb-1 px-4 text-sm font-semibold bg-background text-text-secondary'
            >
              {label}
            </motion.div>
            <TerritoryList territories={territories} isActive={isActive} animation={animation} />
          </div>
        ) : null,
      )}
    </>
  )
}
