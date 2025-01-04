export interface ContactForm {
    name: string;
    email: string;
    message: string;
    preferredContact: 'email' | 'whatsapp';
    phone?: string;
  }