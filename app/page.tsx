import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "وسنا هیپنوتراپی | خدمات حرفه‌ای هیپنوتراپی",
  description: "خدمات حرفه‌ای هیپنوتراپی که به مراجعین کمک می‌کند تا از باورها و رفتارهای محدودکننده رها شوند.",
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
