'use client'

import { motion } from 'framer-motion'
import Timeline from './Timeline'

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: 'var(--cyan)', fontFamily: 'var(--font-dm-sans)' }}
          >
            My Journey
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <Timeline />
      </div>
    </section>
  )
}

