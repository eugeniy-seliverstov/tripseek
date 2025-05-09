import RegionView from '@/components/sidebar/region/views/RegionView'
import { SORTED_REGIONS } from '@/constants/regions'
import type { GroupedUserTerritories } from '@/types/user'

interface RegionViewListProps {
  groupedTerritories: GroupedUserTerritories
  searchQuery?: string
}

function RegionViewList({ groupedTerritories, searchQuery }: RegionViewListProps) {
  const regions = SORTED_REGIONS.map(region => (
    <RegionView
      key={region}
      region={region}
      territories={groupedTerritories[region]}
      searchQuery={searchQuery}
    />
  ))

  return <>{regions}</>
}

export default RegionViewList