import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  generator: 'Next.js',
  title: "Personal Portfolio",
  description: "Leo studies computer science at University of Guelph",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'google',
    other: {
      me: ['leo.miguel.bantl@gmail.com'],
    },
  },
  keywords: ['web dev', 'web development', 'personal portfolio'],
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
