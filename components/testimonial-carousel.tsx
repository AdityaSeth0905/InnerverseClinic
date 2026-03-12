'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { testimonials } from '@/lib/clinic-data'

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.to(contentRef.current, {
            opacity: 1,
            duration: 0.3,
          })
        },
      })
    }
  }, [current])

  const testimonial = testimonials[current]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Patients Say
        </h2>

        <div
          ref={contentRef}
          className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-lg p-8 md:p-12 shadow-md"
        >
          <div className="flex gap-1 mb-6">
            {Array(testimonial.rating).fill(null).map((_, i) => (
              <span key={i} className="text-rose-500 text-xl">★</span>
            ))}
          </div>
          <p className="text-xl text-gray-700 mb-6 italic text-balance">
            "{testimonial.content}"
          </p>
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-gray-600 text-sm">{testimonial.location}</p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-colors ${
                idx === current ? 'bg-rose-500 w-8' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
