
import logoCirlce from '@/assets/logo.svg'
import logoAlpha from '@/assets/name.svg'

function Logo() {
  return (
    <div className="inline-flex items-center gap-2.5 ml-6">
      <img src={logoCirlce} alt="Logo" width="32"/>
      <img src={logoAlpha} alt="Logo Alpha" />
    </div>
  )
}

export default Logo