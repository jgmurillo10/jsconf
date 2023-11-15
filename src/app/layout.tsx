import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juan Murillo | JSConf demos',
  description: 'Supercharge your React apps demos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <nav className='bg-slate-300 p-4'>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/basic">Basic</Link>
            </li>
            <li>
              <Link href="/function">Function</Link>
            </li>
            <li>
              <Link href="/assistant">Assistant</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
