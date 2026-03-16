"use client";
import { whyChooseUs } from '@/lib/clinic-data'

export function WhyChooseUs() {
  return (
    <section
      className="py-28"
      style={{ background: 'var(--iv-bg-2)' }}
    >
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20">
        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <p className="label-tag mb-5">Our Approach</p>
            <h2
              style={{
                fontFamily: 'Gilda Display, serif',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                color: 'var(--iv-text)',
                lineHeight: 1.12,
              }}
            >
              Why Patients Choose
              <br />
              <span
                style={{
                  fontFamily: 'Cormorant, serif',
                  fontStyle: 'italic',
                  color: 'var(--iv-copper)',
                }}
              >
                Innerverse
              </span>
            </h2>
          </div>
          <p
            style={{
              color: 'var(--iv-text-2)',
              fontSize: '0.9rem',
              lineHeight: 1.9,
              maxWidth: '420px',
              marginLeft: 'auto',
            }}
          >
            Homeopathic medicine, when practised with rigour and care, can
            address conditions that conventional approaches have struggled to
            resolve. Our clinic is built on that conviction.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'var(--iv-border)' }}
        >
          {whyChooseUs.map((item, index) => (
            <div
              key={item.title}
              className="group flex flex-col gap-5 p-10 transition-all duration-400"
              style={{
                background: 'var(--iv-bg-2)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'var(--iv-card)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'var(--iv-bg-2)'
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: 'Cormorant, serif',
                  fontStyle: 'italic',
                  fontSize: '3rem',
                  color: 'var(--iv-copper)',
                  opacity: 0.35,
                  lineHeight: 1,
                }}
              >
                0{index + 1}
              </span>

              <div className="divider-copper" style={{ opacity: 0.5 }} />

              <h3
                style={{
                  fontFamily: 'Gilda Display, serif',
                  fontSize: '1.1rem',
                  color: 'var(--iv-text)',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--iv-text-2)',
                  lineHeight: 1.85,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}