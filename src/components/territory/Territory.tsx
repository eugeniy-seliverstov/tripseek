import { TerritoryType } from '@/types/territory'
import TerritoryFlag from './TerritoryFlag'
import { Badge } from '../ui/badge'

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
        <div className="flex">
          {territory.other && <Badge variant="info">Other</Badge>}
          {territory.disputed && <Badge variant="negative">Disputed</Badge>}
        </div>
      </div>
    </div>
  )
}

export default Territory