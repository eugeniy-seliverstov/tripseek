import Region from '@/components/sidebar/territory/Region'
import useUserTerritories from '@/hooks/useUserTerritories'
import regions from '@/constants/regions'

function VisitedRegions() {
  const groupedTerritories = useUserTerritories()
  const filteredRegions = regions.filter(region => groupedTerritories[region].some(territory => territory.visited))

  return (
    <>
      {filteredRegions.map(region => {
        const regionTerritories = groupedTerritories[region]
        const visitedTerritories = regionTerritories.filter(territory => territory.visited)

        return (
          <Region
            key={region}
            name={region}
            territories={visitedTerritories}
            activeStatus="visited"
            showCounters
            activeCount={visitedTerritories.length}
            totalCount={regionTerritories.length}
          />
        )
      })}
    </>
  )
}

export default VisitedRegions