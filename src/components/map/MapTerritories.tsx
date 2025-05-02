import { Geographies, Geography } from 'react-simple-maps'

import useUserStore from '@/store/useUserStore'
import useHoverStore from '@/store/useHoverStore'
import useFilterStore from '@/store/useFilterStore'
import useTerritoryToggle from '@/hooks/useTerritoryToggle'

import { getGeographyStyle } from '@/utils/geography'
import { getTerritoryByCode, getCodeByName } from '@/utils/territories'

import type { GeographyProps } from 'react-simple-maps'
import type { TerritoryCode, TerritoryName } from '@/types/territory'

import map from '@/assets/map/countries-110m.json'

function MapTerritories() {
  const { filter } = useFilterStore()
  const { mapHoverTerritory, sidebarHoverTerritory, setMapHoverTerritory } = useHoverStore()
  const { visited, wishlist, toggleVisitedTerritory, toggleWishlistTerritory } = useUserStore()

  const { toggleTerritory } = useTerritoryToggle({
    filter,
    toggleVisitedTerritory,
    toggleWishlistTerritory,
  })

  const prepareGeographyProps = (geo: any) => {
    const code = geo.properties?.ISO_A3 !== '-99'
      ? geo.properties?.ISO_A3 as TerritoryCode
      : getCodeByName(geo.properties?.NAME_LONG as TerritoryName)

    const territory = code ? getTerritoryByCode(code) : null

    const isMapHovered = territory?.code === mapHoverTerritory?.code
    const isSidebarHovered = territory?.code === sidebarHoverTerritory?.code
    const isHovered = isMapHovered || isSidebarHovered

    const isVisited = territory ? visited.includes(territory.code) : false
    const isWishlist = territory ? wishlist.includes(territory.code) : false

    const styles: GeographyProps['style'] = getGeographyStyle(filter, { isVisited, isWishlist, isHovered })

    return { territory, styles, isVisited }
  }

  return (
    <Geographies geography={map}>
      {({ geographies }) =>
        geographies.map((geo) => {
          const { territory, styles, isVisited } = prepareGeographyProps(geo)

          return (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              stroke={isVisited ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'}
              strokeWidth={1}
              style={styles}
              onMouseEnter={() => setMapHoverTerritory(territory)}
              onMouseLeave={() => setMapHoverTerritory(null)}
              onClick={(event) => {
                if (territory) toggleTerritory(territory.code, event)
              }}
            />
          )
        })
      }
    </Geographies>
  )
}

export default MapTerritories
