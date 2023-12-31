import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Navbar from './Components/Navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })
const font=Nunito({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'AirBnb',
  description: 'AirBnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
