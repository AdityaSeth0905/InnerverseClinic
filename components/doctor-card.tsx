'use client'

import Image from 'next/image'
import { doctors } from '@/lib/clinic-data'

export function DoctorCard({ doctor }: { doctor: (typeof doctors)[0] }) {
  return (
    <div className="group bg-white border border-clinic-border/30 hover:border-clinic-green/20 transition-all duration-500">
      {/* Image */}
      <div className="relative h-72 bg-clinic-warm img-zoom overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover object-top"
          onError={() => {}}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-8xl text-clinic-green/10 font-light select-none">
            {doctor.imagePlaceholder}
          </span>
        </div>
        <div className="absolute inset-0 bg-clinic-green/0 group-hover:bg-clinic-green/5 transition-colors duration-500" />
      </div>

      {/* Info */}
      <div className="p-6">
        <p className="section-label text-clinic-gold mb-1">{doctor.title}</p>
        <h3 className="font-serif text-2xl text-clinic-dark mb-3">{doctor.name}</h3>
        <div className="space-y-0.5 mb-4">
          {doctor.qualifications.map((qual) => (
            <p key={qual} className="text-xs text-clinic-text-muted font-light">
              {qual}
            </p>
          ))}
        </div>
        <p className="text-sm text-clinic-text-muted font-light leading-relaxed line-clamp-3">
          {doctor.bio}
        </p>
      </div>
    </div>
  )
}