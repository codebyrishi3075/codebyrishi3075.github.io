'use client'

import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import { experience } from '@/lib/constants'

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line — left-aligned on mobile, centered on md+ */}
      <div
        className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px"
        style={{ background: 'linear-gradient(to bottom, var(--cyan), transparent)', transform: 'translateX(-50%)' }}
      />

      <div className="flex flex-col gap-10">
        {experience.map((entry, i) => {
          const isLeft = i % 2 === 0
          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className={`relative flex flex-col md:flex-row gap-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot on the line */}
              <div
                className="absolute left-5 md:left-1/2 top-7 w-3 h-3 rounded-full z-10"
                style={{
                  background: entry.current ? 'var(--cyan)' : 'var(--blue-accent)',
                  boxShadow: entry.current ? '0 0 14px var(--cyan)' : 'none',
                  transform: 'translate(-50%, -50%)',
                }}
              />

              {/* Spacer column — only visible on md+ to push card to correct side */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card — full width on mobile, half on md+ */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}
              >
                <div
                  className="p-5 sm:p-6 rounded-2xl h-full"
                  style={{
                    background: 'var(--surface)',
                    border: `1px solid ${entry.current ? 'rgba(0,212,255,0.25)' : 'var(--border)'}`,
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <Briefcase size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--cyan)' }} />
                    <div className="min-w-0">
                      {entry.current && (
                        <span
                          className="inline-block px-2 py-0.5 rounded-full text-[10px] font-medium mb-1"
                          style={{
                            background: 'rgba(0,212,255,0.12)',
                            color: 'var(--cyan)',
                            border: '1px solid rgba(0,212,255,0.3)',
                            fontFamily: 'var(--font-dm-sans)',
                          }}
                        >
                          Current
                        </span>
                      )}
                      <h3
                        className="font-bold text-base leading-snug"
                        style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
                      >
                        {entry.role}
                      </h3>
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: 'var(--cyan)', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {entry.company}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {entry.duration}
                      </p>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="flex flex-col gap-2">
                    {entry.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2">
                        <CheckCircle2
                          size={13}
                          className="mt-0.5 shrink-0"
                          style={{ color: 'var(--cyan)' }}
                        />
                        <span
                          className="text-xs leading-relaxed"
                          style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

