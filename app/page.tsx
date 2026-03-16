import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { GalleryGrid } from '@/components/gallery-grid'
import { DoctorsPreview } from '@/components/doctors-preview'
import { WhyChooseUs } from '@/components/why-choose-us'
import Link from 'next/link'

export const metadata = {
  title: 'Innerverse Homoeoclinic | Holistic Homeopathy in Delhi',
  description: 'Welcome to Innerverse Homoeoclinic — Expert homeopathy treatment by Dr. Jaittry and Dr. Manisha in Lajpat Nagar, Delhi.',
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <DoctorsPreview />
      <TestimonialCarousel />
      <GalleryGrid />

      {/* CTA Section */}
      <section className="py-28 bg-clinic-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-clinic-gold blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-clinic-gold/80 text-sm tracking-[0.25em] uppercase font-medium mb-4">Begin Your Journey</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Your Health Deserves<br />Thoughtful Care
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Connect with our experienced doctors to discuss your health concerns in a calm, compassionate environment.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-clinic-gold text-clinic-dark font-semibold tracking-wide hover:bg-clinic-gold/90 transition-all duration-300 rounded-sm text-sm"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}