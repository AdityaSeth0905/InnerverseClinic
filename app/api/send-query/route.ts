import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content for clinic
    const clinicMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'innerverseclinic@gmail.com',
      subject: `New Query: ${subject} - ${name}`,
      html: `
        <h2>New Patient Query</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // Confirmation email for patient
    const patientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your query - Innerverse Homoeoclinic',
      html: `
        <h2>Thank you for contacting Innerverse Homoeoclinic</h2>
        <p>Dear ${name},</p>
        <p>We have received your query and will get back to you as soon as possible.</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>Our team will respond within 24 hours.</p>
        <p>Best regards,<br/>Innerverse Homoeoclinic Team</p>
      `,
    }

    // Send both emails
    await transporter.sendMail(clinicMailOptions)
    await transporter.sendMail(patientMailOptions)

    return NextResponse.json(
      { message: 'Query sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send query' },
      { status: 500 }
    )
  }
}
