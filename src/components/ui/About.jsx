import { useState } from "react";
import {
  CheckCircle,
  Award,
  Users,
  Target,
  Phone,
  MessageCircle,
  Mail,
  Briefcase,
  Sparkles,
} from "lucide-react";
import C from "../../assets/C.jpg";

export default function About() {
  const [isVisible] = useState(true);
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-6 h-6 text-[#D4AF37]" />,
      title: "Clean & Detailed Workmanship",
      description: "Meticulous attention to every detail",
    },
    {
      icon: <Award className="w-6 h-6 text-[#D4AF37]" />,
      title: "Quality Materials Only",
      description: "Premium materials for lasting results",
    },
    {
      icon: <Users className="w-6 h-6 text-[#D4AF37]" />,
      title: "Experienced Professionals",
      description: "Skilled team with 15+ years expertise",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#D4AF37]" />,
      title: "Timely Project Completion",
      description: "On-time delivery, every time",
    },
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#111827] text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#D4AF37]/30 rounded-full animate-spin-slow hidden lg:block"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white/20 rounded-full animate-bounce hidden lg:block"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37]/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 animate-bounce-slow">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#D4AF37] tracking-wide">
                BUILDING EXCELLENCE SINCE 2009
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              <span className="block text-white">About</span>
              <span className="block text-[#D4AF37] mt-1 sm:mt-2 animate-shimmer">
                Gold Coast Builders
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed px-4">
              Crafting homes, building communities, and delivering excellence
              across Ghana.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div
          className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 text-center max-w-5xl mx-auto">
            At{" "}
            <span className="font-bold text-[#D4AF37]">
              Gold Coast Builders
            </span>
            , we're passionate about crafting homes, building communities, and
            exceeding expectations. With a commitment to quality, safety, and
            innovation, we're transforming Ghana's landscape one project at a
            time. Our team of experts combines local expertise with modern
            construction techniques to deliver exceptional results — on time,
            every time.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Mission Card */}
            <div
              className={`group bg-linear-to-r from-blue-500 to-blue-700 shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl text-white ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-white/20 p-2.5 sm:p-3 rounded-xl mr-3 sm:mr-4 group-hover:bg-white/30 transition-colors shrink-0">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Our Mission
                </h2>
              </div>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base lg:text-lg">
                To deliver high-quality construction services while prioritizing
                safety, integrity, and customer satisfaction in every project we
                undertake.
              </p>
            </div>

            {/* Vision Card */}
            <div
              className={`group bg-linear-to-r from-orange-500 to-orange-700 shadow-lg rounded-2xl p-6 sm:p-8 lg:p-10 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl text-white ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-white/20 p-2.5 sm:p-3 rounded-xl mr-3 sm:mr-4 group-hover:bg-white/30 transition-colors shrink-0">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  Our Vision
                </h2>
              </div>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base lg:text-lg">
                Crafting Homes, Building Legacy. To be Ghana's most trusted and
                innovative construction company, setting new standards of
                excellence in every project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div
          className={`text-center mb-10 sm:mb-12 lg:mb-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#111827] mb-3 sm:mb-4">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            Experience the Gold Coast difference
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className={`group bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#111827] mb-2 group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Company Values */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#111827] mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                value: "Integrity",
                description: "Honest and transparent in all dealings",
                icon: "🤝",
                gradient: "from-blue-500 to-blue-700",
              },
              {
                value: "Excellence",
                description: "Committed to the highest standards",
                icon: "⭐",
                gradient: "from-purple-500 to-purple-700",
              },
              {
                value: "Innovation",
                description: "Embracing modern techniques",
                icon: "💡",
                gradient: "from-cyan-500 to-cyan-700",
              },
              {
                value: "Safety",
                description: "Zero-compromise on safety protocols",
                icon: "🛡️",
                gradient: "from-red-500 to-red-700",
              },
              {
                value: "Reliability",
                description: "Dependable service every time",
                icon: "✅",
                gradient: "from-orange-500 to-orange-700",
              },
              {
                value: "Customer Focus",
                description: "Your satisfaction is our priority",
                icon: "❤️",
                gradient: "from-pink-500 to-pink-700",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group bg-linear-to-r ${item.gradient} p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer text-white`}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {item.value}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm lg:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${C})`,
          }}
        >
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-[#111827]/90"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#D4AF37]/30 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-16 sm:right-32 w-10 h-10 sm:w-12 sm:h-12 border-4 border-white/20 rounded-full animate-bounce hidden lg:block"></div>

        {/* Content Section */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Ready to Build Your Dream?
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Hire us today and enjoy reliable workmanship, quality materials, and
            timely project delivery.
          </p>

          {/* CTA Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {/* Call Button */}
            <button
              onClick={() => setShowPhoneOptions(true)}
              className="group relative bg-[#D4AF37] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 flex items-center justify-center space-x-2 overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-r from-yellow-400 to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <Phone
                size={18}
                className="relative z-10 group-hover:rotate-12 transition-transform sm:w-5 sm:h-5 shrink-0"
              />

              {/* Text */}
              <span className="relative z-10">Call Now</span>
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/233594068020?text=Hello%20Gold%20Coast%20Builders%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-green-700 transition-all duration-300 shadow-2xl hover:shadow-green-600/50 hover:scale-105 flex items-center justify-center space-x-2 overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon */}
              <MessageCircle
                size={18}
                className="relative z-10 group-hover:rotate-12 transition-transform sm:w-5 sm:h-5 shrink-0"
              />

              {/* Text */}
              <span className="relative z-10">WhatsApp Us</span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:goldcoastbuilders1@gmail.com"
              className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-[#111827] hover:border-white transition-all duration-300 shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
            >
              {/* Icon */}
              <Mail
                size={18}
                className="group-hover:rotate-12 transition-transform sm:w-5 sm:h-5 shrink-0"
              />

              {/* Text */}
              <span>Email Us</span>
            </a>
          </div>
          {/* End CTA Buttons Container */}
        </div>
        {/* End Content Section */}
      </div>
      {/* End Call To Action */}

      {/* Phone Number Selection Modal */}
      {showPhoneOptions && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-scale-up">
            <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-4 sm:mb-6 text-center">
              Choose a Number to Call
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="tel:0594068020"
                className="block bg-[#D4AF37] text-[#111827] px-6 py-3 rounded-lg font-bold text-lg text-center hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => setShowPhoneOptions(false)}
              >
                0594 068 020
              </a>
              <a
                href="tel:0209099019"
                className="block bg-[#D4AF37] text-[#111827] px-6 py-3 rounded-lg font-bold text-lg text-center hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => setShowPhoneOptions(false)}
              >
                0209 099 019
              </a>
            </div>
            <button
              onClick={() => setShowPhoneOptions(false)}
              className="mt-4 sm:mt-6 w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
