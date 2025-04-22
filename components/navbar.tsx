"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navItems = [
    { name: "خانه", href: "/" },
    { name: "درباره ما", href: "/about" },
    { name: "خدمات", href: "/services" },
    { name: "سوالات متداول", href: "/faq" },
  ]

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 py-4 px-6 transition-colors duration-300",
        scrollY.get() > 10 ? "bg-therapy-secondary/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 space-x-reverse" onClick={closeMenu}>
          <div className="flex items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 8C10 8 15 15 20 15C25 15 30 8 30 8" stroke="#FF5A3D" strokeWidth="2" strokeLinecap="round" />
              <path
                d="M10 20C10 20 15 27 20 27C25 27 30 20 30 20"
                stroke="#FF5A3D"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10 32C10 32 15 39 20 39C25 39 30 32 30 32"
                stroke="#FF5A3D"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="mr-3">
              <h1 className="text-xl font-semibold">وسنا</h1>
              <p className="text-xs -mt-1">هیپنوتراپی</p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-therapy-text hover:bg-therapy-secondary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className="mr-3">
            <Button className="rounded-full">
              رزرو مشاوره <span className="mr-2">←</span>
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-therapy-text p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={cn("fixed inset-0 bg-therapy-secondary z-40 pt-20 px-6", isOpen ? "block" : "hidden")}
        initial={{ opacity: 0, y: -50 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="py-3 text-lg font-medium text-therapy-text hover:text-therapy-primary transition-colors"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" onClick={closeMenu}>
            <Button className="w-full mt-4 rounded-full">
              رزرو مشاوره <span className="mr-2">←</span>
            </Button>
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  )
}
