'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { testimonials } from '@/lib/clinic-data'
import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
            duration: 0.4,
          })
        },
      })
    }
  }, [current])

  const testimonial = testimonials[current]

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">
            Patient Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our satisfied patients
          </p>
        </div>

        <Card ref={contentRef} className="bg-gradient-to-br from-rose-50 to-orange-50 border-rose-200 shadow-lg">
          <div className="p-8 md:p-12">
            <div className="flex gap-1 mb-6">
              {Array(testimonial.rating)
                .fill(null)
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
            </div>
            <p className="text-lg md:text-xl text-gray-800 mb-8 italic text-balance leading-relaxed">
              "{testimonial.content}"
            </p>
            <div className="border-t border-rose-200 pt-6">
              <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.location}</p>
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="border-rose-200 hover:bg-rose-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex justify-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === current
                    ? 'bg-rose-500 w-10 h-2'
                    : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="border-rose-200 hover:bg-rose-50"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
