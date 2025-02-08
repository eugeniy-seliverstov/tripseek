import { TerritoryType } from '@/types/territory'
import TerritoryFlag from './TerritoryFlag'

interface TerritoryProps {
  territory: TerritoryType
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

function Territory({ territory, onMouseEnter, onMouseLeave }: TerritoryProps) {
  return (
    <div
      className="flex items-center px-4 py-2 gap-4 text-lg hover:bg-black hover:bg-opacity-5 hover:cursor-pointer duration-100"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <TerritoryFlag code={territory.code} />
      <div className="flex flex-col">
        <div>{territory.name}</div>
        {territory.other && <div>Other</div>}
        {territory.disputed && <div>Disputed</div>}
      </div>
    </div>
  )
}

export default Territory