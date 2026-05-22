'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, Mail, FolderOpen, ArrowDown } from 'lucide-react'
import { personalInfo } from '@/lib/constants'

const ThreeCanvas = dynamic(() => import('./ThreeCanvas'), { ssr: false, loading: () => null })

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--navy)' }}
    >
      {/* Three.js canvas */}
      <ThreeCanvas />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 z-[1] bg-dot-grid opacity-30" />

      {/* Gradient orbs */}
      <div
        className="orb z-[1]"
        style={{
          width: 600, height: 600,
          top: '-15%', left: '-10%',
          background: 'radial-gradient(circle, rgba(0,217,255,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="orb z-[1]"
        style={{
          width: 500, height: 500,
          bottom: '-10%', right: '-5%',
          background: 'radial-gradient(circle, rgba(79,142,247,0.1) 0%, transparent 70%)',
        }}
      />
      <div
        className="orb z-[1]"
        style={{
          width: 300, height: 300,
          top: '40%', right: '20%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

          {/* ── LEFT — Text ── */}
          <div className="flex-1 text-center md:text-left">

            {/* Available badge */}
            <motion.div
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.2)',
              }}
            >
              <span className="available-dot" />
              <span
                className="text-xs font-medium"
                style={{ color: '#22c55e', fontFamily: 'var(--font-dm-sans)' }}
              >
                Available for new opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-base md:text-lg mb-2"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Hello, I&apos;m 👋
            </motion.p>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.3)}
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(2.4rem, 6vw, 5rem)',
                lineHeight: 1.05,
                marginBottom: '0.5rem',
              }}
            >
              <span className="gradient-text">Rishikesh</span>{' '}
              <span style={{ color: 'var(--text-primary)' }}>Kumar</span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              {...fadeUp(0.4)}
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 600,
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                color: 'var(--text-secondary)',
                marginBottom: '1.25rem',
              }}
            >
              Python &amp;{' '}
              <span style={{ color: 'var(--cyan)' }}>Django Backend Developer</span>
            </motion.h2>

            {/* Code snippet decoration */}
            <motion.div {...fadeUp(0.5)} className="code-block inline-block mb-7 text-left w-full max-w-xs sm:max-w-sm">
              <div className="code-bar">
                <span className="dot" style={{ background: '#FF5F57' }} />
                <span className="dot" style={{ background: '#FFBD2E' }} />
                <span className="dot" style={{ background: '#28CA41' }} />
                <span className="ml-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                  developer.py
                </span>
              </div>
              <div className="px-4 py-3">
                <p><span style={{ color: '#569cd6' }}>class</span> <span style={{ color: '#4EC9B0' }}>Developer</span><span style={{ color: '#d4d4d4' }}>:</span></p>
                <p><span style={{ color: '#d4d4d4' }}>{'  '}name</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#ce9178' }}>&quot;Rishikesh Kumar&quot;</span></p>
                <p><span style={{ color: '#d4d4d4' }}>{'  '}stack</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#d4d4d4' }}>[</span><span style={{ color: '#ce9178' }}>&quot;Python&quot;</span><span style={{ color: '#d4d4d4' }}>, </span><span style={{ color: '#ce9178' }}>&quot;Django&quot;</span><span style={{ color: '#d4d4d4' }}>, </span><span style={{ color: '#ce9178' }}>&quot;DRF&quot;</span><span style={{ color: '#d4d4d4' }}>]</span></p>
                <p><span style={{ color: '#d4d4d4' }}>{'  '}apis</span> <span style={{ color: '#d4d4d4' }}>=</span> <span style={{ color: '#b5cea8' }}>80</span><span style={{ color: '#d4d4d4' }}>  </span><span style={{ color: '#6A9955' }}># endpoints built</span></p>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex flex-wrap justify-center md:justify-start gap-5 mb-8"
            >
              {[
                { value: '80+', label: 'REST APIs' },
                { value: '15', label: 'Django Apps' },
                { value: '8', label: 'Integrations' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p
                    className="text-2xl font-bold gradient-text"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.7)}
              className="flex flex-wrap justify-center md:justify-start gap-3"
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shine"
                style={{
                  background: 'linear-gradient(135deg, var(--cyan), var(--blue-accent))',
                  color: '#080D1A',
                  fontFamily: 'var(--font-dm-sans)',
                  minHeight: '48px',
                  minWidth: '140px',
                  boxShadow: '0 4px 20px rgba(0,212,255,0.25)',
                }}
              >
                <FolderOpen size={15} />
                View Projects
              </a>

              <a
                href="/RishikeshKumarCV.pdf"
                download="Rishikesh_Kumar_CV.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  border: '1px solid var(--cyan)',
                  color: 'var(--cyan)',
                  fontFamily: 'var(--font-dm-sans)',
                  minHeight: '48px',
                  minWidth: '140px',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(0,217,255,0.08)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,217,255,0.2)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <Download size={15} />
                Download CV
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-dm-sans)',
                  minHeight: '48px',
                  minWidth: '130px',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.25)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                }}
              >
                <Mail size={15} />
                Let&apos;s Talk
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT — Profile photo ── */}
          <motion.div
            {...fadeRight(0.3)}
            className="relative flex-shrink-0 flex items-center justify-center"
          >
            {/* Floating badge — top left (hidden on small phones) */}
            <div
              className="float-badge z-20 hidden sm:flex"
              style={{
                top: '2%',
                left: '-10%',
                animationDelay: '0s',
                border: '1px solid rgba(0,217,255,0.2)',
              }}
            >
              <span style={{ fontSize: '1rem' }}>🐍</span>
              <span style={{ color: 'var(--text-primary)' }}>Python 3.13</span>
            </div>

            {/* Floating badge — bottom right (hidden on small phones) */}
            <div
              className="float-badge z-20 hidden sm:flex"
              style={{
                bottom: '4%',
                right: '-8%',
                animationDelay: '1.5s',
                border: '1px solid rgba(79,142,247,0.2)',
              }}
            >
              <span style={{ fontSize: '1rem' }}>🚀</span>
              <span style={{ color: 'var(--text-primary)' }}>Production Ready</span>
            </div>

            {/* Floating badge — top right (hidden on small phones) */}
            <div
              className="float-badge z-20 hidden sm:flex"
              style={{
                top: '18%',
                right: '-12%',
                animationDelay: '0.8s',
                border: '1px solid rgba(124,58,237,0.2)',
              }}
            >
              <span style={{ fontSize: '1rem' }}>⚡</span>
              <span style={{ color: 'var(--text-primary)' }}>80+ REST APIs</span>
            </div>

            {/* Glow behind photo */}
            <div
              className="absolute inset-0 rounded-full z-[1]"
              style={{
                background: 'radial-gradient(circle, rgba(0,217,255,0.18) 0%, transparent 70%)',
                filter: 'blur(30px)',
                transform: 'scale(1.3)',
              }}
            />

            {/* Photo ring wrapper — responsive sizes */}
            <div
              className="profile-ring z-10"
              style={{
                width: 'clamp(200px, 38vw, 280px)',
                height: 'clamp(200px, 38vw, 280px)',
              }}
            >
              <div
                style={{
                  width: 'calc(clamp(200px, 38vw, 280px) - 8px)',
                  height: 'calc(clamp(200px, 38vw, 280px) - 8px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: 'var(--surface)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Image
                  src="/photos/profile.png"
                  alt="Rishikesh Kumar"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                  sizes="272px"
                />
              </div>
            </div>

            {/* Tech pills below photo */}
            <div
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20"
              style={{ whiteSpace: 'nowrap' }}
            >
              {['Django', 'PostgreSQL', 'Redis'].map((t) => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        style={{ color: 'var(--text-secondary)' }}
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
