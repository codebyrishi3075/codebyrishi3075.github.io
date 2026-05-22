'use client'

import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { personalInfo, navLinks } from '@/lib/constants'

const socialIcons = [
  { Icon: GithubIcon, href: personalInfo.github, label: 'GitHub' },
  { Icon: LinkedinIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
  { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--navy)',
        borderTop: '1px solid rgba(0,212,255,0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Main footer body */}
      <div
        className="max-w-6xl mx-auto px-6"
        style={{ paddingTop: '3.5rem', paddingBottom: '2.5rem' }}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-10">

          {/* Brand column */}
          <div>
            <a
              href="#hero"
              className="inline-flex items-baseline gap-1 mb-3"
              style={{ textDecoration: 'none' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 800,
                  fontSize: '1.4rem',
                  color: 'var(--cyan)',
                  letterSpacing: '-0.02em',
                }}
              >
                RK
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 800,
                  fontSize: '1.4rem',
                  color: 'var(--text-primary)',
                }}
              >
                .
              </span>
            </a>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)', maxWidth: 260 }}
            >
              Python &amp; Django Backend Developer building production-grade APIs and scalable healthcare systems.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200"
                  style={{
                    color: 'var(--text-secondary)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = 'var(--cyan)'
                    el.style.borderColor = 'rgba(0,212,255,0.35)'
                    el.style.background = 'rgba(0,212,255,0.07)'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = 'var(--text-secondary)'
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.background = 'rgba(255,255,255,0.02)'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links column */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--cyan)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm transition-all duration-200 group"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-dm-sans)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: 'var(--cyan)',
                        display: 'inline-block',
                        opacity: 0.5,
                        flexShrink: 0,
                      }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'var(--cyan)', fontFamily: 'var(--font-dm-sans)' }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-sm transition-colors duration-200 group"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
              >
                <Mail size={14} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'}
              >
                <Phone size={14} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
                {personalInfo.phone}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} style={{ color: 'var(--cyan)', flexShrink: 0, marginTop: 2 }} />
                <span className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}>
                  {personalInfo.location}
                </span>
              </div>

              {/* Hire Me CTA */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 mt-2 px-4 py-2 rounded-full text-xs font-semibold shine btn-glow"
                style={{
                  background: 'linear-gradient(135deg, var(--cyan), var(--blue-accent))',
                  color: '#080D1A',
                  fontFamily: 'var(--font-dm-sans)',
                  width: 'fit-content',
                  textDecoration: 'none',
                }}
              >
                Hire Me
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          <p
            className="text-xs"
            style={{ color: 'rgba(136,153,187,0.6)', fontFamily: 'var(--font-dm-sans)' }}
          >
            © 2026 Rishikesh Kumar — Built with Next.js, Three.js &amp; Framer Motion
          </p>
          <div className="flex items-center gap-2">
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'var(--green-accent)',
                boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
                display: 'inline-block',
                animation: 'pulse-green 2s ease-in-out infinite',
              }}
            />
            <span
              className="text-xs"
              style={{ color: 'var(--green-accent)', fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
            >
              Open to new opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

