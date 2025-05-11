import type { ReactElement } from 'react'

interface StatProps {
  label: string
  visited: number
  total: number
  className?: string
}

function Stat({ label, visited, total, className = '' }: StatProps): ReactElement {
  return (
    <div className={className}>
      <div className='font-semibold text-text'>
        {visited} / {total}
      </div>
      <div className='text-sm text-text-secondary'>{label}</div>
    </div>
  )
}

export default Stat
