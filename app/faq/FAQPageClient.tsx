"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FAQPageClient() {
  const faqs = [
    {
      question: "هیپنوتراپی چیست؟",
      answer:
        "هیپنوتراپی نوعی درمان است که از آرامش هدایت‌شده، تمرکز شدید و توجه متمرکز برای دستیابی به حالت آگاهی افزایش‌یافته استفاده می‌کند. در این حالت، درمانگر می‌تواند پیشنهاداتی برای تغییرات رفتاری ارائه دهد تا به شما در رفع مشکلاتی مانند اضطراب، استرس، فوبیا و عادت‌های ناخواسته کمک کند.",
    },
    {
      question: "آیا هیپنوتراپی ایمن است؟",
      answer:
        "بله، هیپنوتراپی زمانی که توسط یک متخصص آموزش‌دیده انجام شود، عموماً ایمن در نظر گرفته می‌شود. شما در طول جلسه هوشیار و در کنترل باقی می‌مانید و نمی‌توان شما را مجبور به انجام کاری برخلاف میل‌تان کرد. این یک فرآیند مشارکتی است که در آن با درمانگر برای دستیابی به اهداف‌تان همکاری می‌کنید.",
    },
    {
      question: "به چند جلسه نیاز خواهم داشت؟",
      answer:
        "تعداد جلسات بسته به فرد و مشکلی که مورد توجه قرار می‌گیرد، متفاوت است. برخی از مراجعین پس از فقط ۳-۴ جلسه بهبود قابل توجهی می‌بینند، در حالی که دیگران ممکن است از یک دوره درمانی طولانی‌تر بهره‌مند شوند. در طول مشاوره اولیه، ما نیازهای خاص شما را بررسی و یک برنامه درمانی شخصی‌سازی شده تدوین خواهیم کرد.",
    },
    {
      question: "هیپنوز چه احساسی دارد؟",
      answer:
        "اکثر افراد هیپنوز را به عنوان یک حالت آرامش عمیق توصیف می‌کنند، مشابه غرق شدن در یک کتاب یا فیلم خوب. شما از محیط اطراف خود آگاه باقی می‌مانید و کنترل اعمال خود را در دست دارید. بسیاری از مراجعین گزارش می‌دهند که در طول و پس از جلسات احساس آرامش، تمرکز و وضوح ذهنی دارند.",
    },
    {
      question: "آیا هر کسی می‌تواند هیپنوتیزم شود؟",
      answer:
        "اکثر افراد می‌توانند تا حدی هیپنوتیزم شوند، اگرچه برخی نسبت به دیگران حساس‌تر هستند. عواملی که ممکن است بر حساسیت تأثیر بگذارند شامل انگیزه، اعتماد به درمانگر و توانایی تمرکز و آرامش است. حتی کسانی که خود را مقاوم می‌دانند نیز اغلب می‌توانند از تکنیک‌های هیپنوتراپی بهره‌مند شوند.",
    },
    {
      question: "آیا آنچه در طول هیپنوز اتفاق می‌افتد را به یاد خواهم آورد؟",
      answer:
        "بله، اکثر افراد همه چیزهایی که در طول هیپنوز اتفاق می‌افتد را به یاد می‌آورند. برخلاف باور عمومی، هیپنوز یک حالت بیهوشی یا خواب نیست. شما در طول جلسه هوشیار باقی می‌مانید و معمولاً تجربه را به وضوح به یاد خواهید آورد.",
    },
    {
      question: "چگونه برای یک جلسه هیپنوتراپی آماده شوم؟",
      answer:
        "برای آماده شدن برای یک جلسه، لباس راحت بپوشید، از مصرف غذای سنگین یا الکل قبل از جلسه خودداری کنید و با ذهنی باز بیایید. داشتن اهداف روشن برای آنچه می‌خواهید از طریق هیپنوتراپی به دست آورید، مفید است. شب قبل از قرار ملاقات خود خواب خوبی داشته باشید تا اطمینان حاصل کنید که می‌توانید در طول جلسه کاملاً آرام شوید.",
    },
    {
      question: "آیا هیپنوتراپی تحت پوشش بیمه قرار می‌گیرد؟",
      answer:
        "پوشش بسته به ارائه‌دهنده بیمه و طرح متفاوت است. برخی از شرکت‌های بیمه هیپنوتراپی را زمانی که بخشی از یک برنامه درمانی برای شرایط خاص باشد، پوشش می‌دهند. ما توصیه می‌کنیم مستقیماً با ارائه‌دهنده بیمه خود تماس بگیرید تا درباره پوشش خدمات هیپنوتراپی سوال کنید.",
    },
  ]

  return (
    <main className="pt-24">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-center mb-8">
              سوالات <span className="text-therapy-primary">متداول</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-lg text-therapy-text/80 mb-16 text-center max-w-3xl mx-auto">
              پاسخ به سوالات رایج درباره هیپنوتراپی و خدمات ما. اگر سوال خود را اینجا نمی‌بینید، لطفاً با ما تماس بگیرید.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-therapy-primary/10 rounded-lg px-6 py-2"
                  >
                    <AccordionTrigger className="text-lg font-medium text-therapy-text hover:text-therapy-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-therapy-text/80 pt-2 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="mt-16 text-center">
                <h2 className="text-2xl font-serif font-medium mb-4">هنوز سوالی دارید؟</h2>
                <p className="text-therapy-text/80 mb-6">
                  همین امروز با ما تماس بگیرید تا یک مشاوره رزرو کنید یا درباره خدمات ما بیشتر بدانید.
                </p>
                <Link href="/contact">
                  <Button className="rounded-full">تماس با ما</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
