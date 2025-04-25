import Region from '@/components/sidebar/territory/Region'
import useUserTerritories from '@/hooks/useUserTerritories'
import regions from '@/constants/regions'

function WishlistRegions() {
  const groupedTerritories = useUserTerritories()
  const filteredRegions = regions.filter(region => groupedTerritories[region].some(territory => territory.wishlist))

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
            activeStatus="wishlist"
            showCounters={false}
          />
        )
      })}
    </>
  )
}

export default WishlistRegions
