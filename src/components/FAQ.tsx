import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSupport = () => {
    scrollToSection('contact');
  };

  const handleTelegramSupport = () => {
    window.open('https://t.me/ithouse_edu', '_blank');
  };

  const faqData = [
    {
      question: "Kurslar qancha vaqt davom etadi?",
      answer: "Kurslarimiz 3 oydan 7 oygacha davom etadi. Har bir kurs uchun alohida muddat belgilangan. Masalan, Grafik dizayn kursi 3 oy, Front-end development kursi 6 oy davom etadi."
    },
    {
      question: "Darslar qanday formatda o'tadi?",
      answer: "Darslar offline formatda, zamonaviy o'quv xonalarida o'tkaziladi. Shuningdek, ba'zi kurslar uchun gibrid format ham mavjud - ya'ni offline va online aralash tarzda."
    },
    {
      question: "Kurs narxi qancha va to'lov usullari qanday?",
      answer: "Kurs narxlari 600,000 so'mdan 1,500,000 so'mgacha. To'lovni bir yoqlama yoki oyma-oy qilishingiz mumkin. Kredit karta, naqd pul va bank o'tkazmasi orqali to'lash imkoniyati bor."
    },
    {
      question: "Kursga yozilish uchun qanday talablar bor?",
      answer: "Ko'pchilik kurslarimiz uchun maxsus tayyorgarlik talab etilmaydi. Faqat kompyuter bilan ishlash ko'nikmasi kifoya. Ba'zi yuqori darajadagi kurslar uchun boshlang'ich bilim talab qilinadi."
    },
    {
      question: "Kurs tugagandan keyin sertifikat beriladimi?",
      answer: "Ha, har bir kursni muvaffaqiyatli tugatgan o'quvchilarga IT HOUSE sertifikati beriladi. Bu sertifikat sizning professional portfolioingizni boyitadi va ish izlashda yordam beradi."
    },
    {
      question: "Ishga joylashishda yordam berasizlarmi?",
      answer: "Albatta! Bizning karyera bo'limimiz bitiruvchilarni ishga joylashtirishda faol yordam beradi. HR mutaxassislari bilan suhbatlashishga tayyorlash, rezyume tuzish va ish izlashda qo'llab-quvvatlash xizmatlarini taqdim etamiz."
    },
    {
      question: "Guruhlar qancha kishi bo'ladi?",
      answer: "Har bir guruhda maksimal 12-15 nafar o'quvchi bo'ladi. Bu har bir o'quvchiga individual e'tibor berish va sifatli ta'lim olishni ta'minlaydi."
    },
    {
      question: "Dars jadvalini o'zim tanlashim mumkinmi?",
      answer: "Ha, bizda turli vaqtlarda darslar mavjud. Ertalabki, kechki va dam olish kunlari uchun guruhlar bor. Siz o'zingizga qulay vaqtni tanlashingiz mumkin."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-24 h-24 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-2xl rotate-45"></div>
        <div className="absolute bottom-32 right-10 w-20 h-20 bg-gradient-to-br from-red-500/10 to-red-700/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-white dark:from-slate-800 dark:to-slate-700 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Savollar va javoblar</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Tez-tez so'raladigan savollar</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Bizning kurslar haqida eng ko'p so'raladigan savollar va ularga javoblar
            </p>
          </div>

          <div className="space-y-4 mb-16">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-slate-50 to-red-50/50 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-slate-200 dark:border-slate-600 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-black dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-red-500 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400 transition-transform duration-200" />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-8 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-slate-200 to-red-200 dark:from-slate-600 dark:to-red-600 mb-4"></div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-red-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 md:p-12 text-center">
            <HelpCircle className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Boshqa savollaringiz bormi?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Agar sizda qo'shimcha savollar bo'lsa, biz bilan bog'laning. 
              Mutaxassislarimiz sizga batafsil ma'lumot berishga doim tayyor.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleContactSupport}
                className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Biz bilan bog'lanish</span>
              </button>
              <button 
                onClick={handleTelegramSupport}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Telegram orqali yozish</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};