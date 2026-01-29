import { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  Filter,
  X,
} from "lucide-react";
import {
  projectsData,
  getAllCategories,
  getProjectsByCategory,
} from "./projectsData";
import C from "../../assets/C.jpg";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setFilteredProjects(getProjectsByCategory(selectedCategory));
  }, [selectedCategory]);

  const categories = getAllCategories();

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
                80+ COMPLETED PROJECTS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              <span className="block text-white">Our Portfolio of</span>
              <span className="block text-[#D4AF37] mt-1 sm:mt-2 animate-shimmer">
                Excellence
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed px-4">
              Explore our diverse range of successful construction projects
              across Ghana
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between mb-3 sm:mb-0">
            <h2 className="text-lg sm:text-xl font-bold text-[#111827] flex items-center">
              <Filter size={20} className="mr-2 text-[#D4AF37]" />
              Filter Projects
            </h2>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden bg-[#D4AF37] text-[#111827] px-4 py-2 rounded-lg font-semibold"
            >
              {isFilterOpen ? "Hide" : "Show"} Filters
            </button>
          </div>

          <div
            className={`flex-wrap gap-3 mt-4 ${isFilterOpen ? "flex" : "hidden md:flex"}`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsFilterOpen(false);
                }}
                className={`group relative px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-110 hover:rotate-1 ${
                  selectedCategory === category
                    ? "bg-[#D4AF37] text-[#111827] shadow-xl scale-110"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md"
                }`}
              >
                <span className="relative z-10">{category}</span>
                {selectedCategory === category && (
                  <span className="absolute inset-0 bg-linear-to-r from-yellow-400 to-[#D4AF37] opacity-50 rounded-xl animate-pulse"></span>
                )}
              </button>
            ))}
          </div>

          <div className="text-center mt-3 sm:mt-4 text-gray-600 text-sm animate-fade-in">
            Showing{" "}
            <span className="font-bold text-[#D4AF37]">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 cursor-pointer ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                animation: `float 6s ease-in-out infinite ${index * 0.5}s`,
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-[#111827]/90 via-[#111827]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#111827] px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {project.category}
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 border-4 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 relative">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <h3 className="relative text-xl sm:text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300 transform group-hover:scale-105">
                  {project.title}
                </h3>

                <div className="relative space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    <MapPin
                      size={16}
                      className="text-[#D4AF37] shrink-0 animate-bounce-slow"
                    />
                    <span>{project.location}</span>
                  </div>
                  <div
                    className="flex items-center space-x-2 transform group-hover:translate-x-2 transition-transform duration-300"
                    style={{ transitionDelay: "50ms" }}
                  >
                    <Calendar size={16} className="text-[#D4AF37] shrink-0" />
                    <span>Completed: {project.year}</span>
                  </div>
                  <div
                    className="flex items-center space-x-2 transform group-hover:translate-x-2 transition-transform duration-300"
                    style={{ transitionDelay: "100ms" }}
                  >
                    <Clock size={16} className="text-[#D4AF37] shrink-0" />
                    <span>Duration: {project.duration}</span>
                  </div>
                </div>

                <p className="relative text-sm sm:text-base text-gray-700 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                {/* View Details Button */}
                <button className="relative w-full mt-4 bg-[#D4AF37] text-[#111827] px-6 py-3 rounded-xl font-bold text-base hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-xl transform group-hover:scale-105 overflow-hidden">
                  <span className="relative z-10">View Details</span>
                  <span className="absolute inset-0 bg-linear-to-r from-yellow-400 to-[#D4AF37] opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-shimmer"></span>
                </button>
              </div>

              {/* Floating Particles Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-10 left-10 w-2 h-2 bg-[#D4AF37] rounded-full animate-float"></div>
                <div
                  className="absolute top-20 right-10 w-2 h-2 bg-[#D4AF37] rounded-full animate-float"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-10 left-1/2 w-2 h-2 bg-[#D4AF37] rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-gray-600 text-xl">
              No projects found in this category.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-6 bg-[#D4AF37] text-[#111827] px-8 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 sm:h-96">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedProject.image})` }}
              ></div>
              <div className="absolute inset-0 bg-linear-to-t from-[#111827] to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full hover:bg-white/40 transition-all duration-300 transform hover:rotate-90 hover:scale-110"
              >
                <X size={24} className="text-white" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-[#D4AF37] text-[#111827] px-4 py-2 rounded-full text-sm font-bold mb-3">
                  {selectedProject.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <MapPin className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    {selectedProject.location}
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Calendar className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    {selectedProject.year}
                  </p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Clock className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    {selectedProject.duration}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <h3 className="text-xl font-bold text-[#111827] mb-4">
                Key Features:
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-[#D4AF37] mr-2 text-xl">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#D4AF37]/10 p-4 rounded-xl mb-6">
                <p className="text-sm text-gray-700">
                  <strong>Budget Range:</strong> {selectedProject.budget}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0594068020"
                  className="flex-1 bg-[#D4AF37] text-[#111827] px-6 py-3 rounded-xl font-bold text-center hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div
        className="relative bg-[#111827] py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${C})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#111827]/85"></div>

        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let's bring your vision to life with our expert construction
            services
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => setShowPhoneOptions(true)}
              className="group relative bg-[#D4AF37] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl hover:shadow-[#D4AF37]/50 transform hover:scale-110 hover:rotate-2 flex items-center justify-center space-x-2 overflow-hidden"
            >
              <Phone
                size={18}
                className="relative z-10 animate-bounce-slow shrink-0"
              />
              <span className="relative z-10">Call Now</span>
            </button>

            <a
              href="https://wa.me/233594068020"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl hover:shadow-green-600/50 transform hover:scale-110 hover:rotate-2 flex items-center justify-center space-x-2"
            >
              <MessageCircle size={18} className="shrink-0" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="mailto:goldcoastbuilders1@gmail.com"
              className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl transform hover:scale-110 hover:rotate-2 flex items-center justify-center space-x-2"
            >
              <Mail size={18} className="shrink-0" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Animations CSS */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(212, 175, 55, 0.3),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fade-in-up 0.5s ease-out;
        }
      `}</style>

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
