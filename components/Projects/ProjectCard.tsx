'use client'

import { useRef, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/icons'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  links: { site?: string; github?: string }
  featured: boolean
}

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
    const rotateX = ((y - cy) / cy) * -8
    const rotateY = ((x - cx) / cx) * 8
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full p-6 rounded-2xl flex flex-col"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          transition: 'transform 0.15s ease, box-shadow 0.3s ease',
          willChange: 'transform',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.boxShadow =
            '0 20px 60px rgba(0,217,255,0.12), 0 0 0 1px rgba(0,217,255,0.2)'
        }}
      >
        {/* Featured badge */}
        {project.featured && (
          <span
            className="inline-block self-start px-2.5 py-0.5 rounded-full text-xs font-medium mb-4"
            style={{
              background: 'rgba(0,217,255,0.12)',
              color: 'var(--cyan)',
              border: '1px solid rgba(0,217,255,0.3)',
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            â˜… Featured
          </span>
        )}

        {/* Title */}
        <h3
          className="text-lg font-bold mb-3 leading-snug"
          style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1 mb-5"
          style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs"
              style={{
                background: 'rgba(79,142,247,0.1)',
                color: 'var(--blue-accent)',
                fontFamily: 'var(--font-dm-sans)',
                border: '1px solid rgba(79,142,247,0.2)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(project.links.site || project.links.github) && (
          <div className="flex gap-3 mt-auto">
            {project.links.site && (
              <a
                href={project.links.site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                style={{ color: 'var(--cyan)', fontFamily: 'var(--font-dm-sans)' }}
              >
                <ExternalLink size={13} />
                Visit Site
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
              >
                <GithubIcon width={13} height={13} />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

