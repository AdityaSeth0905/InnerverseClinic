'use client'

import Image from 'next/image'
import Link from 'next/link'
import { galleryImages } from '@/lib/clinic-data'

export function GalleryGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <p className="section-label mb-4">Our Space</p>
            <h2 className="font-serif text-4xl md:text-5xl text-clinic-dark mb-5">
              A place of calm &amp; healing
            </h2>
            <span className="divider-gold block" />
          </div>
          <Link
            href="/gallery"
            className="text-sm text-clinic-green tracking-wide border-b border-clinic-green pb-0.5 hover:text-clinic-gold hover:border-clinic-gold transition-colors duration-300 self-start md:self-auto whitespace-nowrap"
          >
            View full gallery →
          </Link>
        </div>

        {/* Gallery grid — asymmetric layout */}
        <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[480px] md:h-[560px]">
          {/* Large featured image */}
          <div className="col-span-12 md:col-span-7 row-span-2 img-zoom relative bg-clinic-warm overflow-hidden rounded-sm">
            <Image
              src={galleryImages[0]?.src || '/gallery/clinic-1.jpg'}
              alt={galleryImages[0]?.alt || 'Clinic'}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clinic-dark/20 to-transparent" />
            {/* Fallback */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-px bg-clinic-gold/40 mx-auto mb-3" />
                <p className="text-clinic-text-muted/40 text-xs tracking-widest uppercase">Reception</p>
              </div>
            </div>
          </div>

          {/* Top-right images */}
          <div className="col-span-6 md:col-span-5 row-span-1 img-zoom relative bg-clinic-warm overflow-hidden rounded-sm">
            <Image
              src={galleryImages[1]?.src || '/gallery/clinic-2.jpg'}
              alt={galleryImages[1]?.alt || 'Clinic'}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-clinic-text-muted/40 text-xs tracking-widest uppercase">Consultation</p>
              </div>
            </div>
          </div>

          {/* Bottom-right images split */}
          <div className="col-span-3 md:col-span-2 row-span-1 img-zoom relative bg-clinic-warm overflow-hidden rounded-sm">
            <Image
              src={galleryImages[2]?.src || '/gallery/clinic-3.jpg'}
              alt={galleryImages[2]?.alt || 'Clinic'}
              fill
              className="object-cover"
            />
          </div>
          <div className="col-span-3 md:col-span-3 row-span-1 img-zoom relative bg-clinic-warm overflow-hidden rounded-sm">
            <Image
              src={galleryImages[3]?.src || '/gallery/clinic-4.jpg'}
              alt={galleryImages[3]?.alt || 'Clinic'}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}