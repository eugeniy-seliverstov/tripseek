import type { ReactElement } from 'react'

import { MapContainer } from '@/components/MapContainer'
import { Sidebar } from '@/components/Sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'

export const App = (): ReactElement => {
  return (
    <TooltipProvider delayDuration={500}>
      <div className='relative w-full h-screen flex flex-col sm:flex-row overflow-hidden bg-[#1a0548] sm:bg-background'>
        <MapContainer />
        <Sidebar />
      </div>
    </TooltipProvider>
  )
}
