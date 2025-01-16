import World from '@/components/World'
import Sidebar from '@/components/Sidebar'
import Logo from '@/components/header/Logo'
import Banner from '@/components/header/Banner'

function App() {
  return (
    <div className="relative w-full h-screen flex flex-col sm:flex-row overflow-hidden">
      <div
        className="w-full sm:w-auto h-full grow"
        style={{ background: 'linear-gradient(180deg,#1a0548 0,#1a0548 100%' }}
      >
        <div className="flex justify-between p-4">
          <Logo />
          <Banner />
        </div>
        <World />
      </div>
      <div className="w-full sm:w-2/5 md:1/3 lg:w-2/5 xl:w-1/4 max-w-md h-full bg-white">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
