import { LuCompass } from 'react-icons/lu'
import { Button } from '@/components/ui/button'

import useFilterStore from '@/store/useFilterStore'


interface EmptyStateProps {
  title: string
  description: string
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  const { setFilter } = useFilterStore()

  return (
    <div className='flex flex-col items-center justify-center text-center text-text px-4 py-12'>
      <LuCompass className="w-8 h-8 mb-3" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-text-secondary mt-1">{description}</p>
      <Button variant='primary' className='mt-6' onClick={() => setFilter('all')}>
        Browse all countries
      </Button>
    </div>
  )
}
