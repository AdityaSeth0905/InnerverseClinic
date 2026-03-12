'use client'

import Link from 'next/link'
import { clinicInfo } from '@/lib/clinic-data'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {clinicInfo.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {clinicInfo.about}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Doctors', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-rose-500 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">{clinicInfo.address}</p>
              {clinicInfo.phone.map((phone) => (
                <p key={phone}>
                  <a href={`tel:${phone}`} className="text-gray-600 hover:text-rose-500">
                    {phone}
                  </a>
                </p>
              ))}
              <p>
                <a href={`mailto:${clinicInfo.email}`} className="text-gray-600 hover:text-rose-500">
                  {clinicInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
