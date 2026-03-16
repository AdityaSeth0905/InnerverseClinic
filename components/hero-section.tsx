'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPct = (clientX / innerWidth - 0.5) * 2
      const yPct = (clientY / innerHeight - 0.5) * 2
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${xPct * -18}px, ${yPct * -18}px)`
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${xPct * 12}px, ${yPct * 12}px)`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--iv-bg)' }}
    >
      {/* Gradient orbs */}
      <div
        ref={orb1Ref}
        className="absolute pointer-events-none transition-transform duration-700 ease-out"
        style={{
          top: '8%',
          right: '12%',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,144,106,0.13) 0%, transparent 70%)',
          filter: 'blur(1px)',
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute pointer-events-none transition-transform duration-700 ease-out"
        style={{
          bottom: '15%',
          left: '5%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(58,158,142,0.1) 0%, transparent 70%)',
          filter: 'blur(1px)',
        }}
      />

      {/* Geometric ornaments */}
      <div
        className="ornament-ring absolute animate-float"
        style={{
          width: '340px',
          height: '340px',
          top: '18%',
          right: '8%',
          opacity: 0.18,
          animationDuration: '8s',
        }}
      />
      <div
        className="ornament-ring absolute"
        style={{
          width: '200px',
          height: '200px',
          top: '25%',
          right: '14%',
          opacity: 0.1,
        }}
      />

      {/* Vertical rule left */}
      <div
        className="absolute left-8 top-0 bottom-0 hidden lg:block"
        style={{
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, var(--iv-border) 20%, var(--iv-border) 80%, transparent)',
        }}
      />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-screen-xl mx-auto w-full px-8 lg:px-20 pt-40 pb-24">
        {/* Label row */}
        <div
          className="flex items-center gap-5 mb-10 animate-fade-up animate-fade-up-1"
        >
          <span className="label-tag">Est. New Delhi</span>
          <span
            className="h-px flex-shrink-0"
            style={{ width: '48px', background: 'var(--iv-copper)', opacity: 0.6 }}
          />
          <span className="label-tag">Homeopathic Medicine</span>
        </div>

        {/* Headline */}
        <div className="mb-8 max-w-4xl">
          <h1
            className="animate-fade-up animate-fade-up-2"
            style={{
              fontFamily: 'Gilda Display, serif',
              fontSize: 'clamp(3.4rem, 8vw, 7.2rem)',
              lineHeight: 1.06,
              color: 'var(--iv-text)',
              letterSpacing: '-0.02em',
            }}
          >
            Healing
            <br />
            <span
              style={{
                fontFamily: 'Cormorant, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--iv-copper)',
              }}
            >
              from within.
            </span>
          </h1>
        </div>

        {/* Sub-tagline */}
        <p
          className="animate-fade-up animate-fade-up-3 mb-12"
          style={{
            maxWidth: '460px',
            fontSize: '0.9rem',
            fontWeight: 300,
            lineHeight: 1.9,
            letterSpacing: '0.04em',
            color: 'var(--iv-text-2)',
          }}
        >
          Innerverse Homoeoclinic offers personalised homeopathic care rooted in
          decades of clinical expertise — treating the whole person, not just
          the symptom.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-up animate-fade-up-4">
          <Link href="/contact" className="btn-primary">
            Book a Consultation
          </Link>
          <Link href="/about" className="btn-ghost">
            About the Clinic
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up animate-fade-up-5"
          style={{
            borderTop: '1px solid var(--iv-border)',
          }}
        >
          {[
            { value: '10+', label: 'Years of Practice' },
            { value: '2', label: 'Expert Physicians' },
            { value: '5000+', label: 'Patients Treated' },
            { value: '100%', label: 'Natural Remedies' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: 'Gilda Display, serif',
                  fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                  color: 'var(--iv-copper)',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--iv-text-muted)',
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal bottom rule with scroll hint */}
      <div
        className="relative flex items-center justify-between px-8 lg:px-20 pb-8"
      >
        <div
          className="h-px flex-1"
          style={{ background: 'var(--iv-border)' }}
        />
        <span
          className="mx-6 label-tag"
          style={{ color: 'var(--iv-text-muted)' }}
        >
          Scroll to explore
        </span>
        <div
          className="h-px flex-1"
          style={{ background: 'var(--iv-border)' }}
        />
      </div>
    </section>
  )
}