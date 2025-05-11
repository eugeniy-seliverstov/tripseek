import { ReactElement } from 'react'

import Map from '@/components/map/Map'
import MapTerritoryPopover from '@/components/map/MapTerritoryPopover'
import Hint from '@/components/map/header/Hint'
import Logo from '@/components/map/header/Logo'
import useMousePosition from '@/hooks/useMousePosition'
import useHoverStore from '@/store/useHoverStore'

function MapContainer(): ReactElement {
  const position = useMousePosition()
  const mapHoverTerritory = useHoverStore(state => state.mapHoverTerritory)

  return (
    <div className='w-full sm:w-auto grow flex flex-col bg-gradient-to-b from-[#1a0548] to-[#1a0548]'>
      <div className='hidden sm:flex justify-between p-4 min-h-[100px]'>
        <Logo />
        <Hint />
      </div>

      <div className='grow flex justify-center items-center min-h-0'>
        <Map />
      </div>

      {mapHoverTerritory && (
        <MapTerritoryPopover
          territory={mapHoverTerritory}
          clientX={position.clientX}
          clientY={position.clientY}
        />
      )}
    </div>
  )
}

export default MapContainer
