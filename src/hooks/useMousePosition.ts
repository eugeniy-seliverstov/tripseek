import { useState, useEffect } from 'react'

interface MousePosition {
  clientX: number
  clientY: number
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ clientX: 0, clientY: 0 })

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent): void => {
      setMousePosition({ clientX, clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return (): void => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mousePosition
}

export default useMousePosition
