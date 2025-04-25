import TerritoryList from './TerritoryList'
import type { UserTerritory } from '@/types/user'
import type { TerritoryRegion } from '@/types/territory'

interface RegionProps {
  name: TerritoryRegion
  territories: UserTerritory[]
  showCounters?: boolean
  activeCount?: number,
  totalCount?: number
  activeStatus?: 'visited' | 'wishlist'
}

function Region({ name, territories, activeStatus, showCounters, activeCount, totalCount }: RegionProps) {
  const countries: UserTerritory[] = []
  const otherTerritories: UserTerritory[] = []
  const disputedTerritories: UserTerritory[] = []

  territories.forEach(territory => {
    if (territory.type === 'country') countries.push(territory)
    else if (territory.type === 'other') otherTerritories.push(territory)
    else if (territory.type === 'disputed') disputedTerritories.push(territory)
  })

  const sections: { label: string, territories: UserTerritory[] }[] = [
    { label: 'Countries', territories: countries },
    { label: 'Other Territories', territories: otherTerritories },
    { label: 'Disputed Territories', territories: disputedTerritories },
  ]

  return (
    <>
      <div className='px-4 pt-3 pb-2 flex items-center justify-between'>
        <div className="text-xl font-bold">{name}</div>
        {showCounters && (
          <span className="text-md">{activeCount}/{totalCount}</span>
        )}
      </div>
      {sections.map(({ label, territories }) =>
        territories.length > 0 ? (
          <div key={label} className="mb-2">
            <div className="mb-1 px-4 text-sm font-semibold text-gray-500">
              {label}
            </div>
            <TerritoryList territories={territories} activeStatus={activeStatus} />
          </div>
        ) : null
      )}
    </>
  )
}

export default Region