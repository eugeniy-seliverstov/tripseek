import useUserStore from '@/store/user'
import territories from '@/constants/territories'
import { getTerritoryByCode } from '@/utils/territories'
import useUserTerritories from '@/hooks/useUserTerritories'

import Stat from './Stat'

function Statistics() {
  const { visited } = useUserStore()
  const userTerritories = useUserTerritories()

  const stats = {
    countries: {
      total: territories.filter(territory => territory.type === 'country').length,
      visited: visited.filter(code => getTerritoryByCode(code)?.type === 'country').length
    },
    territories: {
      total: territories.length,
      visited: visited.length,
    },
    regions: {
      total: Object.keys(userTerritories).length,
      visited: Object.entries(userTerritories).filter(([, value]) => value.visited.length > 0).length,
    }
  }

  return (
    <div className="flex justify-between text-center text-md">
      <Stat className="w-1/3" label="Countries" visited={stats.countries.visited} total={stats.countries.total} />
      <Stat className="w-1/3" label="Territories" visited={stats.territories.visited} total={stats.territories.total} />
      <Stat className="w-1/3" label="Regions" visited={stats.regions.visited} total={stats.regions.total} />
    </div>
  )
}

export default Statistics