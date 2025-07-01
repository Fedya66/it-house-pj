import React from "react";
import {
  Code,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Send,
  Heart,
  ExternalLink,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      telegram: "https://t.me/ithouse_edu",
      instagram: "https://www.instagram.com/ithouse_edu?igsh=N2JnMDhoOWZqMmkx",
      creator: "https://www.instagram.com/fedya_cww?igsh=MTJyaWppb2FzcHY1ZQ==",
    };
    window.open(urls[platform as keyof typeof urls], "_blank");
  };

  const handleContactClick = (type: string, value: string) => {
    switch (type) {
      case "phone":
        window.location.href = `tel:${value}`;
        break;
      case "email":
        window.location.href = `mailto:${value}`;
        break;
      case "map":
        const address = "Фархадский рынок, 100123, Tashkent";
        const encodedAddress = encodeURIComponent(address);
        window.open(
          `https://www.google.com/maps/place/IT+HOUSE/@41.2858225,69.1860677,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae89ade0861433:0xa6470d048143a930!8m2!3d41.2858225!4d69.1860677!16s%2Fg%2F11rs06tlg2?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D=${encodedAddress}`,
          "_blank"
        );
        break;
    }
  };

  const handleCourseClick = (courseName: string) => {
    // Store the course name in localStorage and scroll to courses
    localStorage.setItem("selectedCourse", courseName);
    scrollToSection("courses");
  };

  return (
    <footer className="bg-black dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity"
            >
              <div className="relative">
                <Code className="w-8 h-8 text-red-500" />
                <GraduationCap className="w-4 h-4 text-red-600 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                IT HOUSE
              </span>
            </button>

            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Zamonaviy IT sohasida professional mutaxassislar tayyorlashga
              ixtisoslashgan ta'lim markazi. Bizning maqsadimiz - har bir
              o'quvchini muvaffaqiyatli karyeraga tayyorlash.
            </p>

            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick("telegram")}
                className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleSocialClick("instagram")}
                className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">
              Tezkor havolalar
            </h3>
            <ul className="space-y-3">
              {[
                { id: "about", label: "Biz haqimizda" },
                { id: "courses", label: "Kurslar" },
                { id: "team", label: "Ustozlar" },
                { id: "reviews", label: "Fikrlar" },
                { id: "faq", label: "FAQ" },
                { id: "contact", label: "Aloqa" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-red-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Aloqa</h3>
            <div className="space-y-4">
              <button
                onClick={() => handleContactClick("map", "")}
                className="flex items-start space-x-3 text-left hover:text-red-400 transition-colors group"
              >
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-400 group-hover:text-red-400 text-sm flex items-start space-x-1">
                    <span>Фархадский рынок, 100123, Tashkent</span>
                    <ExternalLink className="w-3 h-3 mt-1 flex-shrink-0" />
                  </p>
                </div>
              </button>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div className="text-slate-400 text-sm space-y-1">
                  <button
                    onClick={() => handleContactClick("phone", "+998711234567")}
                    className="block hover:text-red-400 transition-colors"
                  >
                    +998 90 035 27 27
                  </button>
                  <button
                    onClick={() => handleContactClick("phone", "+998909876543")}
                    className="block hover:text-red-400 transition-colors"
                  >
                    +998 78 113 78 01
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div className="text-slate-400 text-sm">
                  <button
                    onClick={() =>
                      handleContactClick("email", "info@itschool.uz")
                    }
                    className="block hover:text-red-400 transition-colors"
                  >
                    ithouseedu@gmail.com
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Courses */}
        <div className="py-8 border-t border-slate-800">
          <h3 className="text-lg font-bold mb-6 text-white">Mashhur kurslar</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Front-end Development",
              "AI",
              "Python",
              "Digital Marketing",
              "Ingliz tili",
              "Grafik Dizayn",
            ].map((course, index) => (
              <button
                key={index}
                onClick={() => handleCourseClick(course)}
                className="bg-slate-800 hover:bg-red-700 rounded-lg px-3 py-2 text-center transition-colors duration-200"
              >
                <span className="text-slate-300 hover:text-white text-sm">
                  {course}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p className="text-slate-400 text-sm">
                © {currentYear} IT HOUSE. Barcha huquqlar himoyalangan.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-slate-400 text-sm">Ishlab chiqildi</span>
              <button
                onClick={() => handleSocialClick("creator")}
                className=" hover:text-red-600   justify-center transition-colors duration-200"
              >
                fedya_cww
              </button>
              <span className="text-slate-400 text-sm">tomonidan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
