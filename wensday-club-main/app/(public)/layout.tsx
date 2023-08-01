'use client'

import Image from "next/image"
import { useState } from "react"

import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [active, setActive] = useState(1)
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
