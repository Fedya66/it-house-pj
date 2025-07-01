import React from 'react';
import { Users, Award, Laptop, Heart, Target, Headphones } from 'lucide-react';

export const About: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Heart,
      title: "Do'stona muhit",
      description: "O'quvchilar va o'qituvchilar o'rtasida qulay va do'stona muhit yaratamiz"
    },
    {
      icon: Users,
      title: "Tajribali ustozlar",
      description: "Soha mutaxassislari va tajribali dasturchilar sizga bilim beradi"
    },
    {
      icon: Laptop,
      title: "Zamonaviy jihozlar",
      description: "Eng so'nggi texnologiyalar va dasturiy ta'minot bilan jihozlangan"
    },
    {
      icon: Award,
      title: "Qulay darsliklar",
      description: "Zamonaviy va qulay o'quv xonalarida darslar o'tkaziladi"
    },
    {
      icon: Target,
      title: "Amaliyotga yo'nalgan",
      description: "Nazariya bilan bir qatorda ko'proq amaliy mashg'ulotlar"
    },
    {
      icon: Headphones,
      title: "Tugagandan keyin qo'llab-quvvatlash",
      description: "Kurs tugagandan keyin ham sizga yordam berishda davom etamiz"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 dark:opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              <span className="text-red-600">IT HOUSE haqida</span>
            </h2>
            <p className="text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              IT HOUSE - bu zamonaviy texnologiyalar va sifatli ta'lim tizimini birlashtirgan 
              professional ta'lim markazi. Bizning maqsadimiz - har bir o'quvchini IT sohasida 
              muvaffaqiyatli mutaxassis qilish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-black rounded-2xl p-8 border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black dark:bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white dark:text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-black/70 dark:text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-black/5 dark:bg-white/5 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
                  Nega aynan IT HOUSE?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-black/70 dark:text-white/70">
                      <strong>Individual yondashuv:</strong> Har bir o'quvchi bilan alohida ishlash
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-black/70 dark:text-white/70">
                      <strong>Real loyihalar:</strong> Haqiqiy mijozlar uchun loyihalar ustida ishlash
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-black/70 dark:text-white/70">
                      <strong>Ishga joylashish:</strong> Kurs tugagandan keyin ish topishda yordam
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-black/70 dark:text-white/70">
                      <strong>Doimiy yangilanish:</strong> Eng so'nggi texnologiyalarni o'rgatish
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    Batafsil ma'lumot olish
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-xl relative overflow-hidden border border-black/20 dark:border-white/20">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-black/10 dark:bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/20 dark:bg-white/20 rounded-full translate-y-8 -translate-x-8"></div>
                  <div className="relative z-10">
                    <div className="text-4xl font-bold text-red-500 mb-2">5+</div>
                    <div className="text-black/70 dark:text-white/70 mb-4">Yillik tajriba</div>
                    <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
                    <div className="text-black/70 dark:text-white/70">Professional ustoz</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};