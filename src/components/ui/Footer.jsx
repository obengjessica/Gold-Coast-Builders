import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Building Construction",
    "Renovation & Remodeling",
    "Roofing Works",
    "Finishing Works",
    "Plumbing Services",
    "Electrical Works",
  ];

  return (
    <footer className="bg-[#111827] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-2">
                GOLD COAST
              </h3>
              <p className="text-sm text-gray-400 tracking-wider">BUILDERS</p>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Ghana's premier construction company delivering excellence,
              innovation, and integrity in every project since 2009.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#D4AF37] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#D4AF37] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#D4AF37] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#D4AF37] transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-[#D4AF37]">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-sm sm:text-base text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="mr-2 text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-[#D4AF37]">
              Our Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="/services"
                    className="text-sm sm:text-base text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="mr-2 text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-[#D4AF37]">
              Contact Us
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {/* Phone Numbers */}
              <div className="space-y-2">
                <a
                  href="tel:0594068020"
                  className="flex items-start space-x-3 text-sm sm:text-base text-gray-300 hover:text-[#D4AF37] transition-colors group"
                >
                  <Phone
                    size={18}
                    className="shrink-0 mt-0.5 group-hover:rotate-12 transition-transform"
                  />
                  <span>0594 068 020</span>
                </a>
                <a
                  href="tel:0209099019"
                  className="flex items-start space-x-3 text-sm sm:text-base text-gray-300 hover:text-[#D4AF37] transition-colors group"
                >
                  <Phone
                    size={18}
                    className="shrink-0 mt-0.5 group-hover:rotate-12 transition-transform"
                  />
                  <span>0209 099 019</span>
                </a>
              </div>

              {/* Email */}
              <a
                href="mailto:goldcoastbuilders1@gmail.com"
                className="flex items-start space-x-3 text-sm sm:text-base text-gray-300 hover:text-[#D4AF37] transition-colors group"
              >
                <Mail
                  size={18}
                  className="shrink-0 mt-0.5 group-hover:rotate-12 transition-transform"
                />
                <span className="break-all">goldcoastbuilders1@gmail.com</span>
              </a>

              {/* Location */}
              <div className="flex items-start space-x-3 text-sm sm:text-base text-gray-300">
                <MapPin size={18} className="shrink-0 mt-0.5 text-[#D4AF37]" />
                <span>Accra, Greater Accra Region, Ghana</span>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/233594068020?text=Hello%20Gold%20Coast%20Builders%2C%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg mt-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © {currentYear} Gold Coast Builders. All rights reserved.
            </p>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-sm text-gray-400 hover:text-[#D4AF37] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-[#D4AF37] transition-all duration-300 group-hover:scale-110">
                <ArrowUp
                  size={16}
                  className="group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
