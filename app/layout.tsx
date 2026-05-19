import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://novapros.ca"),
  title: 'NovaPros | Soutien en tenue de livres, RH et opérations pour PME au Québec',
  description: 'NovaPros accompagne les PME et les propriétaires immobiliers au Québec avec des services de tenue de livres, de soutien RH administratif et de soutien opérationnel.',
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: ['tenue de livres', 'soutien RH', 'soutien opérationnel', 'PME Québec', 'propriétaires immobiliers', 'gestion administrative'],
  authors: [{ name: 'NovaPros' }],
  openGraph: {
    title: 'NovaPros | Soutien en tenue de livres, RH et opérations pour PME au Québec',
    description: 'NovaPros accompagne les PME et les propriétaires immobiliers au Québec avec des services de tenue de livres, de soutien RH administratif et de soutien opérationnel.',
    url: "https://novapros.ca",
    siteName: "NovaPros",
    type: 'website',
    locale: 'fr_CA',
  },
  twitter: {
    card: "summary_large_image",
    title: 'NovaPros | Soutien en tenue de livres, RH et opérations pour PME au Québec',
    description: 'NovaPros accompagne les PME et les propriétaires immobiliers au Québec avec des services de tenue de livres, de soutien RH administratif et de soutien opérationnel.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NovaPros",
    areaServed: "Quebec",
    url: "https://novapros.ca",
    telephone: "+1-418-800-7784",
    address: {
      "@type": "PostalAddress",
      streetAddress: "128 53e rue Est",
      addressLocality: "Québec",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    description:
      "Soutien en tenue de livres, RH administratif et operations pour PME au Quebec.",
  }

  return (
    <html lang="fr" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-foreground focus:shadow"
        >
          Aller au contenu principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
      </body>
    </html>
  )
}
