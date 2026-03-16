'use client'

import Image from 'next/image'
import { useState } from 'react'

interface DoctorImageProps {
  src: string
  alt: string
  placeholder: string
}

export function DoctorImage({ src, alt, placeholder }: DoctorImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, var(--iv-card-2) 0%, var(--iv-surface) 100%)',
        }}
      >
        <span
          style={{
            fontFamily: 'Gilda Display, serif',
            fontSize: '3.5rem',
            color: 'var(--iv-copper)',
            opacity: 0.5,
          }}
        >
          {placeholder}
        </span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top"
      onError={() => setError(true)}
    />
  )
}