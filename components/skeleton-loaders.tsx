'use client'

import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonCard() {
  return (
    <div className="space-y-4 p-4">
      <Skeleton className="h-64 w-full rounded-lg" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}

export function SkeletonDoctorCard() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-80 w-full rounded-lg" />
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-4 w-24" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  )
}

export function SkeletonTestimonial() {
  return (
    <div className="space-y-4 p-6 border rounded-lg">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-4 w-4 rounded-full" />
        ))}
      </div>
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-4 w-32" />
    </div>
  )
}
