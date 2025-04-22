import FAQPageClient from "./FAQPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "سوالات متداول | وسنا هیپنوتراپی",
  description: "پاسخ به سوالات رایج درباره هیپنوتراپی و خدمات ما.",
}

export default function FAQPage() {
  return <FAQPageClient />
}
