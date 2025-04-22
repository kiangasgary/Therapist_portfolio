"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold text-therapy-primary mb-4">404</h1>
        <h2 className="text-3xl font-serif font-medium mb-6">صفحه یافت نشد</h2>
        <p className="text-therapy-text/70 mb-8 max-w-md mx-auto">
          صفحه‌ای که به دنبال آن هستید ممکن است حذف شده باشد، نام آن تغییر کرده باشد یا موقتاً در دسترس نباشد.
        </p>
        <Link href="/">
          <Button className="rounded-full">بازگشت به خانه</Button>
        </Link>
      </motion.div>
    </main>
  )
}
