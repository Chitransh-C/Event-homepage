import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({ children }) {
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothHorizontal: false,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    lenis.resize()

    return () => {
      lenis.destroy()
    }
  }, [location])

  return <div className="relative">{children}</div>
}
