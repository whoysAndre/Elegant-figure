import type { Metadata } from 'next'
import './globals.css'
import { inter } from '@/config/fonts'
import { Provider } from '@/components'
export const metadata: Metadata = {
  title: {
    template: '%s - Elegant | figure',
    default: 'Home - Elegant | figure'
  },
  description: 'Es una tienda de ropa exclusiva',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
