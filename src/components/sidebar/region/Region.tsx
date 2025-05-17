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
  isActive?: (territory: UserTerritory) => boolean
}

export const Region = ({
  name,
  territories,
  showCounters,
  activeCount,
  totalCount,
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
      <div className='sticky top-0 z-[10] px-4 pt-3 pb-2 flex items-center justify-between bg-background text-text'>
        <div className='text-xl font-bold'>{name}</div>
        {showCounters && (
          <span className='text-md'>
            {activeCount}/{totalCount}
          </span>
        )}
      </div>
      {sections.map(({ label, territories }) =>
        territories.length > 0 ? (
          <div key={label} className='mb-2'>
            <div className='sticky top-[48px] z-[5] mb-1 px-4 text-sm font-semibold bg-background text-text-secondary'>
              {label}
            </div>
            <TerritoryList territories={territories} isActive={isActive} />
          </div>
        ) : null,
      )}
    </>
  )
}
