import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DoctorCard } from '@/components/doctor-card'
import { doctors } from '@/lib/clinic-data'

export const metadata = {
  title: 'Our Doctors | Innerverse Homoeoclinic',
  description: 'Meet our experienced homeopathic doctors - Dr. Jaittry and Dr. Manisha',
}

export default function Doctors() {
  return (
    <main>
      <Navbar />

      <section className="py-16 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">
            Our Doctors
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Meet our team of experienced and qualified homeopathic doctors dedicated to your wellness
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              With combined experience of over 20 years in homeopathic medicine, our doctors have successfully treated thousands of patients. They are committed to continuous learning and staying updated with the latest developments in homeopathy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each patient receives a personalized treatment plan tailored to their unique health condition and requirements. We believe in taking time to understand your concerns and providing compassionate care.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
