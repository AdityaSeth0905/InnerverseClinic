'use client'

import { useState } from 'react'
import { testimonials } from '@/lib/clinic-data'

export function TestimonialCarousel() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section
      className="py-28 overflow-hidden"
      style={{ background: 'var(--iv-bg)' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: label + selector */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div>
              <p className="label-tag mb-5">Patient Stories</p>
              <h2
                style={{
                  fontFamily: 'Gilda Display, serif',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: 'var(--iv-text)',
                  lineHeight: 1.2,
                }}
              >
                What Our
                <br />
                Patients Say
              </h2>
            </div>

            {/* Patient list */}
            <div className="flex flex-col gap-1">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className="text-left flex items-center gap-4 py-4 transition-all duration-300"
                  style={{
                    borderTop: '1px solid var(--iv-border)',
                    borderBottom: i === testimonials.length - 1 ? '1px solid var(--iv-border)' : 'none',
                  }}
                >
                  {/* Active indicator */}
                  <span
                    style={{
                      width: '1px',
                      height: i === active ? '32px' : '0px',
                      background: 'var(--iv-copper)',
                      transition: 'height 0.3s ease',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: i === active ? 600 : 300,
                        color: i === active ? 'var(--iv-text)' : 'var(--iv-text-muted)',
                        letterSpacing: '0.05em',
                        transition: 'color 0.3s',
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontSize: '0.65rem',
                        color: 'var(--iv-text-muted)',
                        letterSpacing: '0.1em',
                        marginTop: '1px',
                      }}
                    >
                      {t.location}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: active testimonial */}
          <div
            className="lg:col-span-8 flex flex-col gap-8"
            style={{
              padding: '3rem',
              background: 'var(--iv-card)',
              border: '1px solid var(--iv-border)',
              position: 'relative',
            }}
          >
            {/* Decorative quote mark */}
            <span
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '2rem',
                fontFamily: 'Cormorant, serif',
                fontSize: '8rem',
                color: 'var(--iv-copper)',
                opacity: 0.06,
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              &ldquo;
            </span>

            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    color: 'var(--iv-gold)',
                    fontSize: '0.75rem',
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <blockquote
              key={current.id}
              style={{
                fontFamily: 'Cormorant, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
                lineHeight: 1.7,
                color: 'var(--iv-text)',
                fontWeight: 300,
              }}
            >
              &ldquo;{current.content}&rdquo;
            </blockquote>

            {/* Author */}
            <div
              className="flex items-center gap-4 pt-4"
              style={{ borderTop: '1px solid var(--iv-border)' }}
            >
              {/* Initials avatar */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--iv-copper)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  opacity: 0.7,
                }}
              >
                <span
                  style={{
                    fontFamily: 'Gilda Display, serif',
                    fontSize: '0.9rem',
                    color: 'var(--iv-bg)',
                  }}
                >
                  {current.name.charAt(0)}
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--iv-text)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {current.name}
                </p>
                <p
                  style={{
                    fontSize: '0.65rem',
                    color: 'var(--iv-text-muted)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {current.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}