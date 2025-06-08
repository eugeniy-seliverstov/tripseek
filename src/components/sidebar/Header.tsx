import { useMemo, ReactElement } from 'react'

import { Statistics } from '@/components/sidebar/Statistics'
import { generateGuestProfile } from '@/utils/generateGuestProfile'

export const Header = (): ReactElement => {
  const guest = useMemo(generateGuestProfile, [])

  return (
    <div className='px-4 pt-4 text-center hidden sm:block'>
      <div className='w-20 h-20 mb-2 mx-auto rounded-full bg-primary-light flex items-center justify-center text-[2.5rem] leading-none select-none'>
        {guest.avatar}
      </div>

      <div className='mb-4 font-semibold text-lg text-text'>{guest.name}</div>

      <Statistics />
    </div>
  )
}
