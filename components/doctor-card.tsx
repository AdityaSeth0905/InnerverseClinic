'use client'

import Image from 'next/image'
import { doctors } from '@/lib/clinic-data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function DoctorCard({ doctor }: { doctor: typeof doctors[0] }) {
  return (
    <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="relative h-80 w-full overflow-hidden bg-gray-200">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader>
        <CardTitle className="text-2xl">{doctor.name}</CardTitle>
        <CardDescription className="text-rose-500 font-semibold">
          {doctor.title}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-gray-900 mb-3">Qualifications</p>
          <div className="flex flex-wrap gap-2">
            {doctor.qualifications.map((qual, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {qual}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {doctor.bio}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
