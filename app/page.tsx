import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { GalleryGrid } from '@/components/gallery-grid'
import { services } from '@/lib/clinic-data'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Home | Innerverse Homoeoclinic',
  description: 'Welcome to Innerverse Homoeoclinic - Expert homeopathy treatment in Delhi',
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive homeopathic care tailored to your wellness needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-lg transition-all duration-300 hover:border-rose-200"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <GalleryGrid />

      <section className="py-20 bg-gradient-to-r from-rose-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our experienced doctors to discuss your health concerns and discover personalized homeopathic solutions
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-6 text-lg rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
