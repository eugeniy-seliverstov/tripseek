import type { TerritoryRegion } from '@/types/territory'

export const SORTED_REGIONS: TerritoryRegion[] = [
  'Europe',
  'Africa',
  'Middle East',
  'Central Asia',
  'South Asia',
  'East Asia',
  'Southeast Asia',
  'Oceania',
  'North America',
  'Central America',
  'South America',
  'Antarctica',
]

interface RegionMeta {
  background: string
  image?: string
  imageStyle?: {
    top?: string
    right?: string
    bottom?: string
    left?: string
    height?: string
  }
}

export const REGION_META: Record<TerritoryRegion, RegionMeta> = {
  Europe: {
    background: 'rgba(189, 178, 255, 0.4)',
    image: '/regions/europe.png',
    imageStyle: { top: '0', right: '16px', height: '80px' },
  },
  Africa: {
    background: 'rgba(242, 201, 76, 0.4)',
    image: '/regions/africa.png',
    imageStyle: { top: '4px', right: '12px', height: '80px' },
  },
  'Middle East': {
    background: 'rgba(240, 189, 184, 0.4)',
    image: '/regions/middle-east.png',
    imageStyle: { top: '-10px', right: '-2px', height: '100px' },
  },
  'Central Asia': {
    background: 'rgba(169, 208, 142, 0.4)',
    image: '/regions/central-asia.png',
    imageStyle: { top: '-2px', right: '-4px', height: '100px' },
  },
  'South Asia': {
    background: 'rgba(255, 179, 71, 0.4)',
    image: '/regions/south-asia.png',
    imageStyle: { top: '-2px', right: '0', height: '100px' },
  },
  'East Asia': {
    background: 'rgba(135, 211, 255, 0.4)',
    image: '/regions/east-asia.png',
    imageStyle: { top: '4px', right: '4px', height: '80px' },
  },
  'Southeast Asia': {
    background: 'rgba(178, 190, 255, 0.4)',
    image: '/regions/southeast-asia.png',
    imageStyle: { top: '0', right: '-4px', height: '90px' },
  },
  Oceania: {
    background: 'rgba(132, 210, 198, 0.4)',
    image: '/regions/oceania.png',
    imageStyle: { top: '-2px', right: '4px', height: '90px' },
  },
  'North America': {
    background: 'rgba(255, 141, 186, 0.4)',
    image: '/regions/north-america.png',
    imageStyle: { top: '2px', right: '-2px', height: '80px' },
  },
  'Central America': {
    background: 'rgba(255, 161, 127, 0.4)',
    image: '/regions/central-america.png',
    imageStyle: { top: '0px', right: '0px', height: '80px' },
  },
  'South America': {
    background: 'rgba(255, 209, 102, 0.4)',
    image: '/regions/south-america.png',
    imageStyle: { top: '4px', right: '12px', height: '80px' },
  },
  Antarctica: {
    background: 'rgba(220, 230, 240, 0.4)',
    image: '/regions/antarctica.png',
    imageStyle: { top: '-6px', right: '0', height: '100px' },
  },
}
