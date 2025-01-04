import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation'
import { sendEmail } from '@/lib/mail'
import { generateWhatsAppLink } from '@/lib/whatsapp'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const validatedData = contactSchema.parse(body)

    if (validatedData.preferredContact === 'email') {
      await sendEmail({
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      })
      
      return NextResponse.json({
        message: 'Email sent successfully',
      })
    }

    if (validatedData.preferredContact === 'whatsapp' && validatedData.phone) {
      const whatsappLink = generateWhatsAppLink(
        validatedData.phone,
        `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nMessage: ${validatedData.message}`
      )

      return NextResponse.json({
        message: 'WhatsApp link generated',
        whatsappLink,
      })
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}