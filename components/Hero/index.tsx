'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, FolderOpen } from 'lucide-react'
import { personalInfo } from '@/lib/constants'

const ThreeCanvas = dynamic(() => import('./ThreeCanvas'), {
  ssr: false,
  loading: () => null,
})

const words = personalInfo.name.split(' ')

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number] },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] as [number, number, number, number] },
  }),
}

export default function Hero() {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--navy)' }}
    >
      {/* Three.js canvas â€” desktop only */}
      {isDesktop && <ThreeCanvas />}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,217,255,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate="visible"
          className="text-sm tracking-[0.3em] uppercase mb-6"
          style={{ color: 'var(--cyan)', fontFamily: 'var(--font-dm-sans)' }}
        >
          Available for Backend Roles
        </motion.p>

        {/* Name â€” staggered words */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-x-4 mb-4"
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
            lineHeight: 1.05,
          }}
        >
          {words.map((w) => (
            <motion.span key={w} variants={wordVariants} className="gradient-text">
              {w}
            </motion.span>
          ))}
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={fadeUp}
          custom={0.7}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 600,
            fontSize: 'clamp(1.1rem, 3vw, 1.75rem)',
            color: 'var(--text-secondary)',
            marginBottom: '1rem',
          }}
        >
          {personalInfo.role}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          custom={0.9}
          initial="hidden"
          animate="visible"
          className="text-sm md:text-base mb-10"
          style={{ color: 'var(--text-secondary)', letterSpacing: '0.05em' }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          custom={1.1}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, var(--cyan), var(--blue-accent))',
              color: '#0A0F1C',
              fontFamily: 'var(--font-dm-sans)',
              minWidth: '44px',
              minHeight: '44px',
            }}
          >
            <FolderOpen size={16} />
            View Projects
          </a>

          <a
            href="/RishikeshKumarCV.pdf"
            download="Rishikesh_Kumar_CV.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 glow-cyan"
            style={{
              border: '1px solid var(--cyan)',
              color: 'var(--cyan)',
              fontFamily: 'var(--font-dm-sans)',
              minWidth: '44px',
              minHeight: '44px',
            }}
          >
            <Download size={16} />
            Download CV
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300"
            style={{
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-dm-sans)',
              minWidth: '44px',
              minHeight: '44px',
            }}
          >
            <Mail size={16} />
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-secondary)' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}


