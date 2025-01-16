
import logoCirlce from '@/assets/logo/skratch-logo-circle.svg'
import logoAlpha from '@/assets/logo/skratch-logo-alpha.svg'

function Logo() {
  return (
    <div className="inline-flex items-center gap-2.5 ml-6">
      <img src={logoCirlce} alt="Logo" />
      <img src={logoAlpha} alt="Logo Alpha" />
    </div>
  )
}

export default Logo