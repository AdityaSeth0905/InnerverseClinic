'use client'

import Image from 'next/image'
import { doctors } from '@/lib/clinic-data'

export function DoctorCard({ doctor }: { doctor: typeof doctors[0] }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-64 w-full">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
        <p className="text-rose-500 font-semibold text-sm mb-4">{doctor.title}</p>
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2 font-semibold">Qualifications:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            {doctor.qualifications.map((qual, idx) => (
              <li key={idx}>{qual}</li>
            ))}
          </ul>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{doctor.bio}</p>
      </div>
    </div>
  )
}
