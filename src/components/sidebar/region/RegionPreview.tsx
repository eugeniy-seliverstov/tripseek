import { REGION_META } from '@/constants/regions'
import type { TerritoryRegion } from '@/types/territory'

interface RegionPreviewProps {
  region: TerritoryRegion
  visited: number
  total: number
  onClick?: () => void
}

function RegionPreview({ region, visited, total, onClick }: RegionPreviewProps) {
  const percent = Math.round((visited / total) * 100)
  const { background, image, imageStyle} = REGION_META[region]

  return (
    <div
      className='group relative w-full rounded-2xl px-4 py-3 flex flex-col justify-between gap-2 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all ease-in duration-100 cursor-pointer transform-gpu will-change-transform text-text bg-no-repeat bg-right bg-contain overflow-hidden'
      style={{ backgroundColor: background }}
      onClick={onClick}
    >
      {image && (
        <img
          src={image}
          className='absolute opacity-20 pointer-events-none select-none group-hover:opacity-30 transition-all ease-in duration-100'
          style={imageStyle}
        />
      )}
      <div className="font-semibold">{region}</div>
      <div className="text-xl font-bold">{percent}%</div>
    </div>
  )
}

export default RegionPreview
