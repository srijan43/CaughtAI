import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plagiarism & AI Detection',
  description: 'Check your text for plagiarism and AI-generated content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 