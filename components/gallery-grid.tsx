'use client'

import Image from 'next/image'
import { galleryImages } from '@/lib/clinic-data'
import { Card } from '@/components/ui/card'

export function GalleryGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">
            Clinic Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Experience our modern and welcoming clinic facilities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {galleryImages.map((image, idx) => (
            <Card 
              key={image.id}
              className={`group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                idx === 0 || idx === 1 ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-sm">{image.alt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
