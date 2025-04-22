"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-therapy-primary" />,
      title: "آدرس",
      details: "خیابان شفا، پلاک ۱۲۳، طبقه اول، واحد ۱۰۱، شهر سلامت، کد پستی ۱۲۳۴۵",
    },
    {
      icon: <Phone className="h-5 w-5 text-therapy-primary" />,
      title: "تلفن",
      details: "۰۲۱-۱۲۳۴۵۶۷۸",
    },
    {
      icon: <Mail className="h-5 w-5 text-therapy-primary" />,
      title: "ایمیل",
      details: "info@vesnahypnotherapy.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-therapy-primary" />,
      title: "ساعات کاری",
      details: "دوشنبه تا جمعه: ۹ صبح تا ۶ عصر، شنبه: ۱۰ صبح تا ۲ بعد از ظهر",
    },
  ]

  return (
    <section id="contact" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-2 text-center">
          <span className="text-therapy-primary">تماس</span> با ما
        </h2>
        <p className="text-therapy-text/70 max-w-2xl mx-auto text-center mb-8">
          آماده شروع سفر خود به سمت سلامتی هستید؟ همین امروز با ما تماس بگیرید تا یک مشاوره رزرو کنید یا درباره خدمات ما
          بیشتر بدانید.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-therapy-secondary rounded-xl p-8">
            <h3 className="text-2xl font-medium mb-6">اطلاعات تماس</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 ml-4 w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-therapy-text">{item.title}</h4>
                    <p className="text-therapy-text/70">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-medium mb-6">ارسال پیام</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6"
              >
                با تشکر از پیام شما! به زودی با شما تماس خواهیم گرفت.
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-therapy-text mb-1">
                  نام
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-therapy-text mb-1">
                  ایمیل
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-therapy-text mb-1">
                  تلفن
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-therapy-text mb-1">
                  پیام
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
