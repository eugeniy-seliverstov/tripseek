import { territories } from '@/constants/territories'
import { Territory, TerritoryCode, TerritoryName, TerritoryRegion } from '@/types/territory'

export function getTerritoryByCode(code: TerritoryCode): Territory | undefined {
  return territories.find(territory => territory.code === code)
}

export function getTerritoriesByRegion(region: TerritoryRegion): Territory[] {
  return territories.filter(territory => territory.region === region)
}

export function getCodeByName(name: TerritoryName): TerritoryCode | undefined {
  return territories.find(territory => territory.name === name)?.code
}
