"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  delay: number
  imageSrc: string
}

function ServiceCard({ title, description, icon, delay, imageSrc }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.8 }}
    >
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        whileHover={{ scale: 1.03, y: -5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative h-48 w-full">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <div className="w-12 h-12 bg-therapy-secondary rounded-full flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-medium mb-3">{title}</h3>
          <p className="text-therapy-text/70 mb-4">{description}</p>
          <Link href="/services" className="inline-flex items-center text-therapy-primary font-medium">
            اطلاعات بیشتر
            <motion.span animate={{ x: isHovered ? -5 : 0 }} transition={{ duration: 0.2 }}>
              <ArrowLeft className="mr-2 h-4 w-4" />
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ServicesSection() {
  const services = [
    {
      title: "درمان اضطراب",
      description: "غلبه بر اضطراب و استرس از طریق جلسات هیپنوتراپی هدفمند که ذهن و بدن شما را آرام می‌کند.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#FF5A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 8V12" stroke="#FF5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16H12.01" stroke="#FF5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      imageSrc: "/images/service-anxiety.jpg",
    },
    {
      title: "ترک عادت",
      description: "رهایی از عادت‌ها و رفتارهای ناخواسته از طریق برنامه‌ریزی مجدد قدرتمند ذهن ناخودآگاه.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8L6 18" stroke="#FF5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8L18 18" stroke="#FF5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      imageSrc: "/images/service-habit.jpg",
    },
    {
      title: "افزایش اعتماد به نفس",
      description: "توسعه اعتماد به نفس خلل‌ناپذیر و غلبه بر باورهای محدودکننده‌ای که مانع پیشرفت شما می‌شوند.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="#FF5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      imageSrc: "/images/service-confidence.jpg",
    },
    {
      title: "بهبود خواب",
      description: "دستیابی به خواب آرام و تجدیدکننده از طریق تکنیک‌هایی که ذهن شما را آرام و بدن شما را ریلکس می‌کند.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 4C20.3137 4 23 6.68629 23 10C23 13.3137 20.3137 16 17 16H7C3.68629 16 1 13.3137 1 10C1 6.68629 3.68629 4 7 4H17Z"
            stroke="#FF5A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M17 20V16" stroke="#FF5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 20V16" stroke="#FF5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      imageSrc: "/images/service-sleep.jpg",
    },
    {
      title: "مدیریت استرس",
      description: "یادگیری تکنیک‌های قدرتمند برای مدیریت استرس و ایجاد یک زندگی متعادل و آرام.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#FF5A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 16.2L4.8 12L9 7.8"
            stroke="#FF5A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 7.8L19.2 12L15 16.2"
            stroke="#FF5A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      imageSrc: "/images/service-stress.jpg",
    },
    {
      title: "رشد شخصی",
      description: "آزادسازی پتانسیل کامل خود و دستیابی به اهداف‌تان از طریق جلسات هیپنوتراپی تحول‌آفرین.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V6" stroke="#FF5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 18V22" stroke="#FF5A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M4.93 4.93L7.76 7.76"
            stroke="#FF5A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.24 16.24L19.07 19.07"
            stroke="#FF5A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.24 7.76L19.07 4.93"
            stroke="#FF5A3D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      imageSrc: "/images/service-growth.jpg",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-4">
            <span className="text-therapy-primary">خدمات</span> ما
          </h2>
          <p className="text-therapy-text/70 text-center max-w-2xl mx-auto mb-16">
            کشف کنید که چگونه خدمات تخصصی هیپنوتراپی ما می‌تواند به شما در غلبه بر چالش‌ها و دستیابی به اهداف‌تان کمک کند.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={0.1 * index}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
