import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'NovaPros | Soutien en tenue de livres, RH et opérations pour PME au Québec',
  description: 'NovaPros accompagne les PME et les propriétaires immobiliers au Québec avec des services de tenue de livres, de soutien RH administratif et de soutien opérationnel.',
  keywords: ['tenue de livres', 'soutien RH', 'soutien opérationnel', 'PME Québec', 'propriétaires immobiliers', 'gestion administrative'],
  authors: [{ name: 'NovaPros' }],
  openGraph: {
    title: 'NovaPros | Soutien en tenue de livres, RH et opérations pour PME au Québec',
    description: 'NovaPros accompagne les PME et les propriétaires immobiliers au Québec avec des services de tenue de livres, de soutien RH administratif et de soutien opérationnel.',
    type: 'website',
    locale: 'fr_CA',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
