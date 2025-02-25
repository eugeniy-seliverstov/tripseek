import territories from './territories'
import { Territory, TerritoryCode, TerritoryName, TerritoryContinent } from '@/types/territory'

export function getTerritoryByCode(code: TerritoryCode): Territory | undefined {
  return territories.find(territory => territory.code === code)
}

export function getTerritoriesByContinent(continent: TerritoryContinent): Territory[] {
  return territories.filter(territory => territory.continent === continent)
}

export function getCodeByName(name: TerritoryName): TerritoryCode | undefined {
  return territories.find(territory => territory.name === name)?.code
}