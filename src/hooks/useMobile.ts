import { useEffect, useState } from 'react'

const MOBILE_WIDTH = 639

export const useMobile = (maxWidth = MOBILE_WIDTH): boolean => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = (): void => setIsMobile(window.innerWidth <= maxWidth)
    check()

    window.addEventListener('resize', check)
    return (): void => window.removeEventListener('resize', check)
  }, [maxWidth])

  return isMobile
}
