import { createPortal } from 'react-dom'
import type { Territory } from '@/types/territory'
import TerritoryFlag from '@/components/sidebar/territory/TerritoryFlag'

interface MapTerritoryPopoverProps {
  territory: Territory
  clientY: number
  clientX: number
}

function MapTerritoryPopover({ territory, clientY, clientX }: MapTerritoryPopoverProps) {
  return createPortal(
    <div
      className='flex gap-2 items-center absolute bg-white px-3 py-2 rounded-[12px] drop-shadow-xl select-none'
      style={{
        top: clientY - 70,
        left: clientX - 0,
        transform: 'translateX(-50%)',
      }}
    >
      <TerritoryFlag code={territory.code}/>
      <span className='text-xl'>{territory.name}</span>
    </div>,
    document.body,
  )
}

export default MapTerritoryPopover
