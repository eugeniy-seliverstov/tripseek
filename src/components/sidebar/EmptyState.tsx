import { IconType } from 'react-icons/lib'

import type { ReactElement } from 'react'

import { Button } from '@/components/ui/button'
import { useFilterStore } from '@/store/useFilterStore'
import { cn } from '@/utils/cn'

interface EmptyStateProps {
  icon: IconType
  title: string
  description: string
  className?: string
}

export const EmptyState = ({
  icon: Icon,
  title,
  description,
  className,
}: EmptyStateProps): ReactElement => {
  const { setFilter } = useFilterStore()

  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center text-center text-text px-4',
        className,
      )}
    >
      <Icon className='w-10 h-10 mb-3' />
      <h2 className='text-lg font-semibold'>{title}</h2>
      <p className='text-sm text-text-secondary mt-1'>{description}</p>
      <Button variant='primary' className='mt-6' onClick={() => setFilter('all')}>
        Browse all countries
      </Button>
    </div>
  )
}
