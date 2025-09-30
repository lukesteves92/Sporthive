import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SportHive',
  description: 'Plataforma social e educativa de esportes',
  icons: {
    icon: '/favicon.png'
  },
  openGraph: {
    images: ['/og-image.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}