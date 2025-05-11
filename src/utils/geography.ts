import type { Filter } from '@/store/useFilterStore'
import type { GeographyProps } from 'react-simple-maps'

import { mapColors } from '@/theme/colors'

interface GeographyStates {
  isVisited: boolean
  isWishlist: boolean
  isHovered: boolean
}

export function getGeographyStyle(
  filter: Filter,
  { isVisited, isWishlist, isHovered }: GeographyStates,
): GeographyProps['style'] {
  let defaultColor = mapColors.default.base
  let hoverColor = mapColors.default.hover

  switch (filter) {
    case 'visited':
      if (isVisited) {
        defaultColor = mapColors.fill
        hoverColor = mapColors.visited.hover
      }
      break
    case 'wishlist':
      if (isWishlist) {
        defaultColor = mapColors.fill
        hoverColor = mapColors.wishlist.hover
      }
      break
    case 'all':
      if (isVisited) {
        defaultColor = mapColors.visited.base
        hoverColor = mapColors.visited.hover
      } else if (isWishlist) {
        defaultColor = mapColors.wishlist.base
        hoverColor = mapColors.wishlist.hover
      }
      break
  }

  if (isHovered) {
    switch (filter) {
      case 'visited':
        defaultColor = isVisited ? mapColors.visited.hover : mapColors.default.hover
        break
      case 'wishlist':
        defaultColor = isWishlist ? mapColors.wishlist.hover : mapColors.default.hover
        break
      case 'all':
        defaultColor = isVisited
          ? mapColors.visited.hover
          : isWishlist
            ? mapColors.wishlist.hover
            : mapColors.default.hover
        break
    }
  }

  return {
    default: { fill: defaultColor, outline: 'none', pointerEvents: 'auto' },
    hover: { fill: hoverColor, outline: 'none', cursor: 'pointer' },
    pressed: { fill: hoverColor, outline: 'none' },
  }
}

export function getGeographyStroke(
  filter: Filter,
  { isVisited, isWishlist }: GeographyStates,
): string {
  if ((filter === 'visited' && isVisited) || (filter === 'all' && isVisited)) {
    return mapColors.visited.border
  }

  if ((filter === 'wishlist' && isWishlist) || (filter === 'all' && isWishlist)) {
    return mapColors.wishlist.border
  }

  return mapColors.default.border
}
