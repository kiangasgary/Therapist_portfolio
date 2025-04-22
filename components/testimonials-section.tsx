"use client"

import { motion } from "framer-motion"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "بعد از فقط سه جلسه با وسنا، کاهش قابل توجهی در اضطرابم احساس کردم. رفتار آرام و رویکرد حرفه‌ای او از همان جلسه اول باعث شد احساس راحتی کنم.",
      name: "سارا جهانی",
      designation: "مراجع درمان اضطراب",
      src: "/images/testimonial-1.jpg",
    },
    {
      quote:
        "من سال‌ها با بی‌خوابی مبارزه کرده‌ام. برنامه بهبود خواب وسنا شب‌های من را متحول کرده است. اکنون به راحتی به خواب می‌روم و با احساس تازگی بیدار می‌شوم.",
      name: "محمد چمنی",
      designation: "مراجع بهبود خواب",
      src: "/images/testimonial-2.jpg",
    },
    {
      quote:
        "جلسات افزایش اعتماد به نفس کاملاً نحوه برخورد من با چالش‌ها را تغییر داده است. اکنون می‌توانم در جلسات صحبت کنم و پروژه‌هایی را بپذیرم که قبلاً از آنها اجتناب می‌کردم.",
      name: "الهام رضایی",
      designation: "مراجع افزایش اعتماد به نفس",
      src: "/images/testimonial-3.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-therapy-secondary">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-8">
            نظرات <span className="text-therapy-primary">مراجعین</span>
          </h2>
        </motion.div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  )
}
