import { TerritoryName, TerritoryCode } from '@/types/Territory'
import TerritoryFlag from './TerritoryFlag'

interface TerritoryProps {
  name: TerritoryName
  code: TerritoryCode
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

function Territory({ name, code, onMouseEnter, onMouseLeave }: TerritoryProps) {
  return (
    <div
      className="flex items-center px-4 py-2 gap-4 text-lg hover:bg-black hover:bg-opacity-5 hover:cursor-pointer duration-100"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <TerritoryFlag code={code} />
      <div>{name}</div>
    </div>
  )
}

export default Territory