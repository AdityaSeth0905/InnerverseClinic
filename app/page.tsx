import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { GalleryGrid } from '@/components/gallery-grid'
import { services } from '@/lib/clinic-data'
import Link from 'next/link'

export const metadata = {
  title: 'Home | Innerverse Homoeoclinic',
  description: 'Welcome to Innerverse Homoeoclinic - Expert homeopathy treatment in Delhi',
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-rose-50 to-orange-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <GalleryGrid />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our experienced doctors to discuss your health concerns
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-rose-500 text-white rounded-lg font-semibold hover:bg-rose-600 transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
