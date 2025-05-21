import { ReactElement } from 'react'
import { PiCalendarHeart } from 'react-icons/pi'

import { EmptyState } from '@/components/sidebar/EmptyState'
import { Region } from '@/components/sidebar/region/Region'
import { SORTED_REGIONS } from '@/constants/regions'
import { useUserTerritories } from '@/hooks/useUserTerritories'

export const WishlistTerritories = (): ReactElement => {
  const { wishlist, grouped: groupedTerritories } = useUserTerritories()
  const filteredRegions = SORTED_REGIONS.filter(region =>
    groupedTerritories[region].some(territory => territory.wishlist),
  )

  return (
    <>
      {wishlist.length === 0 && (
        <EmptyState
          icon={PiCalendarHeart}
          title='Your wishlist is empty'
          description="Add countries you'd love to visit and plan your next journey"
        />
      )}

      {filteredRegions.map(region => {
        const regionTerritories = groupedTerritories[region]
        const wishlistTerritories = regionTerritories.filter(territory => territory.wishlist)

        return (
          <Region
            key={region}
            name={region}
            territories={wishlistTerritories}
            showCounters={false}
          />
        )
      })}
    </>
  )
}
