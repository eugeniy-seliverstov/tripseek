import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import type { ReactElement } from 'react'

import { TerritoryCode } from '@/types/territory'

interface TerritoryFlagProps {
  code: TerritoryCode
}

export const TerritoryFlag = ({ code }: TerritoryFlagProps): ReactElement => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '100px 0px' })

  return (
    <div
      ref={ref}
      className='relative w-10 h-10 rounded overflow-hidden flex items-center justify-center'
    >
      {inView || isLoaded ? (
        <img
          src={`/flags/${code}.png`}
          alt={`${code} flag`}
          className={`absolute w-full h-full object-contain`}
          onLoad={() => setIsLoaded(true)}
          loading='lazy'
          decoding='async'
        />
      ) : null}

      {!isLoaded && <div className='absolute w-10 h-7 rounded bg-gray-300 animate-pulse z-0' />}
    </div>
  )
}
