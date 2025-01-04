// src/app/layout.tsx
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import ThemeToggle from '@/components/ui/ThemeToggle'
import Toast from '@/components/ui/Toast'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <Navbar />
        {children}
        <ThemeToggle />
        <Toast />
      </body>
    </html>
  )
}
