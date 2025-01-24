import { TTerritoryName, TTerritoryIso3 } from '@/types/Territory'
import TerritoryFlag from './TerritoryFlag'

interface TerritoryProps {
  name: TTerritoryName
  code: TTerritoryIso3
}

function Territory({ name, code }: TerritoryProps) {
  return (
    <div className="flex items-center px-4 py-2 gap-4 text-lg hover:bg-black hover:bg-opacity-5 hover:cursor-pointer duration-100">
      <TerritoryFlag code={code} />
      <div>{name}</div>
    </div>
  )
}

export default Territory