import type React from "react"
import type { Metadata } from "next"
import { Vazirmatn, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { BackToTop } from "@/components/back-to-top"
import { Footer } from "@/components/footer"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "وسنا هیپنوتراپی | خدمات حرفه‌ای هیپنوتراپی",
  description: "خدمات حرفه‌ای هیپنوتراپی که به مراجعین کمک می‌کند تا از باورها و رفتارهای محدودکننده رها شوند.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className={`${vazirmatn.variable} ${playfair.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
