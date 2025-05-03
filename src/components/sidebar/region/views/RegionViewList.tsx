import RegionView from '@/components/sidebar/region/views/RegionView'
import { SORTED_REGIONS } from '@/constants/regions'
import type { GroupedUserTerritories } from '@/types/user'

interface RegionViewListProps {
  groupedTerritories: GroupedUserTerritories
}

function RegionViewList({ groupedTerritories }: RegionViewListProps) {
  const regions = SORTED_REGIONS.map(region => (
    <RegionView
      key={region}
      region={region}
      territories={groupedTerritories[region]}
    />
  ))

  return <>{regions}</>
}

export default RegionViewList