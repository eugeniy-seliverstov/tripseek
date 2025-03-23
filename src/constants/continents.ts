import territories from '@/constants/territories'

const continents = Array.from(new Set(territories.map(t => t.continent))).sort()

export default continents
