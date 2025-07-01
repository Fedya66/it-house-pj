import React, { useState } from 'react';
import jonibek from '../photos/jonibek.jpg'
import jaloliddin from '../photos/jaloliddin.jpg'
import xumoyun from '../photos/xumoyun.jpg'
import laylo from '../photos/laylo.jpg'
import sevara from '../photos/sevara.jpg'
import nigina from '../photos/nigina.jpg'
import { Star, Award, Users, Code, X, Mail, Phone, Linkedin, Github } from 'lucide-react';

export const Team: React.FC = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<any>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teachers = [
    {
      name: "Jonibek Turapov",
      role: "Senior Full-stack Developer",
      speciality: "React, Node.js, TypeScript",
      experience: "5+ yil tajriba",
      image: jonibek,
      rating: 4.9,
      students: 120,
      bio: "Google va Microsoft kompaniyalarida ishlagan tajribali dasturchi. 50+ loyihani muvaffaqiyatli yakunlagan.",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Docker"],
      achievements: ["Google Developer Expert", "Microsoft MVP", "Tech Lead @ Uzum"],
      email: "sardor@itschool.uz",
      linkedin: "linkedin.com/in/sardorkarimov"
    },
    {
      name: "Laylo",
      role: "Call Center",
      speciality: "Figma, Adobe Creative Suite",
      experience: "4+ yil tajriba",
      image: laylo,
      rating: 4.8,
      students: 95,
      bio: "Yirik startaplar uchun 100+ dizayn loyihalarini amalga oshirgan. UX Research mutaxassisi.",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "User Research", "Prototyping"],
      achievements: ["Adobe Certified Expert", "Behance Featured Artist", "Design Lead @ Payme"],
      email: "nilufar@itschool.uz",
      linkedin: "linkedin.com/in/nilufarusmanova"
    },
    {
      name: "Xumoyun",
      role: "Python Developer",
      speciality: "Django, Flask, Data Science",
      experience: "6+ yil tajriba",
      image: xumoyun,
      rating: 4.9,
      students: 85,
      bio: "Machine Learning va AI sohasida ixtisoslashgan. Bir nechta startup loyihalarini yaratgan.",
      skills: ["Python", "Django", "Flask", "TensorFlow", "PostgreSQL", "Docker"],
      achievements: ["Kaggle Expert", "Python Software Foundation Member", "AI Researcher"],
      email: "bobur@itschool.uz",
      linkedin: "linkedin.com/in/boburrahimov"
    },
    {
      name: "Nigina",
      role: "Call Center",
      speciality: "SMM, SEO, Google Ads",
      experience: "3+ yil tajriba",
      image: nigina,
      rating: 4.7,
      students: 110,
      bio: "Raqamli marketing sohasida 200+ muvaffaqiyatli kampaniya o'tkazgan. SMM strategist.",
      skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics", "Content Strategy", "SMM"],
      achievements: ["Google Ads Certified", "Facebook Blueprint Certified", "Marketing Lead @ Olx"],
      email: "malika@itschool.uz",
      linkedin: "linkedin.com/in/malikatursunova"
    },
    {
      name: "Jaloliddin Abdurahmonov",
      role: "Mobile App Developer",
      speciality: "React Native, Flutter",
      experience: "4+ yil tajriba",
      image: jaloliddin,
      rating: 4.8,
      students: 75,
      bio: "App Store va Google Play'da 20+ mobil ilova nashr etgan. Cross-platform development mutaxassisi.",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase", "Redux"],
      achievements: ["Google Developer Expert", "App Store Featured Developer", "Mobile Lead @ Uzcard"],
      email: "jasur@itschool.uz",
      linkedin: "linkedin.com/in/jasurabdullayev"
    },
    {
      name: "Sevara Jo'rayeva",
      role: "English Language Teacher",
      speciality: "IT English, IELTS",
      experience: "7+ yil tajriba",
      image: sevara,
      rating: 4.9,
      students: 150,
      bio: "IELTS 8.5 ball. Cambridge sertifikatiga ega. 500+ o'quvchini xalqaro sertifikatlarga tayyorlagan.",
      skills: ["IELTS Preparation", "Business English", "Technical Writing", "Presentation Skills", "Interview Prep"],
      achievements: ["Cambridge CELTA", "IELTS 8.5", "British Council Certified", "English Lead @ EPAM"],
      email: "zarina@itschool.uz",
      linkedin: "linkedin.com/in/zarinasultanova"
    }
  ];

  const openTeacherModal = (teacher: any) => {
    setSelectedTeacher(teacher);
  };

  const closeTeacherModal = () => {
    setSelectedTeacher(null);
  };

  const handleContactTeacher = () => {
    scrollToSection('contact');
    closeTeacherModal();
  };

  const handleApplyAsTeacher = () => {
    // You can implement a form or redirect to application page
    alert("CV yuborish uchun info@itschool.uz manziliga murojaat qiling!");
  };

  return (
    <section id="team" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-20 h-20 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-2xl rotate-45"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-br from-red-500/10 to-red-700/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Bizning ustozlar</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Professional tajribaga ega bo'lgan ustozlarimiz sizga sifatli ta'lim berishga tayyor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-red-500 to-red-700 p-1">
                      <img 
                        src={teacher.image} 
                        alt={teacher.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    {teacher.name}
                  </h3>
                  <p className="text-red-500 font-semibold mb-2">{teacher.role}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{teacher.speciality}</p>
                  
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-red-500 fill-current" />
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{teacher.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{teacher.students} o'quvchi</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-xl p-3 mb-6">
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">{teacher.experience}</p>
                  </div>
                  
                  <button 
                    onClick={() => openTeacherModal(teacher)}
                    className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg group-hover:scale-105"
                  >
                    Profil ko'rish
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-red-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <Code className="w-12 h-12 text-red-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-black dark:text-white mb-4">
                Ustoz bo'lmoqchimisiz?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                Agar siz IT sohasida tajribali mutaxassis bo'lsangiz va bilimingizni boshqalar bilan 
                bo'lishni istasangiz, bizning jamoaga qo'shiling!
              </p>
              <button 
                onClick={handleApplyAsTeacher}
                className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                CV yuborish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Teacher Detail Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-red-500 to-red-700 p-1">
                    <img 
                      src={selectedTeacher.image} 
                      alt={selectedTeacher.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">{selectedTeacher.name}</h3>
                    <p className="text-red-500 font-semibold">{selectedTeacher.role}</p>
                  </div>
                </div>
                <button 
                  onClick={closeTeacherModal}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-slate-500" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 text-center">
                  <Star className="w-6 h-6 text-red-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-black dark:text-white">{selectedTeacher.rating}</div>
                  <div className="text-xs text-slate-500">Reyting</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-black dark:text-white">{selectedTeacher.students}</div>
                  <div className="text-xs text-slate-500">O'quvchilar</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 text-center">
                  <Award className="w-6 h-6 text-red-700 mx-auto mb-2" />
                  <div className="text-sm font-medium text-black dark:text-white">{selectedTeacher.experience}</div>
                  <div className="text-xs text-slate-500">Tajriba</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Biografiya</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{selectedTeacher.bio}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Ko'nikmalar</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTeacher.skills.map((skill: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Yutuqlar</h4>
                <ul className="space-y-2">
                  {selectedTeacher.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Award className="w-4 h-4 text-red-500" />
                      <span className="text-slate-600 dark:text-slate-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <a 
                    href={`mailto:${selectedTeacher.email}`}
                    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </a>
                  <a 
                    href={`https://${selectedTeacher.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </a>
                </div>
                <button 
                  onClick={handleContactTeacher}
                  className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Bog'lanish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};