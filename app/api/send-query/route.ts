import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

// Sanitize input to prevent injection attacks
function sanitize(str: string): string {
  return String(str)
    .replace(/[<>]/g, '') // strip angle brackets
    .trim()
    .slice(0, 2000)       // hard limit
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const safeName = sanitize(name)
    const safeEmail = sanitize(email)
    const safePhone = sanitize(phone)
    const safeSubject = sanitize(subject)
    const safeMessage = sanitize(message)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to clinic
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'innerverseclinic@gmail.com',
      subject: `New Query: ${safeSubject} — ${safeName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px; color: #2c3e35;">
          <h2 style="font-size: 24px; margin-bottom: 24px; color: #1a2e28;">New Patient Query</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7e75; font-size: 14px; width: 120px;">Name</td><td style="padding: 8px 0; font-size: 14px;">${safeName}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7e75; font-size: 14px;">Email</td><td style="padding: 8px 0; font-size: 14px;">${safeEmail}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7e75; font-size: 14px;">Phone</td><td style="padding: 8px 0; font-size: 14px;">${safePhone}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7e75; font-size: 14px;">Subject</td><td style="padding: 8px 0; font-size: 14px;">${safeSubject}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #faf8f4; border-left: 3px solid #c9a84c;">
            <p style="font-size: 14px; line-height: 1.7; margin: 0;">${safeMessage.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top: 32px; font-size: 12px; color: #6b7e75;">Innerverse Homoeoclinic — automated query notification</p>
        </div>
      `,
    })

    // Confirmation email to patient
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: safeEmail,
      subject: 'Your query has been received — Innerverse Homoeoclinic',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px; color: #2c3e35;">
          <h2 style="font-size: 24px; margin-bottom: 8px; color: #1a2e28;">Thank you, ${safeName}</h2>
          <p style="color: #6b7e75; font-size: 14px; margin-bottom: 32px;">We have received your query and will respond within 24 hours.</p>
          <div style="padding: 20px; background: #faf8f4; border-left: 3px solid #2d4a3e; margin-bottom: 32px;">
            <p style="font-size: 13px; color: #6b7e75; margin: 0 0 4px;">Subject</p>
            <p style="font-size: 14px; margin: 0;">${safeSubject}</p>
          </div>
          <p style="font-size: 14px; color: #6b7e75; line-height: 1.7;">
            If you need to reach us sooner, please call us at <strong>+91 93548 94216</strong> or <strong>+91 85950 81325</strong>.
          </p>
          <p style="margin-top: 40px; font-size: 14px; color: #2c3e35;">Warm regards,<br><strong>Innerverse Homoeoclinic</strong><br><span style="font-size: 12px; color: #6b7e75;">Dayanand Colony, Lajpat Nagar IV, New Delhi</span></p>
        </div>
      `,
    })

    return NextResponse.json({ message: 'Query sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send query' }, { status: 500 })
  }
}