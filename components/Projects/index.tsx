'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/constants'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: 'var(--navy)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-14"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: 'var(--cyan)', fontFamily: 'var(--font-dm-sans)' }}
          >
            What I&apos;ve Built
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

