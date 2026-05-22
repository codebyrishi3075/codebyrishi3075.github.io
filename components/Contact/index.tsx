'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { personalInfo } from '@/lib/constants'

// TODO: Replace with your actual Formspree form ID
// Sign up at https://formspree.io, create a form, and paste the endpoint here:
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeenvloj'

interface FormData {
  name: string
  email: string
  message: string
}

const socialLinks = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: personalInfo.github,
    handle: '@codebyrishi3075',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: personalInfo.linkedin,
    handle: 'Rishikesh Kumar',
  },
  {
    icon: Mail,
    label: 'Email',
    href: `mailto:${personalInfo.email}`,
    handle: personalInfo.email,
  },
  {
    icon: Phone,
    label: 'Phone',
    href: `tel:${personalInfo.phone}`,
    handle: personalInfo.phone,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
        reset()
      } else {
        setError('Something went wrong. Please try again or email directly.')
      }
    } catch {
      setError('Network error. Please try again.')
    }
  }

  const inputStyle = {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '0.9rem',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle dot grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(0,217,255,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Top glow orb */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,142,247,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Bottom glow orb */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '5%',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,217,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div className="max-w-5xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
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
            Let&apos;s Connect
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p
            className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
          >
            Looking for a Python &amp; Django Developer with hands-on healthcare backend experience?
            Open to backend roles, API-focused work, and production-grade system design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Social links */}
          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3
              className="text-lg font-semibold mb-6"
              style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
            >
              Find Me Online
            </h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200"
                  style={{
                    background: 'var(--navy)',
                    border: '1px solid var(--border)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,217,255,0.4)'
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(0,217,255,0.04)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--navy)'
                  }}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ background: 'rgba(0,217,255,0.1)' }}
                  >
                    <s.icon width={18} height={18} style={{ color: 'var(--cyan)' }} />
                  </div>
                  <div>
                    <p
                      className="text-xs mb-0.5"
                      style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {s.label}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {s.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3
              className="text-lg font-semibold mb-6"
              style={{ fontFamily: 'var(--font-syne)', color: 'var(--text-primary)' }}
            >
              Send a Message
            </h3>

            {submitted ? (
              <div
                className="p-6 rounded-xl text-center"
                style={{ background: 'rgba(0,217,255,0.08)', border: '1px solid rgba(0,217,255,0.25)' }}
              >
                <p className="text-lg mb-2" style={{ fontFamily: 'var(--font-syne)', color: 'var(--cyan)' }}>
                  Message sent!
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-dm-sans)' }}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                  <input
                    suppressHydrationWarning
                    {...register('name', { required: 'Name is required' })}
                    placeholder="Your Name"
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = 'var(--cyan)')}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'var(--border)')}
                  />
                  {errors.name && (
                    <p className="text-xs mt-1" style={{ color: '#ff6b6b', fontFamily: 'var(--font-dm-sans)' }}>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    suppressHydrationWarning
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                    })}
                    placeholder="Your Email"
                    type="email"
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = 'var(--cyan)')}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'var(--border)')}
                  />
                  {errors.email && (
                    <p className="text-xs mt-1" style={{ color: '#ff6b6b', fontFamily: 'var(--font-dm-sans)' }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    suppressHydrationWarning
                    {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'At least 10 characters' } })}
                    placeholder="Your Message"
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = 'var(--cyan)')}
                    onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = 'var(--border)')}
                  />
                  {errors.message && (
                    <p className="text-xs mt-1" style={{ color: '#ff6b6b', fontFamily: 'var(--font-dm-sans)' }}>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {error && (
                  <p className="text-xs" style={{ color: '#ff6b6b', fontFamily: 'var(--font-dm-sans)' }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 disabled:opacity-60"
                  style={{
                    background: 'linear-gradient(135deg, var(--cyan), var(--blue-accent))',
                    color: '#0A0F1C',
                    fontFamily: 'var(--font-dm-sans)',
                    minHeight: '44px',
                  }}
                >
                  <Send size={15} />
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

