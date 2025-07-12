import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { AuthProvider } from '@/contexts/AuthContext'
import ProtectedContent from '@/components/ProtectedContent'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Onushilon Hub - Master HSC English Grammar',
  description: 'Master HSC English grammar with comprehensive analysis tools and board questions from 2022-2024',
  keywords: 'HSC English, Grammar, Board Questions, Bangladesh Education',
  authors: [{ name: 'iSiFAT' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <ProtectedContent enableScreenshotProtection={true}>
              {children}
              <Analytics />
              <SpeedInsights />
            </ProtectedContent>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}