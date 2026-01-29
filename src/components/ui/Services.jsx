import { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import C from "../../assets/C.jpg";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: "🏗️",
      title: "Building Construction",
      description: "Complete construction solutions from ground up",
      features: [
        "Residential & Commercial Buildings",
        "Structural Engineering",
        "Site Development & Preparation",
        "Quality Material Sourcing",
        "Professional Project Documentation",
        "Building Permit Assistance",
      ],
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      icon: "🔨",
      title: "Renovation & Remodeling",
      description: "Transform your space with expert renovation",
      features: [
        "Kitchen & Bathroom Upgrades",
        "Interior Space Reconfiguration",
        "Modern Design Implementation",
        "Structural Modifications",
        "Historic Building Restoration",
        "Energy Efficiency Improvements",
      ],
      color: "from-orange-500 to-orange-700",
    },
    {
      id: 3,
      icon: "🏠",
      title: "Roofing Works",
      description: "Durable roofing solutions for lasting protection",
      features: [
        "New Roof Installation",
        "Roof Repair & Maintenance",
        "Waterproofing Systems",
        "Gutter Installation",
        "Roof Insulation",
        "Emergency Leak Repairs",
      ],
      color: "from-red-500 to-red-700",
    },
    {
      id: 4,
      icon: "🎨",
      title: "Finishing Works",
      description: "Premium finishes that complete your vision",
      features: [
        "Interior & Exterior Painting",
        "Tiling & Flooring",
        "Ceiling Installation",
        "Cabinetry & Millwork",
        "Decorative Features",
        "Final Detailing & Touch-ups",
      ],
      color: "from-purple-500 to-purple-700",
    },
    {
      id: 5,
      icon: "🚰",
      title: "Plumbing Services",
      description: "Complete plumbing solutions for any project",
      features: [
        "Water Supply Systems",
        "Drainage & Sewage",
        "Fixture Installation",
        "Pipe Repairs & Replacement",
        "Water Heater Installation",
        "Leak Detection & Repair",
      ],
      color: "from-cyan-500 to-cyan-700",
    },
    {
      id: 6,
      icon: "⚡",
      title: "Electrical Works",
      description: "Safe and reliable electrical installations",
      features: [
        "Complete Electrical Wiring",
        "Lighting Design & Installation",
        "Power Distribution Systems",
        "Generator Installation",
        "Electrical Repairs",
        "Safety Inspections",
      ],
      color: "from-yellow-500 to-yellow-700",
    },
    {
      id: 7,
      icon: "🛤️",
      title: "Paving & External Works",
      description: "Professional outdoor construction services",
      features: [
        "Driveway Paving",
        "Walkway Construction",
        "Outdoor Patios",
        "Parking Lot Development",
        "Landscaping Integration",
        "Drainage Solutions",
      ],
      color: "from-gray-500 to-gray-700",
    },
    {
      id: 8,
      icon: "📋",
      title: "Project Management",
      description: "Expert oversight for successful project delivery",
      features: [
        "Timeline & Budget Management",
        "Quality Control & Assurance",
        "Contractor Coordination",
        "Regular Progress Updates",
        "Risk Management",
        "Final Project Delivery",
      ],
      color: "from-green-500 to-green-700",
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
                COMPREHENSIVE CONSTRUCTION SOLUTIONS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              <span className="block text-white">Our</span>
              <span className="block text-[#D4AF37] mt-1 sm:mt-2 animate-shimmer">
                Services
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed px-4">
              Professional construction services tailored to meet your every
              need
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[#D4AF37] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() =>
                setActiveService(
                  activeService === service.id ? null : service.id,
                )
              }
            >
              {/* Gradient Header */}
              <div
                className={`bg-linear-to-r ${service.color} p-6 sm:p-8 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 opacity-10 text-8xl sm:text-9xl transform translate-x-4 -translate-y-4">
                  {service.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6 sm:p-8">
                <h4 className="text-lg sm:text-xl font-bold text-[#111827] mb-4 flex items-center">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  What's Included:
                </h4>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm sm:text-base text-gray-700 transform transition-all duration-300 hover:translate-x-2"
                    >
                      <CheckCircle className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/233594068020?text=Hello%20Gold%20Coast%20Builders%2C%0A%0AI%27m%20interested%20in%20getting%20a%20quote%20for%3A%0A%0AService%3A%20{service.title}%0AProject%20Location%3A%20%0AProject%20Details%3A%20%0A%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full bg-[#D4AF37] text-[#111827] px-6 py-3 rounded-xl font-bold text-base hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group-hover:scale-105"
                >
                  <span>Get a Quote</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Our Services */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#111827] mb-3 sm:mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              Quality, reliability, and excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "⚡",
                title: "Fast Turnaround",
                desc: "On-time delivery guaranteed",
              },
              {
                icon: "🎯",
                title: "Quality Work",
                desc: "Premium materials & craftsmanship",
              },
              {
                icon: "💰",
                title: "Fair Pricing",
                desc: "Transparent, competitive rates",
              },
              {
                icon: "🛡️",
                title: "Warranty",
                desc: "Full service warranty included",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${C})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#111827]/85"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#D4AF37]/30 rounded-full animate-pulse hidden lg:block z-10"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-16 sm:right-32 w-10 h-10 sm:w-12 sm:h-12 border-4 border-white/20 rounded-full animate-bounce hidden lg:block z-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a free consultation and quote for your
            construction project
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => setShowPhoneOptions(!showPhoneOptions)}
              className="group relative bg-[#D4AF37] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 flex items-center justify-center space-x-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-yellow-400 to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone
                size={18}
                className="relative z-10 group-hover:rotate-12 transition-transform shrink-0"
              />
              <span className="relative z-10">Call Us</span>
            </button>

            {/* Phone Options Modal */}
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

            <a
              href="https://wa.me/233594068020?text=Hello%20Gold%20Coast%20Builders%2C%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-green-700 transition-all duration-300 shadow-2xl hover:shadow-green-600/50 hover:scale-105 flex items-center justify-center space-x-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle
                size={18}
                className="relative z-10 group-hover:rotate-12 transition-transform shrink-0"
              />
              <span className="relative z-10">WhatsApp Us</span>
            </a>

            <a
              href="mailto:goldcoastbuilders1@gmail.com"
              className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-[#111827] hover:border-white transition-all duration-300 shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail
                size={18}
                className="group-hover:rotate-12 transition-transform shrink-0"
              />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
