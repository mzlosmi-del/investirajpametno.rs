import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Investiraj Pametno",
  description: "Naučite kako da investirate pametno u Srbiji",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  )
}
