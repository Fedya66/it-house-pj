import React, { useState } from 'react';
import { Code, Palette, MoonIcon as Python, Globe, TrendingUp, Smartphone, Database, Shield, Camera, Music, X, Clock, Users, Award } from 'lucide-react';

export const Courses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const courses = [
    {
      icon: Code,
      title: "Front-end Development",
      description: "HTML, CSS, JavaScript, React va zamonaviy web texnologiyalarini o'rganing",
      duration: "6 oy",
      level: "Boshlang'ich",
      price: "1,200,000 so'm",
      gradient: "from-red-500 to-red-700",
      fullDescription: "Zamonaviy web saytlar yaratishni o'rganing. HTML5, CSS3, JavaScript ES6+, React, TypeScript va boshqa zamonaviy texnologiyalar bilan tanishing.",
      curriculum: ["HTML5 va CSS3 asoslari", "JavaScript ES6+", "React va Redux", "TypeScript", "Git va GitHub", "Responsive Design"],
      requirements: "Kompyuter bilan ishlash ko'nikmasi"
    },
    {
      icon: Palette,
      title: "Ai, Suniy intellekt",
      description: " AI asoslari, neyron tarmoqlar, mashinaviy o‘rganish",
      duration: "4 oy",
      level: "Boshlang'ich",
      price: "1,000,000 so'm",
      gradient: "from-red-600 to-red-800",
      fullDescription: "Foydalanuvchi tajribasi va interfeys dizaynini professional darajada o'rganing. Figma, Adobe XD va boshqa dizayn vositalarini o'zlashtiring.",
      curriculum: ["Dizayn asoslari", "Figma va Adobe XD", "Wireframing va Prototyping", "User Research", "Usability Testing", "Design Systems"],
      requirements: "Ijodiy fikrlash va estetik his"
    },
    {
      icon: Camera,
      title: "Grafik Dizayn",
      description: "Adobe Photoshop, Illustrator orqali professional grafik dizayn",
      duration: "3 oy",
      level: "Boshlang'ich",
      price: "800,000 so'm",
      gradient: "from-red-400 to-red-600",
      fullDescription: "Adobe Creative Suite yordamida professional grafik dizayn yaratishni o'rganing. Logo, brending, print va digital dizayn.",
      curriculum: ["Adobe Photoshop", "Adobe Illustrator", "Logo dizayn", "Brending", "Print dizayn", "Digital marketing materials"],
      requirements: "Ijodiy qobiliyat va kompyuter ko'nikmasi"
    },
    {
      icon: Python,
      title: "Python Dasturlash",
      description: "Python tilida dasturlash, web development, ma'lumotlar tahlili",
      duration: "5 oy",
      level: "O'rta",
      price: "1,100,000 so'm",
      gradient: "from-red-500 to-red-700",
      fullDescription: "Python dasturlash tilini o'rganing. Web development, data science va automation uchun Python dan foydalanish.",
      curriculum: ["Python asoslari", "Django/Flask", "Data Science", "Machine Learning asoslari", "API yaratish", "Database bilan ishlash"],
      requirements: "Dasturlash asoslari bilimi tavsiya etiladi"
    },
    {
      icon: Globe,
      title: "Ingliz tili IT uchun",
      description: "IT sohasida kerakli ingliz tili bilimlarini o'zlashtiring",
      duration: "4 oy",
      level: "Har qanday",
      price: "600,000 so'm",
      gradient: "from-red-600 to-red-800",
      fullDescription: "IT sohasida ishlash uchun zarur bo'lgan ingliz tili ko'nikmalarini rivojlantiring. Texnik terminlar, presentation va communication skills.",
      curriculum: ["IT terminologiya", "Technical Writing", "Presentation Skills", "Interview Preparation", "Email Communication", "Documentation"],
      requirements: "Ingliz tilining boshlang'ich darajasi"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "SMM, SEO, Google Ads va raqamli marketing strategiyalari",
      duration: "3 oy",
      level: "Boshlang'ich",
      price: "900,000 so'm",
      gradient: "from-red-500 to-red-700",
      fullDescription: "Raqamli marketing strategiyalarini o'rganing. SMM, SEO, kontekstli reklama va analytics bilan tanishing.",
      curriculum: ["SMM strategiyalar", "SEO optimizatsiya", "Google Ads", "Facebook/Instagram Ads", "Content Marketing", "Analytics"],
      requirements: "Internet va ijtimoiy tarmoqlar bilan tanishlik"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Android va iOS uchun mobil ilovalar yaratish, React Native",
      duration: "7 oy",
      level: "O'rta",
      price: "1,400,000 so'm",
      gradient: "from-red-600 to-red-800",
      fullDescription: "React Native yordamida cross-platform mobil ilovalar yaratishni o'rganing. Android va iOS uchun bir vaqtda ishlaydigan ilovalar.",
      curriculum: ["React Native asoslari", "Navigation", "State Management", "API Integration", "Native Modules", "App Store deployment"],
      requirements: "JavaScript va React bilimi"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Server-side dasturlash, ma'lumotlar bazasi, API yaratish",
      duration: "6 oy",
      level: "O'rta",
      price: "1,300,000 so'm",
      gradient: "from-slate-600 to-black",
      fullDescription: "Server-side dasturlashni o'rganing. Node.js, Express, ma'lumotlar bazalari va RESTful API yaratish.",
      curriculum: ["Node.js va Express", "Database design", "RESTful APIs", "Authentication", "Testing", "Deployment"],
      requirements: "JavaScript asoslari va dasturlash tajribasi"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Axborot xavfsizligi, etik xakerlik va himoya tizimlari",
      duration: "5 oy",
      level: "Yuqori",
      price: "1,500,000 so'm",
      gradient: "from-red-700 to-black",
      fullDescription: "Axborot xavfsizligi sohasida mutaxassis bo'ling. Ethical hacking, penetration testing va security audit.",
      curriculum: ["Network Security", "Ethical Hacking", "Penetration Testing", "Security Audit", "Incident Response", "Compliance"],
      requirements: "Tarmoq va tizim administratsiyasi bilimi"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Boshlang\'ich': return 'bg-white text-black dark:bg-slate-800 dark:text-white border border-slate-300 dark:border-slate-600';
      case 'O\'rta': return 'bg-slate-100 text-black dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-600';
      case 'Yuqori': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-300 dark:border-red-600';
      default: return 'bg-white text-black dark:bg-slate-800 dark:text-white border border-slate-300 dark:border-slate-600';
    }
  };

  const openCourseModal = (course: any) => {
    setSelectedCourse(course);
  };

  const closeCourseModal = () => {
    setSelectedCourse(null);
  };

  const handleEnrollment = (courseName: string) => {
    // Scroll to contact section for enrollment
    scrollToSection('contact');
    closeCourseModal();
  };

  return (
    <section id="courses" className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-3xl rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-red-500/10 to-red-700/10 rounded-2xl -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Bizning kurslar</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Zamonaviy IT sohasining barcha yo'nalishlarida professional bilim va ko'nikmalarni o'zlashtiring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                <div className="absolute inset-[1px] bg-white dark:bg-slate-900 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${course.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <course.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{course.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-black dark:text-white">
                        {course.price}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">oyiga</div>
                    </div>
                    <button 
                      onClick={() => openCourseModal(course)}
                      className={`px-6 py-3 bg-gradient-to-r ${course.gradient} text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105`}
                    >
                      Batafsil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Kurs tanlashda qiynalayapsizmi?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Bizning mutaxassislarimiz sizga eng mos kursni tanlashda yordam berishadi
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Bepul maslahat olish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${selectedCourse.gradient} rounded-xl flex items-center justify-center`}>
                    <selectedCourse.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">{selectedCourse.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(selectedCourse.level)}`}>
                      {selectedCourse.level}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={closeCourseModal}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-slate-500" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 text-center">
                  <Clock className="w-6 h-6 text-red-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-black dark:text-white">{selectedCourse.duration}</div>
                  <div className="text-xs text-slate-500">Davomiyligi</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-black dark:text-white">12-15</div>
                  <div className="text-xs text-slate-500">Guruh hajmi</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 text-center">
                  <Award className="w-6 h-6 text-red-700 mx-auto mb-2" />
                  <div className="text-sm font-medium text-black dark:text-white">Sertifikat</div>
                  <div className="text-xs text-slate-500">Tugagach</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Kurs haqida</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{selectedCourse.fullDescription}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">O'quv dasturi</h4>
                <ul className="space-y-2">
                  {selectedCourse.curriculum.map((item: string, index: number) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-600 dark:text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Talablar</h4>
                <p className="text-slate-600 dark:text-slate-400">{selectedCourse.requirements}</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-black dark:text-white">{selectedCourse.price}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">oyiga to'lov</div>
                </div>
                <button 
                  onClick={() => handleEnrollment(selectedCourse.title)}
                  className={`px-8 py-4 bg-gradient-to-r ${selectedCourse.gradient} text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105`}
                >
                  Kursga yozilish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};