import territories from '@/constants/territories'

const regions = Array.from(new Set(territories.map(territory => territory.region))).sort()

export default regions
