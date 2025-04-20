
import logo from '@/assets/logo.png'

function Logo() {
  return (
    <div className="inline-flex items-center gap-2.5 ml-6">
      <img src={logo} alt="Logo" width="32"/>
      <span style={{ fontFamily: 'Philosopher' }} className='text-3xl text-white'>Reworld</span>
    </div>
  )
}

export default Logo