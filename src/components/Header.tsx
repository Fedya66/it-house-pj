import logo from '../photos/ithus.png'
import React, { useState, useEffect } from "react";
import { Menu, X, Code, GraduationCap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";


export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSiteClick = (platform: string) => {
    const urls = {
      muddatlitolov: "https://bilgi.uz/uz/educational-centers/it/it-house-edu/",
      certificate: "https://ithouseid.uz/",
      online: "https://ithouseonline.uz/uz",
    };
    window.open(urls[platform as keyof typeof urls], "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: "about", label: "Biz haqimizda" },
    { id: "courses", label: "Kurslar" },
    { id: "team", label: "Ustozlar" },
    { id: "reviews", label: "Fikrlar" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Aloqa" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-black/80 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="relative">
              <img src={logo} alt="" className='w-8 h-8'/>
            </div>
            <span className="text-xl font-bold text-black dark:text-white tracking-tight">
              IT HOUSE
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-black/70 dark:text-white/70 hover:text-red-500 text-sm transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleSiteClick("muddatlitolov")}
              className="hover:text-white hover:bg-red-700 rounded-lg px-3 py-2 text-center transition-colors duration-200"
            >
              Muddatli to'lov
            </button>
            <button
              onClick={() => handleSiteClick("certificate")}
              className=" hover:text-white hover:bg-red-700 rounded-lg px-3 py-2 text-center transition-colors duration-200"
            >
              Sertifikat
            </button>
            <button
              onClick={() => handleSiteClick("online")}
              className=" hover:text-white hover:bg-red-700 rounded-lg px-3 py-2 text-center transition-colors duration-200"
            >
              Online
            </button>
            <ThemeToggle />
          </nav>

          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black/70 dark:text-white/70 hover:text-red-500"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-black/20 dark:border-white/20 pt-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-black/70 dark:text-white/70 hover:text-red-500 transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
