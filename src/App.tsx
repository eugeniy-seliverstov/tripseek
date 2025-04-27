import Sidebar from '@/components/Sidebar'
import MapContainer from '@/components/MapContainer'

function App() {
  return (
    <div className="relative w-full h-screen flex flex-col sm:flex-row overflow-hidden">
      <MapContainer />
      <Sidebar />
    </div>
  )
}

export default App
