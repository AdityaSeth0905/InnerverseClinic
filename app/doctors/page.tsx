import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DoctorCard } from '@/components/doctor-card'
import { doctors } from '@/lib/clinic-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'Our Doctors | Innerverse Homoeoclinic',
  description: 'Meet our experienced homeopathic doctors - Dr. Jaittry and Dr. Manisha',
}

export default function Doctors() {
  return (
    <main>
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">
              Our Doctors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Meet our team of experienced and qualified homeopathic doctors dedicated to your wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          <Card className="bg-gradient-to-r from-rose-50 to-orange-50 border-rose-200">
            <CardHeader>
              <CardTitle>Our Expertise & Approach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                With combined experience of over 20 years in homeopathic medicine, our doctors have successfully treated thousands of patients. They are committed to continuous learning and staying updated with the latest developments in homeopathy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each patient receives a personalized treatment plan tailored to their unique health condition and requirements. We believe in taking time to understand your concerns and providing compassionate, evidence-based care.
              </p>
              <div className="pt-4 border-t border-rose-200">
                <p className="text-sm text-gray-600 font-semibold">Our Promise</p>
                <p className="text-gray-700 text-sm mt-2">
                  To provide the highest quality homeopathic treatment with a focus on patient wellness and long-term health improvements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
