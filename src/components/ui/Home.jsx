import { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowRight,
  Building2,
  Sparkles,
} from "lucide-react";
import C from "../../assets/C.jpg";
import G1 from "../../assets/G1.mp4";
import header from "../../assets/header.mp4";
import D from "../../assets/D.jpg";
import C5 from "../../assets/C5.jpg";
import F from "../../assets/F.jpg";
import F1 from "../../assets/F1.jpg";
import O from "../../assets/O.jpg";
import S from "../../assets/S.jpg";
import { Link } from "react-router-dom";
import G2 from "../../assets/G2.mp4";
import G3 from "../../assets/G3.mp4";
import G4 from "../../assets/G4.mp4";

const ROTATING_TEXTS = [
  "Transform Your Vision Into Reality",
  "Building Dreams, Creating Homes",
  "Where Quality Meets Excellence",
];

const Home = () => {
  const [isVisible] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section with Background Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={header} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#111827]/95 via-[#111827]/85 to-[#111827]/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="w-full max-w-4xl">
            {/* Animated Badge */}
            <div
              className={`inline-flex items-center space-x-2 bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37]/50 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-[#D4AF37] tracking-wide">
                15+ YEARS OF EXCELLENCE
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="block text-white">Crafting Homes,</span>
              <span className="block text-[#D4AF37] mt-1 sm:mt-2">
                Building Legacy
              </span>
            </h1>

            {/* Rotating Subheading */}
            <div
              className={`min-h-15 sm:min-h-20 mb-6 sm:mb-8 transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 font-light leading-relaxed transition-all duration-700">
                {ROTATING_TEXTS[currentText]}
              </p>
            </div>

            {/* Description */}
            <p
              className={`text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Ghana's premier construction company delivering unmatched quality,
              innovation, and integrity in every project. From residential
              masterpieces to commercial landmarks, we bring your architectural
              dreams to life.
            </p>

            {/* Enhanced CTA Buttons */}
            <div
              className={`transform transition-all duration-1000 delay-800 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                <a
                  href="tel:0594068020"
                  className="group relative bg-[#D4AF37] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center sm:justify-start space-x-3 shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-yellow-400 to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Phone
                    size={20}
                    className="relative z-10 group-hover:rotate-12 transition-transform shrink-0"
                  />
                  <div className="relative z-10 text-left">
                    <span className="block text-xs sm:text-sm font-normal opacity-80">
                      Call Us Now
                    </span>
                    <span className="block text-sm sm:text-base">
                      0594 068 020
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/233594068020?text=Hello%20Gold%20Coast%20Builders%2C%20I%27m%20interested%20in%20discussing%20a%20construction%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center sm:justify-start space-x-3 shadow-2xl hover:shadow-green-600/50 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <MessageCircle
                    size={20}
                    className="relative z-10 group-hover:rotate-12 transition-transform shrink-0"
                  />
                  <div className="relative z-10 text-left">
                    <span className="block text-xs sm:text-sm font-normal opacity-90">
                      WhatsApp Chat
                    </span>
                    <span className="block text-sm sm:text-base">
                      Quick Response
                    </span>
                  </div>
                </a>
              </div>

              {/* Secondary Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="mailto:goldcoastbuilders1@gmail.com?subject=Project%20Inquiry&body=Hello%20Gold%20Coast%20Builders%2C%0A%0AI%20am%20interested%20in%20discussing%20a%20construction%20project.%0A%0AProject%20Type%3A%20%0ALocation%3A%20%0ABudget%20Range%3A%20%0A%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you."
                  className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/50 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-white hover:text-[#111827] hover:border-white transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <Mail
                    size={18}
                    className="group-hover:rotate-12 transition-transform shrink-0"
                  />
                  <span>Send Email</span>
                </a>

                <Link
                  to="/projects"
                  className="group bg-white/10 backdrop-blur-md text-white border-2 border-[#D4AF37]/50 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-[#D4AF37] hover:text-[#111827] hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <Building2 size={18} className="shrink-0" />
                  <span>View Projects</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform shrink-0"
                  />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20">
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0"></div>
                    <span className="font-medium">Available 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse shrink-0"></div>
                    <span className="font-medium">80+ Projects Completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shrink-0"></div>
                    <span className="font-medium">Licensed & Insured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-2">
                15+
              </div>
              <div className="text-gray-300 text-sm sm:text-base md:text-lg">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-2">
                80+
              </div>
              <div className="text-gray-300 text-sm sm:text-base md:text-lg">
                Projects Done
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-2">
                100%
              </div>
              <div className="text-gray-300 text-sm sm:text-base md:text-lg">
                Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] mb-2">
                30+
              </div>
              <div className="text-gray-300 text-sm sm:text-base md:text-lg">
                Expert Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-3 sm:mb-4">
              Our Latest Projects
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Quality construction that speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                id: 1,
                title: "Modern Villa Estate",
                type: "Residential Construction",
                image: F,
              },
              {
                id: 2,
                title: "Executive Office Complex",
                type: "Commercial Building",
                image: O,
              },
              {
                id: 3,
                title: "Luxury Family Home",
                type: "Residential Construction",
                image: D,
              },
              {
                id: 4,
                title: "Shopping Center",
                type: "Commercial Development",
                image: S,
              },
              {
                id: 5,
                title: "Contemporary Residence",
                type: "Residential Construction",
                image: F1,
              },
              {
                id: 6,
                title: "Corporate Headquarters",
                type: "Commercial Building",
                image: C5,
              },
            ].map((project) => (
              <div
                key={project.id}
                className="relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-[#111827] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    {project.type}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 bg-[#D4AF37] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:scale-105"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-3 sm:mb-4">
              See Our Work in Action
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Watch how we transform visions into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                id: 1,
                src: G1,
                title: "Construction Progress",
                description: "Time-lapse of residential building",
              },
              {
                id: 2,
                src: G2,
                title: "Foundation Work",
                description: "Professional foundation laying",
              },
              {
                id: 3,
                src: G3,
                title: "Roofing Installation",
                description: "Expert roofing techniques",
              },
              {
                id: 4,
                src: G4,
                title: "Interior Finishing",
                description: "Premium finishing touches",
              },
            ].map((video, index) => (
              <div
                key={video.id}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#111827]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">
                      {video.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-200">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Play Icon Indicator */}
                <div className="absolute top-4 right-4 bg-[#D4AF37]/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-[#111827]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Comprehensive construction solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                name: "Building Construction",
                icon: "🏗️",
                details:
                  "End-to-end residential and commercial builds, including planning, permits, structural work, and turnkey delivery.",
              },
              {
                name: "Renovation",
                icon: "🔨",
                details:
                  "Modern upgrades, extensions, and remodeling that refresh spaces while preserving structural integrity.",
              },
              {
                name: "Roofing Works",
                icon: "🏠",
                details:
                  "Durable roofing installation, repairs, waterproofing, and insulation tailored to local climate.",
              },
              {
                name: "Finishing Works",
                icon: "🎨",
                details:
                  "Premium finishes: tiling, painting, ceilings, cabinetry, and detailing for a polished final look.",
              },
              {
                name: "Plumbing",
                icon: "🚰",
                details:
                  "Complete water supply, drainage, fixtures, and leak-proof systems installed to code.",
              },
              {
                name: "Electrical",
                icon: "⚡",
                details:
                  "Safe wiring, lighting, power distribution, and smart-ready electrical solutions.",
              },
              {
                name: "Paving",
                icon: "🛤️",
                details:
                  "Durable driveways, walkways, and outdoor surfaces with strong base preparation.",
              },
              {
                name: "Project Management",
                icon: "📋",
                details:
                  "Dedicated oversight for timelines, budgets, quality control, and contractor coordination.",
              },
            ].map((service, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() =>
                  setActiveServiceIndex((prev) =>
                    prev === index ? null : index,
                  )
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveServiceIndex((prev) =>
                      prev === index ? null : index,
                    );
                  }
                }}
                className="relative bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60"
                aria-pressed={activeServiceIndex === index}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#111827] group-hover:text-[#D4AF37] transition-colors">
                  {service.name}
                </h3>

                <div
                  className={`pointer-events-none absolute left-1/2 top-0 z-10 w-60 sm:w-64 -translate-x-1/2 -translate-y-3 rounded-lg border border-[#D4AF37]/40 bg-white/95 p-3 text-xs sm:text-sm text-gray-700 shadow-xl backdrop-blur transition-all duration-200 ${
                    activeServiceIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  } group-hover:opacity-100 group-hover:scale-100`}
                >
                  <div className="font-semibold text-[#111827] mb-1">
                    What this includes
                  </div>
                  <p>{service.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-[#D4AF37] font-bold text-base sm:text-lg hover:text-yellow-600 transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${C})`,
          }}
        >
          <div className="absolute inset-0 bg-[#111827]/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Ready to Build Your Dream?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10">
            Let's discuss your project and bring your vision to life
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#D4AF37] text-[#111827] px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-lg sm:text-xl hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Get Started Today
            </Link>
            <button
              onClick={() => setShowPhoneOptions(!showPhoneOptions)}
              className="bg-white text-[#111827] px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-lg sm:text-xl hover:bg-gray-200 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-2"
            >
              <Phone size={24} className="shrink-0" />
              <span>Call Us</span>
            </button>

            {/* Phone Options Dropdown */}
            {showPhoneOptions && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 shadow-2xl">
                  <h3 className="text-2xl font-bold text-[#111827] mb-6 text-center">
                    Select a Number to Call
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:0594068020"
                      className="block w-full bg-[#D4AF37] text-[#111827] px-6 py-3 rounded-lg font-bold text-lg text-center hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      📞 0594 068 020
                    </a>
                    <a
                      href="tel:0209099019"
                      className="block w-full bg-[#D4AF37] text-[#111827] px-6 py-3 rounded-lg font-bold text-lg text-center hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      📞 0209 099 019
                    </a>
                  </div>
                  <button
                    onClick={() => setShowPhoneOptions(false)}
                    className="mt-6 w-full bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
