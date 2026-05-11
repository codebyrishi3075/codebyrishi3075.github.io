'use client'

import Image from 'next/image'
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
  return <span>{count}{suffix}</span>
}

const infoItems = [
  { icon: MapPin,     label: 'Location', value: personalInfo.location },
  { icon: Phone,      label: 'Phone',    value: personalInfo.phone },
  { icon: Mail,       label: 'Email',    value: personalInfo.email },
  { icon: Building2,  label: 'Company',  value: personalInfo.company },
  { icon: Calendar,   label: 'Started',  value: personalInfo.started },
  { icon: Code2,      label: 'Stack',    value: personalInfo.stack },
]

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--cyan)', fontFamily: 'var(--font-dm-sans)' }}>
            Get To Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-syne)' }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">

          {/* ── LEFT — Photo card ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="flex flex-col items-center"
          >
            {/* Photo */}
            <div
              className="relative w-full max-w-[280px] rounded-2xl overflow-hidden mb-5 shine"
              style={{
                aspectRatio: '3/4',
                border: '1px solid rgba(0,217,255,0.2)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,217,255,0.08)',
              }}
            >
              <Image
                src="/photos/profile.png"
                alt="Rishikesh Kumar"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="280px"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(10,15,28,0.7) 0%, transparent 50%)',
                }}
              />
              {/* Name overlay */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-sm font-bold" style={{ fontFamily: 'var(--font-syne)', color: '#fff' }}>
                  Rishikesh Kumar
                </p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-dm-sans)' }}>
                  Backend Developer
                </p>
              </div>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[280px]">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-3 rounded-xl"
                  style={{ background: 'var(--navy)', border: '1px solid var(--border)' }}
                >
                  <p
                    className="text-xl font-bold gradient-text"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    <CountUp target={s.value} suffix={s.suffix} active={statsInView} />
                  </p>
                  <p className="text-[10px] leading-tight mt-0.5" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/RishikeshKumarCV.pdf"
              download="Rishikesh_Kumar_CV.pdf"
              className="mt-4 w-full max-w-[280px] flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shine"
              style={{
                background: 'linear-gradient(135deg, var(--cyan), var(--blue-accent))',
                color: '#0A0F1C',
                fontFamily: 'var(--font-dm-sans)',
              }}
            >
              <Download size={15} />
              Download CV
            </a>
          </motion.div>

          {/* ── RIGHT — Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
            >
              {personalInfo.bio}
            </p>

            {/* Info grid */}
            <div ref={statsRef} className="grid sm:grid-cols-2 gap-3">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-4 rounded-xl group transition-all duration-200"
                  style={{
                    background: 'var(--navy)',
                    border: '1px solid var(--border)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,217,255,0.25)'
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(0,217,255,0.03)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--navy)'
                  }}
                >
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                    style={{ background: 'rgba(0,217,255,0.1)' }}
                  >
                    <item.icon size={14} style={{ color: 'var(--cyan)' }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}>
                      {item.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-dm-sans)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
