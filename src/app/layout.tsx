import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
    <html lang="en" className='dark'>
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>
        {children}
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 built with ❤️ from 🇨🇴☕️ by <a href="https://juanmurillo.co/" className="hover:underline">Juan Murillo</a>.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://juanmurillo.co" target="_blank" className="hover:underline me-4 md:me-6">About me</a>
              </li>
              <li>
                  <a href="https://instagram.com/juanmurillo2" target="_blank" className="hover:underline me-4 md:me-6">Instagram</a>
              </li>
          </ul>
          </div>
      </footer>
      </body>
    </html>
  )
}
