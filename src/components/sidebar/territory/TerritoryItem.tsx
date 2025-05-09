import TerritoryFlag from './TerritoryFlag'
import { IoFlag, IoFlagOutline, IoHeart, IoHeartOutline } from 'react-icons/io5'

import { cn } from '@/utils/cn'
import { mapColors } from '@/theme/mapColors'

import type { UserTerritory } from '@/types/user'

interface TerritoryItemProps {
  active: boolean
  territory: UserTerritory
  onMouseEnter: () => void
  onMouseLeave: () => void
  onVisitedClick: () => void
  onWishlistClick: () => void
}

function TerritoryItem({ active, territory, onMouseEnter, onMouseLeave, onVisitedClick, onWishlistClick }: TerritoryItemProps) {
  const FlagIcon = territory.visited ? IoFlag : IoFlagOutline
  const HeartIcon = territory.wishlist ? IoHeart : IoHeartOutline

  return (
    <div
      className={cn(
        'group flex items-center px-4 py-2 gap-4 text-lg hover:bg-black hover:bg-opacity-5 duration-100',
        !active && 'opacity-50 hover:opacity-75'
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <TerritoryFlag code={territory.code} />
      <div className="flex flex-col grow">
        <div>{territory.name}</div>
      </div>
      <div className="flex gap-2">
        <FlagIcon
          className='hover:cursor-pointer hidden group-hover:inline-flex'
          color={mapColors.visited.icon}
          size='20px'
          onClick={onVisitedClick}
        />
        {!territory.visited &&
          <HeartIcon
            className='hover:cursor-pointer hidden group-hover:inline-flex'
            color={mapColors.wishlist.icon}
            size='20px'
            onClick={onWishlistClick}
          />
        }
      </div>
    </div>
  )
}

export default TerritoryItem