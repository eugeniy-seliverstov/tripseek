import type { ReactElement } from 'react'

import { useUserStatistics } from '@/hooks/useUserStatistics'

export const MobileStatistics = (): ReactElement => {
  const stats = useUserStatistics()

  return (
    <div className='flex justify-centeritems-center text-white px-4 py-2'>
      {stats.map(({ label, visited, total }, index) => {
        const value = total ? `${visited} / ${total}` : visited

        return (
          <div key={label} className='relative flex flex-col items-center flex-1'>
            <span className='text-md font-bold leading-none'>{value}</span>
            <span className='text-xs font-thin'>{label.toLowerCase()}</span>

            {index < stats.length - 1 && (
              <div className='absolute right-0 h-full w-px bg-white/20' />
            )}
          </div>
        )
      })}
    </div>
  )
}
