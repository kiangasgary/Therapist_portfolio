"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="pt-12 pb-20 bg-therapy-secondary">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-center mb-10">
            درباره <span className="text-therapy-primary">وسنا هیپنوتراپی</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/images/therapist-profile.jpg"
                alt="تصویر درمانگر"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-medium text-therapy-text">سلام، من وسنا هستم</h3>
              <p className="text-therapy-text/80">
                با بیش از ۱۵ سال تجربه در هیپنوتراپی، به صدها مراجع کمک کرده‌ام تا بر اضطراب غلبه کنند، عادت‌های ناخواسته
                را ترک کنند و قدرت درونی خود را کشف کنند. رویکرد من ترکیبی از تکنیک‌های سنتی هیپنوتراپی با علوم اعصاب
                مدرن برای ایجاد برنامه‌های درمانی شخصی‌سازی شده است.
              </p>
              <p className="text-therapy-text/80">
                من معتقدم که هر فردی ظرفیت تغییر مثبت و رشد شخصی را دارد. نقش من هدایت شما در فرآیند دسترسی به ذهن
                ناخودآگاه است، جایی که تحول پایدار آغاز می‌شود.
              </p>
              <div className="pt-4">
                <h4 className="font-medium text-therapy-text mb-3">گواهینامه‌ها</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {["هیپنوتراپی بالینی", "درمان شناختی رفتاری", "برنامه‌ریزی عصبی-زبانی", "درمان مبتنی بر ذهن‌آگاهی"].map(
                    (cert, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-therapy-primary rounded-full ml-2"></span>
                        <span className="text-sm text-therapy-text/80">{cert}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
