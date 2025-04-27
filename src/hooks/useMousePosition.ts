import { useState, useEffect } from 'react'

interface MousePosition {
  clientX: number
  clientY: number
}

export default function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ clientX: 0, clientY: 0 })

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      setMousePosition({ clientX, clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mousePosition
}