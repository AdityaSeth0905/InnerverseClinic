import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { QueryForm } from '@/components/query-form'
import { GoogleMap } from '@/components/google-map'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { clinicInfo } from '@/lib/clinic-data'

export const metadata = {
  title: 'Contact | Innerverse Homoeoclinic',
  description: 'Get in touch with us for consultations, queries, or appointments',
}

export default function Contact() {
  return (
    <main>
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-rose-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions or want to book an appointment? We're here to help
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Address</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 leading-relaxed">
                {clinicInfo.address}
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Phone Numbers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {clinicInfo.phone.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="text-rose-500 hover:text-rose-600 font-semibold block"
                  >
                    {phone}
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="text-rose-500 hover:text-rose-600 font-semibold block mb-6"
                >
                  {clinicInfo.email}
                </a>
                <div className="space-y-2 border-t pt-4">
                  <h4 className="font-semibold text-gray-900 text-sm">Hours</h4>
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">Weekdays:</span> {clinicInfo.hours.weekdays}
                  </p>
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">Saturday:</span> {clinicInfo.hours.saturday}
                  </p>
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">Sunday:</span> {clinicInfo.hours.sunday}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Send Us a Query</CardTitle>
            </CardHeader>
            <CardContent>
              <QueryForm />
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us On The Map</h2>
            <GoogleMap />
          </div>

          <Card className="bg-gradient-to-r from-rose-50 to-orange-50 border-rose-200">
            <CardHeader>
              <CardTitle className="text-rose-900">Visit Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Call ahead to book an appointment during rush hours</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Please bring any previous medical reports</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>First consultation takes approximately 45-60 minutes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>We maintain complete privacy and confidentiality</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
