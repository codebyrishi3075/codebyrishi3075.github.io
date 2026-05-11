'use client'

import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { personalInfo } from '@/lib/constants'

const icons = [
  { Icon: GithubIcon, href: personalInfo.github, label: 'GitHub' },
  { Icon: LinkedinIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
  { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{
        background: 'var(--navy)',
        borderColor: 'rgba(0,217,255,0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <p
            className="font-bold text-lg"
            style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
          >
            Rishikesh Kumar
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Python &amp; Django Backend Developer
          </p>
        </div>

        {/* Copyright */}
        <p
          className="text-xs text-center"
          style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
        >
          © 2026 Rishikesh Kumar. Built with Next.js + Three.js
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {icons.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
              style={{
                color: 'var(--text-secondary)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'var(--cyan)'
                el.style.borderColor = 'rgba(0,217,255,0.4)'
                el.style.background = 'rgba(0,217,255,0.08)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'var(--text-secondary)'
                el.style.borderColor = 'rgba(255,255,255,0.1)'
                el.style.background = 'transparent'
              }}
            >
              <Icon width={16} height={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
