'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

function SkillPill({ name, index }: { name: string; index: number }) {
  return (
    <motion.span
      variants={fadeUp}
      custom={index * 0.03}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ scale: 1.05 }}
      className="inline-block px-3 py-1.5 rounded-lg text-xs font-medium cursor-default transition-all duration-200"
      style={{
        background: 'rgba(0,217,255,0.08)',
        border: '1px solid rgba(0,217,255,0.2)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-dm-sans)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(0,217,255,0.18)'
        el.style.borderColor = 'var(--cyan)'
        el.style.color = 'var(--cyan)'
        el.style.boxShadow = '0 0 12px rgba(0,217,255,0.25)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(0,217,255,0.08)'
        el.style.borderColor = 'rgba(0,217,255,0.2)'
        el.style.color = 'var(--text-primary)'
        el.style.boxShadow = 'none'
      }}
    >
      {name}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: 'var(--cyan)', fontFamily: 'var(--font-dm-sans)' }}
          >
            What I Work With
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Skills &amp; <span className="gradient-text">Tools</span>
          </h2>
        </motion.div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              custom={ci * 0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="p-6 rounded-2xl"
              style={{
                background: 'var(--navy)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3
                  className="font-semibold text-sm"
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-syne)',
                  }}
                >
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <SkillPill key={skill} name={skill} index={ci * 10 + si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

