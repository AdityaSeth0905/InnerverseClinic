'use client'

import { useState } from 'react'

export function QueryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/send-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const inputClass =
    'w-full bg-transparent border-b border-clinic-border/60 focus:border-clinic-green outline-none py-3 text-sm text-clinic-dark font-light placeholder:text-clinic-text-muted/50 transition-colors duration-200'

  const labelClass = 'block text-xs tracking-widest uppercase text-clinic-text-muted/60 font-light mb-2'

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="Your full name"
            autoComplete="name"
          />
        </div>
        <div>
          <label className={labelClass}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="your@email.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="+91 XXXXX XXXXX"
            autoComplete="tel"
          />
        </div>
        <div>
          <label className={labelClass}>Subject</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>Select a subject</option>
            <option value="appointment">Book an Appointment</option>
            <option value="treatment">Treatment Enquiry</option>
            <option value="general">General Question</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Please describe your query or health concern in brief…"
        />
      </div>

      {/* Status messages */}
      {status === 'success' && (
        <div className="p-4 border border-clinic-green/20 bg-clinic-green/5 rounded-sm">
          <p className="text-sm text-clinic-green font-light">
            Thank you — your message has been received. We will be in touch within 24 hours.
          </p>
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 border border-red-200 bg-red-50 rounded-sm">
          <p className="text-sm text-red-600 font-light">
            Something went wrong. Please try again or contact us directly by phone.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center gap-2 px-8 py-4 bg-clinic-green text-clinic-cream text-sm tracking-wide hover:bg-clinic-green-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-sm group"
      >
        {isLoading ? (
          <>
            <span className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </>
        )}
      </button>
    </form>
  )
}