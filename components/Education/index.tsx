'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { education } from '@/lib/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding"
      style={{ background: 'var(--navy)' }}
    >
      <div className="max-w-5xl mx-auto">
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
            Academic Background
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              variants={fadeUp}
              custom={i * 0.12}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="p-8 rounded-2xl"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                  style={{ background: 'rgba(0,217,255,0.1)' }}
                >
                  {edu.type === 'certification' ? (
                    <Award size={22} style={{ color: 'var(--cyan)' }} />
                  ) : (
                    <GraduationCap size={22} style={{ color: 'var(--cyan)' }} />
                  )}
                </div>

                <div>
                  <span
                    className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium mb-2"
                    style={{
                      background: edu.type === 'certification'
                        ? 'rgba(0,217,255,0.1)'
                        : 'rgba(79,142,247,0.1)',
                      color: edu.type === 'certification' ? 'var(--cyan)' : 'var(--blue-accent)',
                      border: `1px solid ${edu.type === 'certification' ? 'rgba(0,217,255,0.3)' : 'rgba(79,142,247,0.3)'}`,
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    {edu.type === 'certification' ? 'Certification' : 'Degree'}
                  </span>

                  <h3
                    className="font-bold text-lg leading-snug mb-1"
                    style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
                  >
                    {edu.degree}
                  </h3>

                  <p
                    className="text-sm mb-1"
                    style={{ color: 'var(--cyan)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {edu.institution}
                  </p>

                  <p
                    className="text-xs mb-1"
                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {edu.duration}
                  </p>

                  <p
                    className="text-xs font-medium"
                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {edu.credential}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

