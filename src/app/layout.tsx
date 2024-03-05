import './globals.css'

import type { Metadata } from 'next'

import { Footer } from '@/app/_components/footer'
import { fontSans } from '@/app/_lib/fonts'
import { AuthProvider } from '@/app/_providers/auth-provider'

export const metadata: Metadata = {
  title: 'Style Barbershop',
  description: 'Sua barbearia à um clique de distancia de voce',
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="dark">
        <AuthProvider>
          <div className="flex h-screen flex-col">
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
