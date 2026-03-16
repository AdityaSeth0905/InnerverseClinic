'use client'

import Link from 'next/link'
import Image from 'next/image'
import { clinicInfo } from '@/lib/clinic-data'

export function Footer() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Doctors', href: '/doctors' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-clinic-dark text-white/70">
      {/* Map strip */}
      <div className="w-full h-64 grayscale opacity-70 overflow-hidden">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.3894928637644!2d77.23428931508348!3d28.56722498244413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b9bf4b91df%3A0x41543f95bb2c0c88!2sDayanand%20Colony%2C%20Lajpat%20Nagar%204%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin`}
          width="100%"
          height="256"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location Map"
        />
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-clinic-green-muted flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Innerverse Homoeoclinic"
                  width={40}
                  height={40}
                  className="object-cover"
                  onError={() => {}}
                />
              </div>
              <div className="block text-white font-serif text-2xl leading-tight">
                  Innerverse Homoeoclinic
                </div>
            </Link>
            <p className="text-sm leading-relaxed font-light mb-6 max-w-xs text-white/50">
              {clinicInfo.about}
            </p>
            <span className="w-8 h-px bg-clinic-gold/40 block" />
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
              <div className="space-y-1 text-xs font-light text-white/40">
                <p>Mon–Fri: {clinicInfo.hours.weekdays}</p>
                <p>Saturday: {clinicInfo.hours.saturday}</p>
                <p>Sunday: {clinicInfo.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-white/25 font-light">
            &copy; {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/25 font-light">
            Powered by{' '}
            <a
              href="https://www.xyronixlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-clinic-gold transition-colors duration-200"
            >
              Xyronix Labs Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}