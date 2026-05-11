'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/constants'

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  'Backend Core':             { bg: 'rgba(0,217,255,0.08)',    border: 'rgba(0,217,255,0.2)',    text: 'var(--cyan)' },
  'APIs & Auth':              { bg: 'rgba(79,142,247,0.08)',   border: 'rgba(79,142,247,0.2)',   text: 'var(--blue-accent)' },
  'Database & Cache':         { bg: 'rgba(124,58,237,0.08)',   border: 'rgba(124,58,237,0.2)',   text: '#a78bfa' },
  'Async & Realtime':         { bg: 'rgba(0,217,255,0.08)',    border: 'rgba(0,217,255,0.2)',    text: 'var(--cyan)' },
  'Third-Party Integrations': { bg: 'rgba(79,142,247,0.08)',   border: 'rgba(79,142,247,0.2)',   text: 'var(--blue-accent)' },
  'DevOps & Deployment':      { bg: 'rgba(124,58,237,0.08)',   border: 'rgba(124,58,237,0.2)',   text: '#a78bfa' },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: 'var(--navy)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--cyan)', fontFamily: 'var(--font-dm-sans)' }}>
            Tech Arsenal
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-syne)' }}>
            Skills &amp; <span className="gradient-text">Tools</span>
          </h2>
        </motion.div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillCategories.map((cat, ci) => {
            const colors = categoryColors[cat.title] ?? { bg: 'rgba(0,217,255,0.08)', border: 'rgba(0,217,255,0.2)', text: 'var(--cyan)' }
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: ci * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="p-6 rounded-2xl shine group transition-all duration-300"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = colors.border
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${colors.bg}`
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-syne)' }}>
                    {cat.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.05 + si * 0.03 }}
                      className="inline-block px-3 py-1.5 rounded-lg text-xs font-medium cursor-default transition-all duration-200"
                      style={{
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-dm-sans)',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.color = colors.text
                        el.style.background = colors.bg.replace('0.08', '0.15')
                        el.style.transform = 'scale(1.05)'
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.color = 'var(--text-secondary)'
                        el.style.background = colors.bg
                        el.style.transform = 'scale(1)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
