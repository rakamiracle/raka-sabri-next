export function generateWhatsAppLink(phone: string, message: string) {
    const formattedPhone = phone.replace(/^0/, '62')
    const encodedMessage = encodeURIComponent(message)
    return `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodedMessage}`
  }
  