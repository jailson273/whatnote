import type { Metadata } from 'next'
import { Gorditas } from 'next/font/google'
import './globals.css'

const front = Gorditas({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Qual nota',
  description:
    'Descubra qual é a nota e a sequência correta para tocar qualquer musica'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={front.className}>{children}</body>
    </html>
  )
}
