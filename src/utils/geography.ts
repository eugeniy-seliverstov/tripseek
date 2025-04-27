import type { Filter } from '@/store/useFilterStore'
import type { GeographyProps } from 'react-simple-maps'

export const COLORS = {
  fill: '#FFFFFF',
  default: 'rgba(255, 255, 255, 0.25)',
  hoverDefault: '#9AB9E6',
  visited: '#F6A38C',
  hoverVisited: '#F7886A',
  wishlist: '#B8EBDD',
  hoverWishlist: '#5CF5CA',
  strokeDefault: 'rgba(255, 255, 255, 0.05)',
  strokeVisited: 'rgba(0, 0, 0, 0.05)',
}

interface GeographyStates {
  isVisited: boolean
  isWishlist: boolean
  isHovered: boolean
}

export function getGeographyStyle(
  filter: Filter,
  { isVisited, isWishlist, isHovered }: GeographyStates
): GeographyProps['style'] {
  let defaultColor = COLORS.default
  let hoverColor = COLORS.hoverDefault

  switch (filter) {
    case 'visited':
      if (isVisited) {
        defaultColor = COLORS.fill
        hoverColor = COLORS.hoverVisited
      }
      break
    case 'wishlist':
      if (isWishlist) {
        defaultColor = COLORS.fill
        hoverColor = COLORS.hoverWishlist
      }
      break
    case 'all':
      if (isVisited) {
        defaultColor = COLORS.visited
        hoverColor = COLORS.hoverVisited
      } else if (isWishlist) {
        defaultColor = COLORS.wishlist
        hoverColor = COLORS.hoverWishlist
      }
      break
  }

  if (isHovered) {
    switch (filter) {
      case 'visited':
        defaultColor = isVisited ? COLORS.hoverVisited : COLORS.hoverDefault
        break
      case 'wishlist':
        defaultColor = isWishlist ? COLORS.hoverWishlist : COLORS.hoverDefault
        break
      case 'all':
        defaultColor = isVisited
          ? COLORS.hoverDefault
          : isWishlist
          ? COLORS.hoverWishlist
          : COLORS.hoverDefault
        break
    }
  }

  return {
    default: { fill: defaultColor, outline: 'none', pointerEvents: 'auto' },
    hover: { fill: hoverColor, outline: 'none', cursor: 'pointer' },
    pressed: { fill: hoverColor, outline: 'none' },
  }
}