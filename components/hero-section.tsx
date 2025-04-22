"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background color - changed to a deep blue-gray that complements the orange accent */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#2D3748] to-[#1A202C]"></div>

      {/* Background gradient circle - adjusted opacity for better visibility */}
      <motion.div
        className="gradient-circle"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          top: "25%",
          right: "30%",
          transform: "translate(0, -50%)",
          zIndex: 5,
        }}
      />

      <div className="container mx-auto px-4 z-20 text-center relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white text-balance">
            تجربه{" "}
            <motion.span
              className="text-therapy-primary inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              آزادی
            </motion.span>{" "}
            زندگی بدون ترس.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="mt-12 max-w-2xl mx-auto text-lg text-white/90 text-balance">
            در وسنا هیپنوتراپی، ما متعهد به ارائه خدمات مدرن و حرفه‌ای هیپنوتراپی هستیم که به مراجعین ما در مسیر رسیدن به
            سلامت روان و آزادی درونی کمک می‌کند.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="mt-12">
            <Link href="/contact">
              <Button size="lg" className="rounded-full text-base px-8 py-6">
                رزرو مشاوره <span className="mr-2">←</span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
