import type { Metadata } from 'next'
import '../styles/globals.css'
import Footer from '../components/app/footer'
import { Roboto } from 'next/font/google'
import { cn } from '@/lib/utils'
import Navbar from '@/components/app/navbar'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'sihun-space',
  description: 'sihun-space',
  keywords: 'sihun-space, "sihun-space", sihun, "sihun"',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('px-64', roboto.className)}>
        <header className="header-h w-full ">
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
