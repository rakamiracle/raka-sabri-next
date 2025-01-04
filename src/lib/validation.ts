import * as z from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
  preferredContact: z.enum(['email', 'whatsapp']),
  phone: z.string().optional().refine((val) => {
    if (!val) return true;
    return /^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(val);
  }, 'Nomor WhatsApp tidak valid')
})