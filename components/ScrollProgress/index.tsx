'use client'

import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!barRef.current) return
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? window.scrollY / total : 0
      barRef.current.style.width = `${progress * 100}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div ref={barRef} className="scroll-progress" style={{ width: '0%' }} />
}
