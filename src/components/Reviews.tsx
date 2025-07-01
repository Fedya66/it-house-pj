import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      name: "Aziz Karimov",
      course: "Front-end Development",
      rating: 5,
      text: "IT HOUSE da Front-end kursini tugatdim. Ustozlar juda professional va sabr-toqatli. Hozir Google da junior developer sifatida ishlayman. Rahmat!",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=150",
      job: "Junior Developer @ Google",
      fullReview: "IT HOUSE da o'tkazgan 6 oy davomida juda ko'p narsalarni o'rgandim. Ustozlar har doim yordam berishga tayyor edi. Amaliy loyihalar ustida ishlash imkoniyati berdi. Hozir Google kompaniyasida junior developer sifatida ishlayman va bu IT School tufayli mumkin bo'ldi."
    },
    {
      name: "Dior Azimov",
      course: "AI",
      rating: 5,
      text: "Dizayn kursidan juda ko'p narsalarni o'rgandim. Amaliy loyihalar ustida ishladik va portfolio yaratdik. Hozir freelancer sifatida yaxshi daromad qilyapman.",
      image: "https://images.pexels.com/photos/3782218/pexels-photo-3782218.jpeg?auto=compress&cs=tinysrgb&w=150",
      job: "Freelance Designer",
      fullReview: "AI kursi hayotimni butunlay o'zgartirdi. AI dasturlarini professional darajada o'rgandim. Hozir oyiga $1500 gacha daromad qilyapman freelance loyihalar orqali."
    },
    {
      name: "Bekzod Rahimov",
      course: "Python Programming",
      rating: 5,
      text: "Python kursini tugatganimdan keyin data science sohasiga qiziqib qoldim. Ustozlarning yordami bilan ko'p loyihalar qildik. Tavsiya qilaman!",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=150",
      job: "Data Analyst @ Uzum",
      fullReview: "Python kursi orqali dasturlashga qiziqib qoldim. Machine learning va data science yo'nalishida chuqur bilim oldim. Hozir Uzum kompaniyasida data analyst sifatida ishlayman."
    },
    {
      name: "Fotima Tosheva",
      course: "Digital Marketing",
      rating: 5,
      text: "Marketing kursi hayotimni o'zgartirdi. SMM va SEO bo'yicha bilimlarni o'zlashtirdim. Hozir o'z agentligimni ochdim va bir nechta mijozlarim bor.",
      image: "https://images.pexels.com/photos/3781539/pexels-photo-3781539.jpeg?auto=compress&cs=tinysrgb&w=150",
      job: "Marketing Agency Owner",
      fullReview: "Digital marketing kursi orqali o'z biznesimni boshladim. SMM, SEO va Google Ads bo'yicha professional bilim oldim. Hozir o'z marketing agentligim bor va 10+ mijoz bilan ishlayman."
    },
    {
      name: "Sardor Abdullayev",
      course: "Mobile Development",
      rating: 5,
      text: "React Native kursi orqali mobil dasturlashni o'rgandim. Ustozlar har doim yordam berishga tayyor edi. Hozir o'z startupimni ishga tushirdim.",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150",
      job: "Startup Founder",
      fullReview: "Mobile development kursi orqali React Native texnologiyasini o'rgandim. Hozir o'z startupim bor va App Store'da 50,000+ yuklab olingan ilovam mavjud."
    },
    {
      name: "Erkin Juraev",
      course: "English for IT",
      rating: 5,
      text: "IT uchun ingliz tili kursi juda foydali bo'ldi. Texnik terminlarni o'rgandim va hozir xorijiy mijozlar bilan ishlashga qodir bo'ldim.",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=150",
      job: "Remote Developer",
      fullReview: "Ingliz tili kursi orqali xorijiy mijozlar bilan ishlash imkoniyatiga ega bo'ldim. Hozir remote developer sifatida AQSh kompaniyasida ishlayman va oyiga $2000 maosh olyapman."
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleStartJourney = () => {
    scrollToSection('courses');
  };

  return (
    <section id="reviews" className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-red-500/10 to-red-700/10 rounded-2xl rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">O'quvchilar fikri</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Bizning bitiruvchilarimiz haqiqiy muvaffaqiyatga erishgan va o'z tajribalarini bo'lishmoqda
            </p>
          </div>

          {/* Featured Review Carousel */}
          <div className="mb-16">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-xl relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-red-500" />
              </div>
              
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-red-500 to-red-700 p-1">
                    <img 
                      src={reviews[currentReview].image} 
                      alt={reviews[currentReview].name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-red-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 italic">
                    "{reviews[currentReview].fullReview}"
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-bold text-black dark:text-white">{reviews[currentReview].name}</h4>
                    <p className="text-red-500 font-semibold">{reviews[currentReview].job}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{reviews[currentReview].course}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-8">
                <button 
                  onClick={prevReview}
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                </button>
                
                <div className="flex space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentReview 
                          ? 'bg-red-500' 
                          : 'bg-slate-300 dark:bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextReview}
                  className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
            </div>
          </div>

          {/* All Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-red-500" />
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-red-500 fill-current" />
                    ))}
                  </div>

                  {/* Course Badge */}
                  <div className="inline-block bg-gradient-to-r from-red-50 to-white dark:from-slate-700 dark:to-slate-600 px-3 py-1 rounded-full mb-4">
                    <span className="text-sm font-medium text-red-600 dark:text-red-400">{review.course}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-sm">
                    "{review.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-red-500 to-red-700 p-0.5">
                      <img 
                        src={review.image} 
                        alt={review.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white">{review.name}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{review.job}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-red-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">98%</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">Mamnun o'quvchilar</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">4.9</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">O'rtacha reyting</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">1500+</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">Bitiruvchilar</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">95%</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">Ishga joylashish</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Siz ham muvaffaqiyat qissangizni yozing!
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Keling, birgalikda sizning IT karyerangizni boshlaymiz
            </p>
            <button 
              onClick={handleStartJourney}
              className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Hoziroq boshlash
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};