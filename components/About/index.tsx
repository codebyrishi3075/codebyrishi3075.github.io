'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Building2, Calendar, Code2, Download } from 'lucide-react'
import { personalInfo, stats } from '@/lib/constants'

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const total = 60
    const timer = setInterval(() => {
      frame++
      setCount(Math.round((frame / total) * target))
      if (frame >= total) clearInterval(timer)
    }, 20)
    return () => clearInterval(timer)
  }, [active, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const infoItems = [
  { icon: MapPin, label: 'Location', value: personalInfo.location },
  { icon: Phone, label: 'Phone', value: personalInfo.phone },
  { icon: Mail, label: 'Email', value: personalInfo.email },
  { icon: Building2, label: 'Company', value: personalInfo.company },
  { icon: Calendar, label: 'Started', value: personalInfo.started },
  { icon: Code2, label: 'Stack', value: personalInfo.stack },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--navy)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
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
            Get To Know Me
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
            >
              {personalInfo.bio}
            </p>

            <a
              href="/RishikeshKumarCV.pdf"
              download="Rishikesh_Kumar_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                border: '1px solid var(--cyan)',
                color: 'var(--cyan)',
                fontFamily: 'var(--font-dm-sans)',
              }}
            >
              <Download size={15} />
              Download CV
            </a>
          </motion.div>

          {/* Info grid */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-4"
          >
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: 'var(--surface)' }}
              >
                <item.icon
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: 'var(--cyan)' }}
                />
                <div className="min-w-0">
                  <p
                    className="text-xs mb-0.5"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm font-medium truncate"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={0.1 * i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="text-center p-6 rounded-2xl card-glass"
            >
              <p
                className="text-3xl md:text-4xl font-bold mb-2 gradient-text"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} active={statsInView} />
              </p>
              <p
                className="text-xs leading-snug"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

