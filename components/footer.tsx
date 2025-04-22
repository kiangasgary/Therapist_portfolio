import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-therapy-text text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 8C10 8 15 15 20 15C25 15 30 8 30 8"
                  stroke="#FF5A3D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
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
              <div className="mr-2">
                <h3 className="text-xl font-semibold">وسنا</h3>
                <p className="text-xs -mt-1 text-white/70">هیپنوتراپی</p>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-4">
              خدمات حرفه‌ای هیپنوتراپی که به مراجعین کمک می‌کند تا از باورها و رفتارهای محدودکننده رها شوند.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2">
              {["خانه", "درباره ما", "خدمات", "سوالات متداول", "تماس با ما"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === "خانه" ? "" : item === "درباره ما" ? "about" : item === "خدمات" ? "services" : item === "سوالات متداول" ? "faq" : "contact"}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">خدمات</h3>
            <ul className="space-y-2">
              {["درمان اضطراب", "ترک عادت", "افزایش اعتماد به نفس", "بهبود خواب", "مدیریت استرس"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-white/70 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">تماس</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>خیابان شفا، پلاک ۱۲۳، طبقه اول</li>
              <li>شهر سلامت، کد پستی ۱۲۳۴۵</li>
              <li>۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>info@vesnahypnotherapy.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">&copy; {currentYear} وسنا هیپنوتراپی. تمامی حقوق محفوظ است.</p>
          <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-white/70 hover:text-white transition-colors">
              سیاست حفظ حریم خصوصی
            </Link>
            <Link href="/terms" className="text-xs text-white/70 hover:text-white transition-colors">
              شرایط استفاده از خدمات
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
