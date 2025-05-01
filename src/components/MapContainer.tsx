import { useState, useCallback } from 'react'

import Map from '@/components/map/Map'
import Logo from '@/components/map/header/Logo'
import Hint from '@/components/map/header/Hint'
import MapTerritoryPopover from '@/components/map/MapTerritoryPopover'

import useMousePosition from '@/hooks/useMousePosition'

import type { Nullable } from '@/types/utils'
import type { Territory } from '@/types/territory'

function MapContainer() {
  const position = useMousePosition()
  const [hoverTerritory, setHoverTerritory] = useState<Nullable<Territory>>(null)

  const handleTerritoryEnter = useCallback((territory: Nullable<Territory>) => {
    setHoverTerritory(territory)
  }, [])
  const handleTerritoryLeave = useCallback(() => {
    setHoverTerritory(null)
  }, [])

  return (
    <div className="w-full sm:w-auto grow flex flex-col bg-gradient-to-b from-[#1a0548] to-[#1a0548]">
      <div className="hidden sm:flex justify-between p-4 min-h-[100px]">
        <Logo />
        <Hint />
      </div>

      <div className="grow flex justify-center items-center min-h-0">
        <Map
          onTerritoryEnter={handleTerritoryEnter}
          onTerritoryLeave={handleTerritoryLeave}
        />
      </div>

      {hoverTerritory && (
        <MapTerritoryPopover
          territory={hoverTerritory}
          clientX={position.clientX}
          clientY={position.clientY}
        />
      )}
    </div>
  )
}

export default MapContainer