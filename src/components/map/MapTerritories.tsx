import { Geographies, Geography } from 'react-simple-maps'

import type { Territory, TerritoryCode, TerritoryName } from '@/types/territory'
import type { ReactElement } from 'react'
import type { GeographyProps } from 'react-simple-maps'

import map from '@/assets/map/countries-110m.json'
import { useTerritoryToggle } from '@/hooks/useTerritoryToggle'
import { useFilterStore } from '@/store/useFilterStore'
import { useHoverStore } from '@/store/useHoverStore'
import { useUserStore } from '@/store/useUserStore'
import { getGeographyStyle, getGeographyStroke } from '@/utils/geography'
import { getTerritoryByCode, getCodeByName } from '@/utils/territories'

interface GeoFeature {
  rsmKey: string
  properties: {
    ISO_A3?: string
    NAME_LONG?: string
  }
}

export const MapTerritories = (): ReactElement => {
  const { filter } = useFilterStore()
  const { mapHoverTerritory, sidebarHoverTerritory, setMapHoverTerritory } = useHoverStore()
  const { visited, wishlist, toggleVisitedTerritory, toggleWishlistTerritory } = useUserStore()

  const { toggleTerritory } = useTerritoryToggle({
    filter,
    toggleVisitedTerritory,
    toggleWishlistTerritory,
  })

  const prepareGeographyProps = (
    geo: GeoFeature,
  ): {
    territory: Territory | null | undefined
    styles: GeographyProps['style']
    stroke: string
  } => {
    const code =
      geo.properties?.ISO_A3 !== '-99'
        ? (geo.properties?.ISO_A3 as TerritoryCode)
        : getCodeByName(geo.properties?.NAME_LONG as TerritoryName)

    const territory = code ? getTerritoryByCode(code) : null

    const isMapHovered = territory?.code === mapHoverTerritory?.code
    const isSidebarHovered = territory?.code === sidebarHoverTerritory?.code
    const isHovered = isMapHovered || isSidebarHovered

    const isVisited = territory ? visited.includes(territory.code) : false
    const isWishlist = territory ? wishlist.includes(territory.code) : false

    const styles: GeographyProps['style'] = getGeographyStyle(filter, {
      isVisited,
      isWishlist,
      isHovered,
    })
    const stroke = getGeographyStroke(filter, { isVisited, isWishlist, isHovered })

    return { territory, styles, stroke }
  }

  return (
    <Geographies geography={map}>
      {({ geographies }) =>
        geographies.map(geo => {
          const { territory, styles, stroke } = prepareGeographyProps(geo)

          return (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              stroke={stroke}
              strokeWidth={1}
              style={styles}
              onMouseEnter={() => setMapHoverTerritory(territory)}
              onMouseLeave={() => setMapHoverTerritory(null)}
              onClick={event => {
                if (territory) toggleTerritory(territory.code, event)
              }}
            />
          )
        })
      }
    </Geographies>
  )
}
