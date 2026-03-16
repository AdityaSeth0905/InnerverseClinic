import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { QueryForm } from '@/components/query-form'
import { clinicInfo } from '@/lib/clinic-data'

export const metadata = {
  title: 'Contact | Innerverse Homoeoclinic',
  description: 'Get in touch with Innerverse Homoeoclinic — book an appointment or send a query to our team in Lajpat Nagar, New Delhi.',
}

export default function Contact() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-clinic-dark relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label text-clinic-gold/70 mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-5 max-w-2xl leading-tight">
            We would be glad to hear from you
          </h1>
          <span className="divider-gold block" />
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left — contact details */}
            <div className="lg:col-span-4">
              <p className="section-label mb-5">Contact Details</p>
              <h2 className="font-serif text-3xl text-clinic-dark mb-6 leading-tight">
                Reach us directly
              </h2>
              <span className="divider-gold block mb-8" />

              <div className="space-y-8 text-sm font-light">
                {/* Address */}
                <div>
                  <p className="text-xs tracking-widest uppercase text-clinic-text-muted/50 mb-2">Address</p>
                  <p className="text-clinic-text-muted leading-relaxed">{clinicInfo.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(clinicInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-clinic-green border-b border-clinic-green/30 pb-0.5 hover:border-clinic-green transition-colors"
                  >
                    Get directions →
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-xs tracking-widest uppercase text-clinic-text-muted/50 mb-2">Phone</p>
                  <div className="space-y-1">
                    {clinicInfo.phone.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="block text-clinic-green hover:text-clinic-gold transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <p className="text-xs tracking-widest uppercase text-clinic-text-muted/50 mb-2">Email</p>
                  <a
                    href={`mailto:${clinicInfo.email}`}
                    className="text-clinic-green hover:text-clinic-gold transition-colors"
                  >
                    {clinicInfo.email}
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <p className="text-xs tracking-widest uppercase text-clinic-text-muted/50 mb-3">Clinic Hours</p>
                  <div className="space-y-2 text-clinic-text-muted">
                    <div className="flex justify-between gap-4">
                      <span>Monday – Friday</span>
                      <span className="text-clinic-dark text-right text-xs">{clinicInfo.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Saturday</span>
                      <span className="text-clinic-dark">{clinicInfo.hours.saturday}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Sunday</span>
                      <span className="text-clinic-dark">{clinicInfo.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick tips */}
              <div className="mt-10 pt-8 border-t border-clinic-border/40">
                <p className="text-xs tracking-widest uppercase text-clinic-text-muted/50 mb-4">Before You Visit</p>
                <ul className="space-y-2 text-sm text-clinic-text-muted font-light">
                  <li className="flex gap-2">
                    <span className="text-clinic-gold mt-0.5">—</span>
                    Bring any previous medical reports or prescriptions
                  </li>
                  <li className="flex gap-2">
                    <span className="text-clinic-gold mt-0.5">—</span>
                    First consultations typically take 45–60 minutes
                  </li>
                  <li className="flex gap-2">
                    <span className="text-clinic-gold mt-0.5">—</span>
                    We recommend calling ahead to confirm availability
                  </li>
                  <li className="flex gap-2">
                    <span className="text-clinic-gold mt-0.5">—</span>
                    All consultations are strictly confidential
                  </li>
                </ul>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-8">
              <p className="section-label mb-5">Send a Message</p>
              <h2 className="font-serif text-3xl text-clinic-dark mb-6 leading-tight">
                Write to us
              </h2>
              <span className="divider-gold block mb-10" />
              <QueryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-clinic-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <p className="section-label mb-4">Find Us</p>
          <h2 className="font-serif text-3xl text-clinic-dark mb-6">Visit our clinic</h2>
        </div>
        <div className="w-full h-80 grayscale opacity-80">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.3894928637644!2d77.23428931508348!3d28.56722498244413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b9bf4b91df%3A0x41543f95bb2c0c88!2sDayanand%20Colony%2C%20Lajpat%20Nagar%204%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin`}
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Innerverse Homoeoclinic Location"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}