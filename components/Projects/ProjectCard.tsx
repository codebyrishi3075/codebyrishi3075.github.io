'use client'

import { useRef, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/icons'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  links: { site?: string; github?: string }
  featured: boolean
}

const gradients = [
  'linear-gradient(135deg, rgba(0,217,255,0.15) 0%, rgba(79,142,247,0.08) 100%)',
  'linear-gradient(135deg, rgba(79,142,247,0.15) 0%, rgba(124,58,237,0.08) 100%)',
  'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(0,217,255,0.08) 100%)',
  'linear-gradient(135deg, rgba(0,217,255,0.12) 0%, rgba(124,58,237,0.12) 100%)',
  'linear-gradient(135deg, rgba(79,142,247,0.12) 0%, rgba(0,217,255,0.12) 100%)',
  'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(79,142,247,0.12) 100%)',
]

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -6
    const rotY = ((x - cx) / cx) * 6
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)'
    card.style.boxShadow = 'none'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.boxShadow = '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,217,255,0.2)'
        }}
        className="h-full flex flex-col rounded-2xl overflow-hidden shine"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          transition: 'transform 0.18s ease, box-shadow 0.3s ease',
          willChange: 'transform',
        }}
      >
        {/* Gradient header */}
        <div
          className="relative h-28 flex items-center justify-center overflow-hidden"
          style={{ background: gradients[index % gradients.length] }}
        >
          {/* Large number watermark */}
          <span className="project-number">{String(index + 1).padStart(2, '0')}</span>

          {/* Decorative lines */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,217,255,0.15) 0, rgba(0,217,255,0.15) 1px, transparent 0, transparent 50%)',
              backgroundSize: '12px 12px',
            }}
          />

          {/* Featured badge */}
          {project.featured && (
            <span
              className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
              style={{
                background: 'rgba(0,217,255,0.2)',
                border: '1px solid rgba(0,217,255,0.4)',
                color: 'var(--cyan)',
                fontFamily: 'var(--font-dm-sans)',
                backdropFilter: 'blur(8px)',
              }}
            >
              ★ Featured
            </span>
          )}

          {/* Project index */}
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center relative z-10"
            style={{
              background: 'rgba(10,15,28,0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(0,217,255,0.2)',
            }}
          >
            <span style={{ color: 'var(--cyan)', fontSize: '1.3rem' }}>
              {index === 0 ? '🏥' : index === 1 ? '💳' : index === 2 ? '🧪' : index === 3 ? '🚀' : index === 4 ? '📊' : '🛒'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <h3
            className="text-base font-bold mb-2 leading-snug"
            style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
          >
            {project.title}
          </h3>

          <p
            className="text-sm leading-relaxed flex-1 mb-4"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium"
                style={{
                  background: 'rgba(79,142,247,0.08)',
                  color: 'var(--blue-accent)',
                  border: '1px solid rgba(79,142,247,0.18)',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {(project.links.site || project.links.github) && (
            <div
              className="flex gap-3 pt-4"
              style={{ borderTop: '1px solid var(--border)' }}
            >
              {project.links.site && (
                <a
                  href={project.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group"
                  style={{
                    background: 'linear-gradient(135deg, var(--cyan), var(--blue-accent))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                >
                  <ExternalLink size={12} style={{ color: 'var(--cyan)', minWidth: 12 }} />
                  Live Site
                  <ArrowUpRight size={11} style={{ color: 'var(--cyan)', minWidth: 11 }} />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
                >
                  <GithubIcon width={12} height={12} />
                  Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
