import { TerritoryType } from '@/types/territory'
import TerritoryFlag from './TerritoryFlag'
import { Badge } from '../ui/badge'
import { IoFlag, IoFlagOutline } from 'react-icons/io5'

interface TerritoryProps {
  territory: TerritoryType
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
}

function Territory({ territory, onMouseEnter, onMouseLeave, onClick }: TerritoryProps) {
  const FlagIcon = territory.visited ? IoFlag : IoFlagOutline

  return (
    <div
      className={`group flex items-center px-4 py-2 gap-4 text-lg hover:bg-black hover:bg-opacity-5 duration-100 ${!territory.visited && 'opacity-50 hover:opacity-75'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <TerritoryFlag code={territory.code} />
      <div className="flex flex-col grow">
        <div>{territory.name}</div>
        <div className="flex">
          {territory.other && <Badge variant="info">Other</Badge>}
          {territory.disputed && <Badge variant="negative">Disputed</Badge>}
        </div>
      </div>
      <FlagIcon
        className={`hover:cursor-pointer ${!territory.visited && 'hidden group-hover:inline-flex'}`}
        color='#F46A44'
        size='20px'
        onClick={onClick}
      />
    </div>
  )
}

export default Territory