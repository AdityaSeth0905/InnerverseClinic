'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Doctors', href: '/doctors' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-transparent/2 backdrop-blur-md shadow-sm border-b border-clinic-border/60 top-[-10]'
          : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-clinic-green flex items-center justify-center shrink-0">
              <Image
                src="/logo.jpg"
                alt="Innerverse Homoeoclinic"
                width={40}
                height={40}
                className="object-cover"
                onError={() => {}}
              />
            </div>
            <div className="block font-serif leading-tight text-gray-600 text-xl ">
                Innerverse Homoeoclinic
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 relative group ${
                  pathname === link.href
                    ? 'text-clinic-green font-normal'
                    : 'text-clinic-text-muted hover:text-clinic-green font-light'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-clinic-gold transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-6 py-2.5 bg-clinic-green text-clinic-cream text-sm tracking-wide hover:bg-clinic-green-light transition-all duration-300 rounded-sm font-light"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px bg-clinic-dark transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.25 w-6' : 'w-6'
              }`}
            />
            <span
              className={`block h-px bg-clinic-dark transition-all duration-300 ${
                isOpen ? 'opacity-0 w-4' : 'w-4'
              }`}
            />
            <span
              className={`block h-px bg-clinic-dark transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.25 w-6' : 'w-6'
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-clinic-border/40 pt-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm tracking-wide transition-colors ${
                  pathname === link.href
                    ? 'text-clinic-green'
                    : 'text-clinic-text-muted hover:text-clinic-green'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block mt-3 px-6 py-2.5 bg-clinic-green text-clinic-cream text-sm tracking-wide rounded-sm"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}