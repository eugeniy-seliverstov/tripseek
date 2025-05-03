import Region from '@/components/sidebar/region/Region'
import useUserTerritories from '@/hooks/useUserTerritories'
import { SORTED_REGIONS } from '@/constants/regions'

function WishlistTerritories() {
  const groupedTerritories = useUserTerritories()
  const filteredRegions = SORTED_REGIONS.filter(region => groupedTerritories[region].some(territory => territory.wishlist))

  return (
    <>
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

export default WishlistTerritories
