import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { clinicInfo } from '@/lib/clinic-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'About | Innerverse Homoeoclinic',
  description: 'Learn about Innerverse Homoeoclinic, our mission, and our approach to holistic healthcare',
}

export default function About() {
  return (
    <main>
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">
              About Innerverse Homoeoclinic
            </h1>
            <p className="text-xl text-gray-600">
              Dedicated to holistic wellness and personalized homeopathic care
            </p>
          </div>

          <Card className="mb-12 border-rose-200">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                {clinicInfo.about}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We believe in treating the patient as a whole, understanding their physical, emotional, and mental health to provide comprehensive care.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-rose-50 to-orange-50 border-rose-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Why Choose Us</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-rose-500 font-bold text-lg">✓</span>
                    <span>Experienced and qualified doctors</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-rose-500 font-bold text-lg">✓</span>
                    <span>Personalized treatment plans</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-rose-500 font-bold text-lg">✓</span>
                    <span>Safe and natural remedies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-rose-500 font-bold text-lg">✓</span>
                    <span>Comfortable clinic environment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-rose-500 font-bold text-lg">✓</span>
                    <span>Holistic wellness approach</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-rose-50 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Our Core Values</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">Compassion</p>
                  <p className="text-sm text-gray-600">We care deeply about each patient's well-being</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Excellence</p>
                  <p className="text-sm text-gray-600">We maintain highest standards in treatment</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Integrity</p>
                  <p className="text-sm text-gray-600">Honest and transparent communication</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Holism</p>
                  <p className="text-sm text-gray-600">Treating mind, body, and spirit together</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-rose-200">
            <CardHeader>
              <CardTitle>Clinic Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Address</p>
                    <p className="text-gray-600 leading-relaxed">
                      {clinicInfo.address}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Hours</p>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div>Weekdays: {clinicInfo.hours.weekdays}</div>
                      <div>Saturday: {clinicInfo.hours.saturday}</div>
                      <div>Sunday: {clinicInfo.hours.sunday}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Phone Numbers</p>
                    <div className="space-y-2">
                      {clinicInfo.phone.map((phone, idx) => (
                        <a 
                          key={idx}
                          href={`tel:${phone}`}
                          className="text-rose-500 hover:text-rose-600 font-medium block"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Email</p>
                    <a 
                      href={`mailto:${clinicInfo.email}`}
                      className="text-rose-500 hover:text-rose-600 font-medium"
                    >
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
