import { IconType } from 'react-icons/lib'

import type { ReactElement } from 'react'

import { Button } from '@/components/ui/button'
import useFilterStore from '@/store/useFilterStore'

interface EmptyStateProps {
  icon: IconType
  title: string
  description: string
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
}: EmptyStateProps): ReactElement {
  const { setFilter } = useFilterStore()

  return (
    <div className='relative flex flex-col items-center justify-center text-center text-text px-4 py-16 mt-12'>
      <Icon className='w-10 h-10 mb-3' />
      <h2 className='text-lg font-semibold'>{title}</h2>
      <p className='text-sm text-text-secondary mt-1'>{description}</p>
      <Button variant='primary' className='mt-6' onClick={() => setFilter('all')}>
        Browse all countries
      </Button>
    </div>
  )
}
