import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { GalleryGrid } from '@/components/gallery-grid'

export const metadata = {
  title: 'Gallery | Innerverse Homoeoclinic',
  description: 'Explore our clinic facilities and environment',
}

export default function Gallery() {
  return (
    <main>
      <Navbar />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">
            Clinic Gallery
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Explore our state-of-the-art clinic facilities and comfortable environment
          </p>
        </div>
      </section>

      <GalleryGrid />

      <Footer />
    </main>
  )
}
