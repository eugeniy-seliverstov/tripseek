import territories from './territories'
import { TerritoryType, TerritoryCode, TerritoryName, TerritoryContinent } from '@/types/territory'

export function getTerritoryByCode(code: TerritoryCode): TerritoryType | undefined {
  return territories.find(territory => territory.code === code)
}

export function getTerritoriesByContinent(continent: TerritoryContinent): TerritoryType[] {
  return territories.filter(territory => territory.continent === continent)
}

export function getCodeByName(name: TerritoryName): TerritoryCode | undefined {
  return territories.find(territory => territory.name === name)?.code
}