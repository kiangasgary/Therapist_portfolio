import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "درباره ما | وسنا هیپنوتراپی",
  description: "با بیش از ۱۵ سال تجربه، وسنا هیپنوتراپی خدمات حرفه‌ای هیپنوتراپی ارائه می‌دهد.",
}

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-center mb-8">
            درباره <span className="text-therapy-primary">وسنا هیپنوتراپی</span>
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-therapy-text/80 mb-8 text-center">
              با بیش از ۱۵ سال تجربه، وسنا هیپنوتراپی خدمات حرفه‌ای هیپنوتراپی ارائه می‌دهد تا به مراجعین کمک کند بر
              چالش‌ها غلبه کنند و به اهداف خود برسند.
            </p>

            <div className="aspect-video rounded-xl overflow-hidden mb-12">
              <Image
                src="/images/office.jpg"
                alt="دفتر درمان"
                width={1200}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif font-medium mb-4">ماموریت ما</h2>
                <p className="text-therapy-text/80 mb-4">
                  در وسنا هیپنوتراپی، ماموریت ما توانمندسازی افراد برای غلبه بر باورها و رفتارهای محدودکننده از طریق
                  خدمات حرفه‌ای هیپنوتراپی است. ما معتقدیم که هر فردی ظرفیت تغییر مثبت و رشد شخصی را دارد.
                </p>
                <p className="text-therapy-text/80">
                  رویکرد ما ترکیبی از تکنیک‌های سنتی هیپنوتراپی با علوم اعصاب مدرن برای ایجاد برنامه‌های درمانی شخصی‌سازی
                  شده است که نیازها و اهداف منحصر به فرد هر مراجع را برآورده می‌کند.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-medium mb-4">رویکرد ما</h2>
                <p className="text-therapy-text/80 mb-4">
                  ما رویکردی کل‌نگر به هیپنوتراپی داریم که ذهن، بدن و روح را مورد توجه قرار می‌دهد. جلسات ما برای کمک به
                  مراجعین در دسترسی به ذهن ناخودآگاه طراحی شده‌اند، جایی که تحول پایدار آغاز می‌شود.
                </p>
                <p className="text-therapy-text/80">
                  از طریق آرامش هدایت‌شده و تمرکز متمرکز، ما به مراجعین کمک می‌کنیم تا الگوهای فکری و رفتاری منفی را
                  بازنویسی کنند و آنها را با جایگزین‌های مثبت و توانمندساز جایگزین کنند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
