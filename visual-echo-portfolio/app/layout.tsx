import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Visual Echo - Professional Photography Services",
  description:
    "Professional photographer with 7 years of experience. Specializing in advertising, product, and lifestyle photography. Your brand's visual language.",
  keywords:
    "photography, professional photographer, advertising photography, product photography, brand photography, visual content",
    generator: 'v0.dev'
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
