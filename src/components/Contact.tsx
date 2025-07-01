import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  Instagram,
  Send as TelegramIcon,
  Clock,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: "", phone: "", course: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleMapClick = () => {
    const address = "Фархадский рынок, 100123, Tashkent";
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/place/IT+HOUSE/@41.2858225,69.1860677,17z/data=!3m1!4b1!4m6!3m5!1s0x38ae89ade0861433:0xa6470d048143a930!8m2!3d41.2858225!4d69.1860677!16s%2Fg%2F11rs06tlg2?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D=${encodedAddress}`,
      "_blank"
    );
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      telegram: "https://t.me/ithouse_edu",
      instagram: "https://www.instagram.com/ithouse_edu?igsh=N2JnMDhoOWZqMmkx",
    };
    window.open(urls[platform as keyof typeof urls], "_blank");
  };

  const courses = [
    "Front-end Development",
    "AI",
    "Grafik Dizayn",
    "Python Dasturlash",
    "Ingliz tili IT uchun",
    "Digital Marketing",
    "Mobile Development",
    "Backend Development",
    "Cybersecurity",
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-3xl rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-red-500/10 to-red-700/10 rounded-2xl -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Biz bilan bog'laning
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Savollaringiz bormi yoki kursga yozilmoqchimisiz? Biz bilan
              bog'laning!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                  Bepul maslahat oling
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Ma'lumotlaringizni qoldiring, biz siz bilan bog'lanamiz
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-700 dark:text-green-400 text-sm">
                    Ma'lumotlaringiz yuborildi! Tez orada siz bilan bog'lanamiz.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Ism va Familiya *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Ismingizni kiriting"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Telefon raqam *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="+998 (90) 123-45-67"
                  />
                </div>

                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Qiziqtirgan kurs
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Kursni tanlang</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Qo'shimcha xabar
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Savollaringiz yoki qo'shimcha ma'lumotlar..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 disabled:from-slate-400 disabled:to-slate-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Yuborilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Yuborish</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                  Aloqa ma'lumotlari
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-1">
                        Telefon
                      </h4>
                      <button
                        onClick={() => handlePhoneCall("+998711234567")}
                        className="text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors block"
                      >
                        +998 90 035 27 27
                      </button>
                      <button
                        onClick={() => handlePhoneCall("+998909876543")}
                        className="text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors block"
                      >
                        +998 78 113 78 01
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-1">
                        Email
                      </h4>
                      <button
                        onClick={() => handleEmailClick("info@itschool.uz")}
                        className="text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors block"
                      >
                        ithouseedu@gmail.com
                      </button>
                      <button
                        onClick={() => handleEmailClick("admin@itschool.uz")}
                        className="text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors block"
                      >
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-1">
                        Manzil
                      </h4>
                      <button
                        onClick={handleMapClick}
                        className="text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors text-left flex items-start space-x-1"
                      >
                        <span>
                          Фархадский рынок, 100123, Tashkent
                        </span>
                        <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white mb-1">
                        Ish vaqti
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Dushanba - Shanba: 9:00 - 21:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-red-50 to-white dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 border border-slate-200 dark:border-slate-600">
                <h3 className="text-xl font-bold text-black dark:text-white mb-6">
                  Ijtimoiy tarmoqlarda kuzating
                </h3>

                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => handleSocialClick("telegram")}
                    className="group w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <TelegramIcon className="w-6 h-6 text-white" />
                  </button>

                  <button
                    onClick={() => handleSocialClick("instagram")}
                    className="group w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </button>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Yangiliklar, maslahatlar va qiziqarli kontentlar uchun bizni
                  kuzating!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
