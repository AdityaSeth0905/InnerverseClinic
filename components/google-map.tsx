'use client'

import { Card } from '@/components/ui/card'

export function GoogleMap() {
  // Using embedded Google Maps for clinic location
  // Address: A17 Shop Number 5, Ground Floor, Dayanand Colony, Lajpat Nagar 4, New Delhi - 110024
  return (
    <Card className="w-full overflow-hidden">
      <div className="w-full h-96 bg-gray-100 relative">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.3898214569!2d77.20159!3d28.567197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2f7f8b8b8b9%3A0x1234567890ab!2sLajpat%20Nagar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
        />
      </div>
    </Card>
  )
}
