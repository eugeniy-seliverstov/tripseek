import { useMemo } from 'react'
import useFilterStore from '@/store/useFilterStore'
import { isApplePlatform } from '@/utils/platform'

function Hint() {
  const { filter } = useFilterStore()

  const showVisitedHint = filter === 'visited' || filter === 'all'
  const showWishlistHint = filter === 'wishlist' || filter === 'all'

  const isApple = useMemo(() => isApplePlatform(), [])
  const altOrCmd = isApple ? '⌘' : 'Alt'

  return (
    <div className="flex flex-col gap-1 justify-center p-3 mr-2 text-sm text-gray-300 opacity-40 hover:opacity-80 transition-opacity ease-in">
      {showVisitedHint &&
        <div className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded text-xs bg-white/10 text-white/80">Shift</kbd>
          +
          <kbd className="px-1.5 py-0.5 rounded text-xs bg-white/10 text-white/80">Click</kbd>
          <span>= Mark as Visited</span>
        </div>
      }
      {showWishlistHint &&
        <div className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded text-xs bg-white/10 text-white/80">Shift</kbd>
          +
          <kbd className="px-1.5 py-0.5 rounded text-xs bg-white/10 text-white/80">{altOrCmd}</kbd>
          +
          <kbd className="px-1.5 py-0.5 rounded text-xs bg-white/10 text-white/80">Click</kbd>
          <span>= Add to Wishlist</span>
        </div>
      }
    </div>
  )
}

export default Hint