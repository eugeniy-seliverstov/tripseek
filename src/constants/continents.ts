import territories from '@/data/territories'

const continents = Array.from(new Set(territories.map(t => t.continent))).sort()

export default continents
