import { ReactElement } from 'react'

import { Map } from '@/components/map/Map'
import { MapTerritoryPopover } from '@/components/map/MapTerritoryPopover'
import { MobileStatistics } from '@/components/map/MobileStatistics'
import { Hint } from '@/components/map/header/Hint'
import { Logo } from '@/components/map/header/Logo'
import { useMobile } from '@/hooks/useMobile'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useHoverStore } from '@/store/useHoverStore'

export const MapContainer = (): ReactElement => {
  const position = useMousePosition()
  const mapHoverTerritory = useHoverStore(state => state.mapHoverTerritory)
  const isMobile = useMobile()

  return (
    <div className='w-full sm:w-1/2 md:w-3/5 sm:grow flex flex-col bg-gradient-to-b from-[#1a0548] to-[#1a0548]'>
      <div className='hidden px-0 py-4 sm:flex sm:flex-col lg:flex-row justify-between md:p-4 min-h-[100px]'>
        <Logo />
        <Hint />
      </div>

      <div className='grow flex justify-center items-center min-h-0 select-none pointer-events-none sm:pointer-events-auto'>
        <Map />
      </div>

      {!isMobile && mapHoverTerritory && (
        <MapTerritoryPopover
          territory={mapHoverTerritory}
          clientX={position.clientX}
          clientY={position.clientY}
        />
      )}

      {isMobile && <MobileStatistics />}
    </div>
  )
}
