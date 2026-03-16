import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { galleryImages } from '@/lib/clinic-data'
import Image from 'next/image'

export const metadata = {
  title: 'Gallery | Innerverse Homoeoclinic',
  description: 'Explore our clinic facilities — a calm, welcoming space designed for healing in Lajpat Nagar, New Delhi.',
}

const allImages = [
  ...galleryImages,
  { id: 7, src: '/gallery/clinic-7.jpg', alt: 'Waiting area details' },
  { id: 8, src: '/gallery/clinic-8.jpg', alt: 'Remedy shelf' },
  { id: 9, src: '/gallery/clinic-9.jpg', alt: 'Consultation notes' },
]

export default function Gallery() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-4">Our Space</p>
          <h1 className="font-serif text-5xl md:text-6xl text-clinic-dark mb-5 leading-tight max-w-2xl">
            A space designed for calm and healing
          </h1>
          <span className="divider-gold block mb-6" />
          <p className="text-clinic-text-muted font-light max-w-lg leading-relaxed">
            Our clinic in Dayanand Colony, Lajpat Nagar, is designed to feel less like a medical facility and more like a place of quiet restoration.
          </p>
        </div>
      </section>

      {/* Masonry-style gallery */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* First row — featured large + two small */}
          <div className="grid grid-cols-12 gap-3 mb-3">
            <div className="col-span-12 md:col-span-8 h-[400px] img-zoom relative bg-clinic-warm overflow-hidden rounded-sm">
              <Image src={allImages[0].src} alt={allImages[0].alt} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-clinic-text-muted/30 text-xs tracking-widest uppercase">Reception</p>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 h-[196px] img-zoom relative bg-clinic-warm overflow-hidden rounded-sm">
              <Image src={allImages[1].src} alt={allImages[1].alt} fill className="object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4 md:col-start-9 h-[196px] img-zoom relative bg-clinic-warm overflow-hidden rounded-sm mt-0 -mt-px hidden md:block"
              style={{ marginTop: '3px' }}>
              <Image src={allImages[2].src} alt={allImages[2].alt} fill className="object-cover" />
            </div>
          </div>

          {/* Second row — three equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {allImages.slice(3, 6).map((img) => (
              <div key={img.id} className="h-64 img-zoom relative bg-clinic-warm overflow-hidden rounded-sm">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Third row — two + one featured */}
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-6 md:col-span-4 h-56 img-zoom relative bg-clinic-warm overflow-hidden rounded-sm">
              <Image src={allImages[6]?.src || allImages[0].src} alt={allImages[6]?.alt || ''} fill className="object-cover" />
            </div>
            <div className="col-span-6 md:col-span-4 h-56 img-zoom relative bg-clinic-warm overflow-hidden rounded-sm">
              <Image src={allImages[7]?.src || allImages[1].src} alt={allImages[7]?.alt || ''} fill className="object-cover" />
            </div>
            <div className="col-span-12 md:col-span-4 h-56 img-zoom relative bg-clinic-warm overflow-hidden rounded-sm">
              <Image src={allImages[8]?.src || allImages[2].src} alt={allImages[8]?.alt || ''} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-clinic-warm border-y border-clinic-border/40">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="font-display text-6xl text-clinic-gold/30 leading-none block mb-2">❝</span>
          <p className="font-serif text-2xl md:text-3xl text-clinic-dark italic leading-relaxed">
            The environment of healing matters as much as the treatment itself.
          </p>
          <p className="text-clinic-text-muted text-sm font-light mt-4 tracking-wide">— Dr. Jaittry, Founder</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}