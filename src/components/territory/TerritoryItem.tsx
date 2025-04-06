import { UserTerritory } from '@/types/user'
import TerritoryFlag from './TerritoryFlag'
import { Badge } from '../ui/badge'
import { IoFlag, IoFlagOutline, IoHeart, IoHeartOutline } from 'react-icons/io5'
import { cn } from '@/lib/utils'

interface TerritoryItemProps {
  active: boolean
  territory: UserTerritory
  onMouseEnter: () => void
  onMouseLeave: () => void
  onVisitedClick: () => void
  onFavoriteClick: () => void
}

function TerritoryItem({ active, territory, onMouseEnter, onMouseLeave, onVisitedClick, onFavoriteClick }: TerritoryItemProps) {
  const FlagIcon = territory.visited ? IoFlag : IoFlagOutline
  const HeartIcon = territory.favorite ? IoHeart : IoHeartOutline

  return (
    <div
      className={cn(
        'group flex items-center py-2 gap-4 text-lg hover:bg-black hover:bg-opacity-5 duration-100',
        !active && 'opacity-50 hover:opacity-75'
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <TerritoryFlag code={territory.code} />
      <div className="flex flex-col grow">
        <div>{territory.name}</div>
        <div className="flex">
          {territory.type ==='other' && <Badge variant="info">Other</Badge>}
          {territory.type === 'disputed' && <Badge variant="negative">Disputed</Badge>}
        </div>
      </div>
      <div className="flex gap-2">
        <FlagIcon
          className={`hover:cursor-pointer ${!territory.visited && 'hidden group-hover:inline-flex'}`}
          color='#F46A44'
          size='20px'
          onClick={onVisitedClick}
        />
        {!territory.visited &&
          <HeartIcon
            className={`hover:cursor-pointer ${!territory.favorite && 'hidden group-hover:inline-flex'}`}
            color='#52dcb5'
            size='20px'
            onClick={onFavoriteClick}
          />
        }
      </div>
    </div>
  )
}

export default TerritoryItem