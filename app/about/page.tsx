import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { clinicInfo } from '@/lib/clinic-data'
import Link from 'next/link'

export const metadata = {
  title: 'About | Innerverse Homoeoclinic',
  description: 'Learn about Innerverse Homoeoclinic — our founding story, mission, and approach to personalised homeopathic care in New Delhi.',
}

export default function About() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-clinic-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label text-clinic-gold/70 mb-4">About Us</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 max-w-2xl leading-tight">
            A practice built on intention and care
          </h1>
          <span className="divider-gold block" />
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-5">Our Story</p>
              <h2 className="font-serif text-4xl text-clinic-dark mb-6 leading-tight">
                Founded by two physicians with a shared purpose
              </h2>
              <span className="divider-gold block mb-8" />
              <div className="space-y-5 text-clinic-text-muted font-light text-base leading-relaxed">
                <p>
                  Innerverse Homoeoclinic was born from a shared conviction: that healthcare should be deeply personal, unhurried, and rooted in the wisdom of the whole person. Dr. Jaittry and Dr. Manisha — both graduates of the National Homeopathic Medical College under Delhi University — came together to build a practice that reflects their values.
                </p>
                <p>
                  The name Innerverse speaks to the inner world of each patient — the unique universe of physical, emotional, and mental health that homeopathy seeks to understand and restore to balance. Our founders believe that when this inner world is truly seen, the path to healing becomes clear.
                </p>
                <p>
                  {clinicInfo.about}
                </p>
              </div>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-px bg-clinic-border/30">
              {[
                { title: 'Compassion', body: 'We listen deeply, without judgement, to every patient who walks through our door.' },
                { title: 'Excellence', body: 'We hold ourselves to the highest standards of clinical practice and continuous learning.' },
                { title: 'Integrity', body: 'Honest, transparent communication guides every interaction with our patients.' },
                { title: 'Holism', body: 'We treat the whole person — mind, body, and spirit — not merely a set of symptoms.' },
              ].map((value) => (
                <div key={value.title} className="bg-white p-8 hover:bg-clinic-warm transition-colors duration-300">
                  <h3 className="font-serif text-xl text-clinic-dark mb-3">{value.title}</h3>
                  <p className="text-sm text-clinic-text-muted font-light leading-relaxed">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinic info */}
      <section className="py-24 bg-clinic-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-clinic-border/40">
            {/* Address */}
            <div className="p-10 border-r border-clinic-border/40">
              <p className="section-label mb-5">Location</p>
              <p className="text-clinic-text-muted font-light text-sm leading-relaxed mb-4">
                {clinicInfo.address}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(clinicInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-clinic-green border-b border-clinic-green/30 pb-0.5 hover:border-clinic-green transition-colors"
              >
                Get directions →
              </a>
            </div>

            {/* Contact */}
            <div className="p-10 border-r border-clinic-border/40">
              <p className="section-label mb-5">Contact</p>
              <div className="space-y-3">
                {clinicInfo.phone.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="block text-clinic-green font-light text-sm hover:text-clinic-gold transition-colors"
                  >
                    {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="block text-clinic-green font-light text-sm hover:text-clinic-gold transition-colors"
                >
                  {clinicInfo.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="p-10">
              <p className="section-label mb-5">Clinic Hours</p>
              <div className="space-y-3 text-sm font-light">
                <div className="flex justify-between gap-4">
                  <span className="text-clinic-text-muted">Monday – Friday</span>
                  <span className="text-clinic-dark text-right">{clinicInfo.hours.weekdays}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-clinic-text-muted">Saturday</span>
                  <span className="text-clinic-dark">{clinicInfo.hours.saturday}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-clinic-text-muted">Sunday</span>
                  <span className="text-clinic-dark">{clinicInfo.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl text-clinic-dark mb-2">Ready to begin?</h2>
            <p className="text-clinic-text-muted font-light">Reach out to schedule your first consultation.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-clinic-green text-clinic-cream text-sm tracking-wide hover:bg-clinic-green-light transition-all duration-300 rounded-sm whitespace-nowrap group"
          >
            Get in Touch
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}