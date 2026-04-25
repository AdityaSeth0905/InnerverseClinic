'use client'

import Link from 'next/link'
import Image from 'next/image'
import { clinicInfo } from '@/lib/clinic-data'
import { motion } from "framer-motion";
import { ExternalLink, Globe } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Doctors', href: '/doctors' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Use', href: '/terms-of-use' },
  ]
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-clinic-dark text-white/70">
      {/* Map strip — clickable to open Google Maps */}
      <div className="relative w-full h-64 grayscale opacity-70 overflow-hidden hover:opacity-90 transition-opacity duration-300">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8065887898!2d77.3987928!3d28.573696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3ec705b945d%3A0xc1f2d4075ba8fd08!2sshop%205%2C%20Innerverse%20Homoeoclinic%20by%20Dr%20Manisha%20and%20Dr%20Jaittry%2C%20A17%2C%20Dayanand%20Colony%2C%20Lajpat%20Nagar%204%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin`}
          width="100%"
          height="256"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location Map"
        />
        {/* Transparent overlay to make the entire map clickable */}
        <a
          href="https://maps.app.goo.gl/bA6wm7B1AWu2UGKNA"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open clinic location in Google Maps"
          className="absolute inset-0 z-10 cursor-pointer"
        />
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div >
                <Image
                  src="/logo-main.png"
                  alt="Innerverse Homoeclinic"
                  width={100}
                  height={100}
                  className="object-cover"
                  onError={() => { }}
                />
              </div>
              <h1 className="text-white font-serif text-2xl leading-tight">
                Innerverse Homoeclinic
              </h1>

            </Link>
            <p className="text-sm leading-relaxed font-light mb-6 max-w-xs text-white/50">
              {clinicInfo.about}
            </p>

          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <p className="text-white/30 text-xs tracking-widest uppercase mb-5 font-light">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-5">
            <p className="text-white/30 text-xs tracking-widest uppercase mb-5 font-light">
              Contact
            </p>
            <address className="not-italic space-y-3 text-sm font-light">
              <p className="text-white/50 leading-relaxed">{clinicInfo.address}</p>
              <div className="space-y-1">
                {clinicInfo.phone.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="block text-white/50 hover:text-clinic-gold transition-colors duration-200"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${clinicInfo.email}`}
                className="block text-white/50 hover:text-clinic-gold transition-colors duration-200"
              >
                {clinicInfo.email}
              </a>
            </address>

            {/* Hours */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/30 text-xs tracking-widest uppercase mb-3 font-light">Hours</p>
              <div className="space-y-1 text-xs font-light text-blue-500 transition-colors">
                <p>Mon–Fri: {clinicInfo.hours.weekdays}</p>
                <p>Saturday: {clinicInfo.hours.saturday}</p>
                <p>Sunday: {clinicInfo.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="section-container py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/50 hover:text-accent transition-colors">
                © {currentYear} Innerverse Homoeoclinic. All rights reserved.
              </p>

              <motion.a
                href="https://www.xyronixlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 text-sm text-blue-500 transition-colors"
              >
                <Globe size={14} />
                <span>Powered by <span className="transition-colors text-accent">Xyronix Labs Private Limited.</span></span>
                <ExternalLink size={12} />
              </motion.a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}