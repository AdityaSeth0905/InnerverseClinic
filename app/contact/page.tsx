import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { QueryForm } from '@/components/query-form'
import { clinicInfo } from '@/lib/clinic-data'

export const metadata = {
  title: 'Contact | Innerverse Homoeoclinic',
  description: 'Get in touch with us for consultations, queries, or appointments',
}

export default function Contact() {
  return (
    <main>
      <Navbar />

      <section className="py-16 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Have questions or want to book an appointment? We're here to help
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Address</h3>
              <p className="text-gray-600 leading-relaxed">
                {clinicInfo.address}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone</h3>
              <div className="space-y-2">
                {clinicInfo.phone.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="text-rose-500 hover:text-rose-600 block font-semibold"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
              <a
                href={`mailto:${clinicInfo.email}`}
                className="text-rose-500 hover:text-rose-600 font-semibold block"
              >
                {clinicInfo.email}
              </a>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                <p className="text-sm text-gray-600">
                  Weekdays: {clinicInfo.hours.weekdays}
                </p>
                <p className="text-sm text-gray-600">
                  Saturday: {clinicInfo.hours.saturday}
                </p>
                <p className="text-sm text-gray-600">
                  Sunday: {clinicInfo.hours.sunday}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Query</h2>
            <QueryForm />
          </div>

          <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Tips</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Call ahead to book an appointment during rush hours</li>
              <li>• Please bring any previous medical reports</li>
              <li>• First consultation takes approximately 45-60 minutes</li>
              <li>• We maintain complete privacy and confidentiality</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
