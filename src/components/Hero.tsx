import React from 'react';
import { ArrowRight, Play, Users, Award, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoPlay = () => {
    // Create a simple video modal or redirect
    const videoUrl = "https://www.youtube.com/watch?v=TBlDJTgiFZU"; // Replace with actual video
    window.open(videoUrl, '_blank', 'width=800,height=600');
  };

  const handleEnrollment = () => {
    scrollToSection('courses');
  };

  const handleStatsClick = (statType: string) => {
    switch(statType) {
      case 'graduates':
        scrollToSection('reviews');
        break;
      case 'courses':
        scrollToSection('courses');
        break;
      case 'employment':
        scrollToSection('about');
        break;
      default:
        scrollToSection('contact');
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-black/10 dark:bg-white/10 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-black/20 dark:bg-white/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-black/15 dark:bg-white/15 rounded-2xl rotate-12 animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-black/25 dark:bg-white/25 rounded-lg -rotate-45 animate-float"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-black/40 dark:bg-white/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-black/20 dark:border-white/20 mb-6">
              <Award className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-black dark:text-white">Sifatli ta'lim kafolati</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
              <span className="text-red-600">IT HOUSE</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-4">
              Kelajakka qadam qo'ying!
            </p>
            
            <p className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
              Zamonaviy IT sohasida muvaffaqiyatli karyera qurish uchun kerakli bilim va ko'nikmalarni o'rganing
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-200">
            <button 
              onClick={handleEnrollment}
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <span>Kursga yozilish</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button 
              onClick={handleVideoPlay}
              className="group bg-white dark:bg-black border-2 border-black dark:border-white text-black dark:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5 text-red-500" />
              <span>Video ko'rish</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            <button 
              onClick={() => handleStatsClick('graduates')}
              className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-black/20 dark:border-white/20 hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300 hover:scale-105"
            >
              <Users className="w-8 h-8 text-black dark:text-white mx-auto mb-3" />
              <div className="text-2xl font-bold text-black dark:text-white mb-1">1500+</div>
              <div className="text-sm text-black/70 dark:text-white/70">Bitiruvchilar</div>
            </button>
            
            <button 
              onClick={() => handleStatsClick('courses')}
              className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-black/20 dark:border-white/20 hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="w-8 h-8 text-black dark:text-white mx-auto mb-3" />
              <div className="text-2xl font-bold text-black dark:text-white mb-1">12</div>
              <div className="text-sm text-black/70 dark:text-white/70">Kurs yo'nalishlari</div>
            </button>
            
            <button 
              onClick={() => handleStatsClick('employment')}
              className="bg-white/60 dark:bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-black/20 dark:border-white/20 hover:bg-white/80 dark:hover:bg-black/80 transition-all duration-300 hover:scale-105"
            >
              <Award className="w-8 h-8 text-black dark:text-white mx-auto mb-3" />
              <div className="text-2xl font-bold text-black dark:text-white mb-1">95%</div>
              <div className="text-sm text-black/70 dark:text-white/70">Ishga joylashish</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};