import type { ReactElement } from 'react'

import MapContainer from '@/components/MapContainer'
import Sidebar from '@/components/Sidebar'

function App(): ReactElement {
  return (
    <div className='relative w-full h-screen flex flex-col sm:flex-row overflow-hidden'>
      <MapContainer />
      <Sidebar />
    </div>
  )
}

export default App
