import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { clinicInfo } from '@/lib/clinic-data'

export const metadata = {
  title: 'About | Innerverse Homoeoclinic',
  description: 'Learn about Innerverse Homoeoclinic, our mission, and our approach to holistic healthcare',
}

export default function About() {
  return (
    <main>
      <Navbar />

      <section className="py-16 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-balance">
            About Innerverse Homoeoclinic
          </h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              {clinicInfo.about}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe in treating the patient as a whole, understanding their physical, emotional, and mental health to provide comprehensive care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-rose-500 font-bold">✓</span>
                  <span>Experienced and qualified doctors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-500 font-bold">✓</span>
                  <span>Personalized treatment plans</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-500 font-bold">✓</span>
                  <span>Safe and natural remedies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-500 font-bold">✓</span>
                  <span>Comfortable clinic environment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-500 font-bold">✓</span>
                  <span>Holistic wellness approach</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <p className="font-semibold text-gray-900 mb-1">Compassion</p>
                  <p className="text-sm">We care deeply about each patient's well-being</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 mb-1">Excellence</p>
                  <p className="text-sm">We maintain highest standards in treatment</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 mb-1">Integrity</p>
                  <p className="text-sm">Honest and transparent communication</p>
                </li>
                <li>
                  <p className="font-semibold text-gray-900 mb-1">Holism</p>
                  <p className="text-sm">Treating mind, body, and spirit together</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Clinic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold text-gray-900">Address:</span><br />
                  {clinicInfo.address}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold text-gray-900">Hours:</span><br />
                  Weekdays: {clinicInfo.hours.weekdays}<br />
                  Saturday: {clinicInfo.hours.saturday}<br />
                  Sunday: {clinicInfo.hours.sunday}
                </p>
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold text-gray-900">Contact:</span><br />
                  {clinicInfo.phone.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone}`} className="text-rose-500 hover:text-rose-600 block">
                      {phone}
                    </a>
                  ))}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">Email:</span><br />
                  <a href={`mailto:${clinicInfo.email}`} className="text-rose-500 hover:text-rose-600">
                    {clinicInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
