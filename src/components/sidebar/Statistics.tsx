import type { ReactElement } from 'react'

import { Stat } from '@/components/sidebar/Stat'
import { useUserStatistics } from '@/hooks/useUserStatistics'

export const Statistics = (): ReactElement => {
  const stats = useUserStatistics()

  return (
    <div className='flex justify-between text-center text-md'>
      {stats.map(({ label, visited, total, hint }) => (
        <Stat
          key={label}
          className='w-1/3'
          label={label}
          visited={visited}
          total={total}
          hint={hint}
        />
      ))}
    </div>
  )
}
