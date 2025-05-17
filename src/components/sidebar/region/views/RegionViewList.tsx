import type { GroupedUserTerritories } from '@/types/user'
import type { ReactElement } from 'react'

import { RegionView } from '@/components/sidebar/region/views/RegionView'
import { SORTED_REGIONS } from '@/constants/regions'

interface RegionViewListProps {
  groupedTerritories: GroupedUserTerritories
  searchQuery?: string
}

export const RegionViewList = ({
  groupedTerritories,
  searchQuery,
}: RegionViewListProps): ReactElement => {
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
