import { TTerritory } from '@/types/Territory'
import TerritoryFlag from './TerritoryFlag'

interface TerritoryPopoverProps {
  territory: TTerritory;
  clientY: number;
  clientX: number;
}

function TerritoryPopover({ territory, clientY, clientX }: TerritoryPopoverProps) {
  return (
    <div
      className='flex gap-2 items-center absolute bg-white px-3 py-2 rounded-[12px]'
      style={{
        top: clientY - 70,
        left: clientX - 0,
        transform: 'translateX(-50%)',
      }}
    >
      <TerritoryFlag code={territory.iso3}/>
      <span className='text-xl'>{territory.name}</span>
    </div>
  )
}

export default TerritoryPopover
