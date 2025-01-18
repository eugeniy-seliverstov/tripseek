import World from '@/components/World'
import Sidebar from '@/components/Sidebar'
import Logo from '@/components/header/Logo'
import Banner from '@/components/header/Banner'

function App() {
  return (
    <div className="relative w-full h-screen flex flex-col sm:flex-row overflow-hidden">
      <div
        className="w-full sm:w-auto grow flex flex-col"
        style={{ background: 'linear-gradient(180deg,#1a0548 0,#1a0548 100%' }}
      >
        <div className="hidden sm:flex justify-between p-4">
          <Logo />
          <Banner />
        </div>
        <div className="grow flex justify-center items-center min-h-0">
          <World />
        </div>
      </div>
      <div className="w-full sm:w-2/5 max-w-md h-full bg-white">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
