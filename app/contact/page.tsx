import { ContactSection } from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "تماس با ما | وسنا هیپنوتراپی",
  description:
    "آماده شروع سفر خود به سمت سلامتی هستید؟ همین امروز با ما تماس بگیرید تا یک مشاوره رزرو کنید یا درباره خدمات ما بیشتر بدانید.",
}

export default function ContactPage() {
  return (
    <main className="pt-24">
      <ContactSection />
    </main>
  )
}
