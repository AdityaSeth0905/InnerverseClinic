'use client'

import Link from 'next/link'
import Image from 'next/image'
import { clinicInfo } from '@/lib/clinic-data'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const mapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6894289567876!2d77.17859382346935!3d28.545410874241396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce276b0001111%3A0x1234567890ab!2sLajpat%20Nagar!5e0!3m2!1sen!2sin!4v1234567890"

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Innerverse Homoeoclinic Logo"
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <h3 className="font-bold text-white">{clinicInfo.name}</h3>
                <p className="text-xs text-gray-400">Premium Homeopathy</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {clinicInfo.about}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Doctors', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-rose-400 transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">{clinicInfo.address}</p>
              <div className="space-y-1">
                {clinicInfo.phone.map((phone) => (
                  <a 
                    key={phone}
                    href={`tel:${phone}`}
                    className="text-gray-400 hover:text-rose-400 block"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${clinicInfo.email}`}
                className="text-gray-400 hover:text-rose-400 block"
              >
                {clinicInfo.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p><span className="font-semibold text-gray-300">Weekdays:</span> {clinicInfo.hours.weekdays}</p>
              <p><span className="font-semibold text-gray-300">Saturday:</span> {clinicInfo.hours.saturday}</p>
              <p><span className="font-semibold text-gray-300">Sunday:</span> {clinicInfo.hours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
            <p>
              &copy; {currentYear} {clinicInfo.name}. All rights reserved.
            </p>
            <p>
              Powered by{' '}
              <Link
                href="https://www.xyronixlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-400 hover:text-rose-300 transition-colors"
              >
                Xyronix Labs Pvt. Ltd.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
