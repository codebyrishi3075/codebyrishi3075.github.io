'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '@/lib/constants'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const prevY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > prevY.current && y > 80)
      setScrolled(y > 20)
      prevY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(10,15,28,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,217,255,0.08)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-bold text-lg tracking-tight"
            style={{
              fontFamily: 'var(--font-syne)',
              color: 'var(--cyan)',
            }}
          >
            RK<span style={{ color: 'var(--text-primary)' }}>.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-[var(--cyan)]"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop hire button */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden md:flex items-center px-4 py-2 rounded-full text-xs font-medium transition-all duration-200"
            style={{
              border: '1px solid var(--cyan)',
              color: 'var(--cyan)',
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg"
            style={{
              color: 'var(--text-primary)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number] }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: 'rgba(10,15,28,0.97)', backdropFilter: 'blur(16px)' }}
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
              <span
                className="font-bold text-lg"
                style={{ fontFamily: 'var(--font-syne)', color: 'var(--cyan)' }}
              >
                RK<span style={{ color: 'var(--text-primary)' }}>.</span>
              </span>
              <button
                onClick={closeMenu}
                className="flex items-center justify-center w-11 h-11"
                style={{ color: 'var(--text-primary)' }}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={`mailto:${personalInfo.email}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.15 }}
                className="px-6 py-3 rounded-full font-medium"
                style={{
                  background: 'linear-gradient(135deg, var(--cyan), var(--blue-accent))',
                  color: '#0A0F1C',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                Hire Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


