'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeline = gsap.timeline()

    timeline
      .from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      })
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.4'
      )
      .from(
        ctaRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.4'
      )
  }, [])

  return (
    <section className="relative py-20 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance"
        >
          Welcome to Innerverse Homoeoclinic
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto text-balance"
        >
          Expert homeopathic treatment for holistic wellness and lasting health
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-3 bg-rose-500 text-white rounded-lg font-semibold hover:bg-rose-600 transition-colors"
          >
            Book Consultation
          </a>
          <a
            href="/about"
            className="px-8 py-3 border-2 border-rose-500 text-rose-500 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
