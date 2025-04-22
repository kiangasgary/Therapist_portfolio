import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "خدمات | وسنا هیپنوتراپی",
  description:
    "کشف کنید که چگونه خدمات تخصصی هیپنوتراپی ما می‌تواند به شما در غلبه بر چالش‌ها و دستیابی به اهداف‌تان کمک کند.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "درمان اضطراب",
      description:
        "برنامه درمان اضطراب ما به مراجعین کمک می‌کند تا بر اضطراب و استرس از طریق جلسات هیپنوتراپی هدفمند که ذهن و بدن را آرام می‌کند، غلبه کنند. از طریق آرامش هدایت‌شده و برنامه‌ریزی مجدد ناخودآگاه، مراجعین یاد می‌گیرند افکار مضطرب را مدیریت کنند و پاسخ‌های سالم‌تری به محرک‌های استرس‌زا ایجاد کنند.",
      image: "/images/service-anxiety.jpg",
    },
    {
      title: "ترک عادت",
      description:
        "از عادت‌ها و رفتارهای ناخواسته از طریق برنامه‌ریزی مجدد قدرتمند ذهن ناخودآگاه رها شوید. برنامه ترک عادت ما به علل ریشه‌ای رفتارهای ناخواسته می‌پردازد و به مراجعین کمک می‌کند تا جایگزین‌های سالم‌تری ایجاد کنند و اراده و کنترل خود را تقویت نمایند.",
      image: "/images/service-habit.jpg",
    },
    {
      title: "افزایش اعتماد به نفس",
      description:
        "اعتماد به نفس خلل‌ناپذیر ایجاد کنید و بر باورهای محدودکننده‌ای که مانع پیشرفت شما می‌شوند، غلبه کنید. برنامه افزایش اعتماد به نفس ما به مراجعین کمک می‌کند تا برداشت‌های منفی از خود را شناسایی و به چالش بکشند و آنها را با باورهای مثبت و توانمندساز که از رشد شخصی و حرفه‌ای حمایت می‌کنند، جایگزین کنند.",
      image: "/images/service-confidence.jpg",
    },
    {
      title: "بهبود خواب",
      description:
        "به خواب آرام و تجدیدکننده از طریق تکنیک‌هایی که ذهن شما را آرام و بدن شما را ریلکس می‌کند، دست یابید. برنامه بهبود خواب ما به علل زیربنایی اختلالات خواب می‌پردازد و به مراجعین کمک می‌کند تا الگوهای خواب سالم ایجاد کنند و تکنیک‌های موثر آرامش‌بخشی را توسعه دهند.",
      image: "/images/service-sleep.jpg",
    },
    {
      title: "مدیریت استرس",
      description:
        "تکنیک‌های قدرتمند برای مدیریت استرس و ایجاد یک زندگی متعادل و آرام را بیاموزید. برنامه مدیریت استرس ما به مراجعین کمک می‌کند تا محرک‌های استرس‌زا را شناسایی کنند و استراتژی‌های مقابله‌ای موثر ایجاد کنند که سلامت کلی و انعطاف‌پذیری در برابر چالش‌های زندگی را ارتقا می‌دهد.",
      image: "/images/service-stress.jpg",
    },
    {
      title: "رشد شخصی",
      description:
        "پتانسیل کامل خود را آزاد کنید و به اهداف خود از طریق جلسات هیپنوتراپی تحول‌آفرین دست یابید. برنامه رشد شخصی ما به مراجعین کمک می‌کند تا ارزش‌ها و آرزوهای خود را روشن کنند، بر موانع موفقیت غلبه کنند و ذهنیت و عادات مورد نیاز برای ایجاد تغییر مثبت پایدار را توسعه دهند.",
      image: "/images/service-growth.jpg",
    },
  ]

  return (
    <main className="pt-24">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-center mb-8">
            <span className="text-therapy-primary">خدمات</span> ما
          </h1>

          <p className="text-lg text-therapy-text/80 mb-16 text-center max-w-3xl mx-auto">
            کشف کنید که چگونه خدمات تخصصی هیپنوتراپی ما می‌تواند به شما در غلبه بر چالش‌ها و دستیابی به اهداف‌تان کمک کند.
            هر برنامه برای برآوردن نیازها و شرایط منحصر به فرد شما طراحی شده است.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-video">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-medium mb-4">{service.title}</h2>
                  <p className="text-therapy-text/80 mb-6">{service.description}</p>
                  <Link href="/contact">
                    <Button className="rounded-full">رزرو مشاوره</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-serif font-medium mb-4">آماده شروع سفر خود هستید؟</h2>
            <p className="text-therapy-text/80 mb-6 max-w-2xl mx-auto">
              همین امروز با ما تماس بگیرید تا یک مشاوره رزرو کنید و بیشتر درباره اینکه چگونه خدمات ما می‌تواند به شما در
              دستیابی به اهداف‌تان کمک کند، بدانید.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full">
                همین امروز شروع کنید
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
