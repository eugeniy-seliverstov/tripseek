import territories from './territories'
import { TerritoryType, TerritoryCode, TerritoryName } from '@/types/territory'

export function getTerritoryByCode(code: TerritoryCode): TerritoryType | undefined {
  return territories.find(territory => territory.code === code)
}

export function getCodeByName(name: TerritoryName): TerritoryCode | undefined {
  return territories.find(territory => territory.name === name)?.code
}