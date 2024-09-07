import Header from './components/Header'
import World from './components/World'
import Statistics from './components/Statistics'

function App() {
  return (
    <div className="w-full h-screen flex flex-col sm:flex-row overflow-hidden">
      <div
        className="w-full sm:w-auto h-full grow"
        style={{ background: 'linear-gradient(180deg,#1a0548 0,#1a0548 80%,#1e055e 88%,#300a83' }}
      >
        <Header />
        <World />
        <Statistics />
      </div>
      <div className="w-full sm:w-2/5 md:1/3 lg:w-2/5 xl:w-1/4 max-w-md h-full bg-white">
        {/* Sidebar */}
      </div>
    </div>
  )
}

export default App
