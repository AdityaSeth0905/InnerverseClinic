import { doctors } from '@/lib/clinic-data'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DoctorImage } from '@/components/doctor-image'
import Link from 'next/link'

export const metadata = {
  title: 'Our Doctors | Innerverse Homoeoclinic',
  description:
    'Meet Dr. Jaittry and Dr. Manisha — the co-founders of Innerverse Homoeoclinic, bringing expert homeopathic care to Lajpat Nagar, New Delhi.',
}

export default function DoctorsPage() {
  return (
    <main>
      <Navbar />

      {/* Page header */}
      <section
        className="pt-40 pb-20 px-8 lg:px-20 max-w-screen-xl mx-auto"
      >
        {/* <p className="label-tag mb-5">Our Physicians</p> */}
        <h1
          style={{
            fontFamily: 'Gilda Display, serif',
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            color: 'var(--iv-text)',
            lineHeight: 1.1,
            maxWidth: '640px',
          }}
        >
          The Doctors Behind
          <br />
          <span style={{ fontFamily: 'Cormorant, serif', fontStyle: 'italic', color: 'var(--iv-copper)' }}>
            Innerverse
          </span>
        </h1>
        <p
          style={{
            marginTop: '1.5rem',
            maxWidth: '480px',
            color: 'var(--iv-text-2)',
            lineHeight: 1.85,
            fontSize: '0.9rem',
          }}
        >
          Innerverse was founded by two dedicated homeopathic physicians who
          share a common belief: that lasting health requires understanding the
          whole person.
        </p>
      </section>

      {/* Divider */}
      <div className="px-8 lg:px-20 max-w-screen-xl mx-auto">
        <div className="divider-line" />
      </div>

      {/* Doctors — alternating layout */}
      <section className="max-w-screen-xl mx-auto px-8 lg:px-20 py-24 flex flex-col gap-32">
        {doctors.map((doctor, index) => (
          <div
            key={doctor.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
          >
            {/* Image */}
            <div
              className="relative aspect-[4/5] overflow-hidden"
              style={{ border: '1px solid var(--iv-border)' }}
            >
              <DoctorImage
                src={doctor.image}
                alt={doctor.name}
                placeholder={doctor.imagePlaceholder}
              />
              {/* Accent corner */}
              <div
                className="absolute bottom-0 left-0 w-24 h-24"
                style={{
                  background:
                    'linear-gradient(135deg, var(--iv-copper) 0%, transparent 60%)',
                  opacity: 0.15,
                }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="label-tag mb-4">{doctor.title}</p>
                <h2
                  style={{
                    fontFamily: 'Gilda Display, serif',
                    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                    color: 'var(--iv-text)',
                    lineHeight: 1.1,
                  }}
                >
                  {doctor.name}
                </h2>
              </div>

              <div className="divider-copper" />

              <p
                style={{
                  color: 'var(--iv-text-2)',
                  lineHeight: 1.9,
                  fontSize: '0.9rem',
                }}
              >
                {doctor.bio}
              </p>

              {/* Qualifications */}
              <div
                className="flex flex-col gap-2 mt-2"
                style={{
                  padding: '1.5rem',
                  background: 'var(--iv-card)',
                  border: '1px solid var(--iv-border)',
                }}
              >
                <p
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--iv-text-muted)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Qualifications
                </p>
                {doctor.qualifications.map((q) => (
                  <div
                    key={q}
                    className="flex items-center gap-3"
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'var(--iv-copper)',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--iv-text-2)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {q}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Combined expertise */}
      <section
        className="py-24"
        style={{ background: 'var(--iv-bg-2)' }}
      >
        <div className="max-w-screen-xl mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label-tag mb-5">Combined Expertise</p>
              <h2
                style={{
                  fontFamily: 'Gilda Display, serif',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: 'var(--iv-text)',
                  lineHeight: 1.2,
                }}
              >
                Two Physicians,
                <br />
                One Philosophy
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              {[
                {
                  label: 'Classical Homeopathy',
                  desc: 'Rooted in the Hahnemannian tradition — detailed case-taking, constitutional analysis, and single remedy prescribing.',
                },
                {
                  label: 'Chronic Disease Management',
                  desc: 'Extensive experience managing long-standing conditions including allergies, hormonal imbalances, skin disorders, and autoimmune concerns.',
                },
                {
                  label: 'Paediatric & Family Care',
                  desc: 'Trusted by families across South Delhi for safe, gentle, and effective treatment across all age groups.',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-5"
                >
                  <div
                    style={{
                      width: '1px',
                      background: 'var(--iv-border-accent)',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: 'Gilda Display, serif',
                        fontSize: '1rem',
                        color: 'var(--iv-text)',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--iv-text-2)',
                        lineHeight: 1.8,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 lg:px-20 max-w-screen-xl mx-auto text-center">
        <p className="label-tag mb-5">Begin Your Journey</p>
        <h3
          style={{
            fontFamily: 'Gilda Display, serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: 'var(--iv-text)',
            marginBottom: '1.5rem',
          }}
        >
          Ready to consult our physicians?
        </h3>
        <Link href="/contact" className="btn-primary">
          Book a Consultation
        </Link>
      </section>

      <Footer />
    </main>
  )
}