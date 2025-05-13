import type { StatItem } from '@/types/statistics'
import type { ReactElement } from 'react'

import Hint from '@/components/Hint'

type StatProps = StatItem & {
  className?: string
}

function Stat({ label, visited, total, hint, className = '' }: StatProps): ReactElement {
  return (
    <div className={className}>
      <div className='font-semibold text-text text-md inline-flex gap-1 items-center'>
        <span>
          {visited} / {total}
        </span>
        {hint && <Hint text={hint} className='relative top-[-1px]' />}
      </div>
      <div className='text-sm text-text-secondary'>{label}</div>
    </div>
  )
}

export default Stat
