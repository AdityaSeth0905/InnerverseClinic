import { doctors } from '@/lib/clinic-data'
import { DoctorImage } from '@/components/doctor-image'
import Link from 'next/link'

export function DoctorsPreview() {
  return (
    <section className="py-28" style={{ background: 'var(--iv-bg)' }}>
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="label-tag mb-5">The Physicians</p>
            <h2
              style={{
                fontFamily: 'Gilda Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                color: 'var(--iv-text)',
                lineHeight: 1.12,
              }}
            >
              Meet the Founders of
              <br />
              <span style={{ fontFamily: 'Cormorant, serif', fontStyle: 'italic', color: 'var(--iv-copper)' }}>
                Innerverse
              </span>
            </h2>
          </div>
          <Link
            href="/doctors"
            className="btn-ghost"
            style={{ whiteSpace: 'nowrap', alignSelf: 'flex-end' }}
          >
            View Full Profiles
          </Link>
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group flex flex-col"
              style={{ border: '1px solid var(--iv-border)' }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden img-cover-zoom">
                <DoctorImage
                  src={doctor.image}
                  alt={doctor.name}
                  placeholder={doctor.imagePlaceholder}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, var(--iv-bg) 0%, transparent 50%)',
                    opacity: 0.7,
                  }}
                />
              </div>

              {/* Info */}
              <div
                className="flex flex-col gap-4 p-8"
                style={{ background: 'var(--iv-card)' }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'Gilda Display, serif',
                      fontSize: '1.5rem',
                      color: 'var(--iv-text)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {doctor.name}
                  </h3>
                  <p className="label-tag" style={{ color: 'var(--iv-teal)' }}>
                    {doctor.title}
                  </p>
                </div>

                <div className="divider-copper" style={{ opacity: 0.4 }} />

                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'var(--iv-text-2)',
                    lineHeight: 1.85,
                  }}
                >
                  {doctor.bio.substring(0, 160)}…
                </p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {doctor.qualifications.map((q) => (
                    <span
                      key={q}
                      style={{
                        fontSize: '0.62rem',
                        letterSpacing: '0.1em',
                        color: 'var(--iv-text-muted)',
                        padding: '0.3rem 0.75rem',
                        border: '1px solid var(--iv-border)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}