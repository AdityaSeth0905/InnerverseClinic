'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeline = gsap.timeline()

    // Background animation
    gsap.to(bgRef.current, {
      backgroundPosition: '100% 100%',
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    timeline
      .from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
      })
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .from(
        ctaRef.current,
        {
          opacity: 0,
          y: 25,
          duration: 0.7,
          ease: 'power3.out',
        },
        '-=0.5'
      )
  }, [])

  return (
    <section 
      ref={bgRef}
      className="relative py-24 md:py-32 bg-gradient-to-br from-rose-50 via-white to-orange-50 overflow-hidden"
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-8 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance leading-tight"
        >
          Welcome to Innerverse Homoeoclinic
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto text-balance leading-relaxed"
        >
          Expert homeopathic treatment for holistic wellness and lasting health
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              Book Consultation
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="border-2 border-rose-500 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg rounded-lg font-semibold">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
