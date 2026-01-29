import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../assets/GCD-log.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-[#111827] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <img
            src={logo}
            alt="Gold Coast Builders Logo"
            className="h-12 w-auto"
          />
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-[#D4AF37] text-2xl font-bold">
              <span className="text-[#D4AF37]">GOLD COAST</span>
              <span className="text-white block text-sm font-normal tracking-wider">
                BUILDERS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-sm font-medium text-gray-200 hover:text-[#D4AF37] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA Button */}
            <button
              onClick={() => setShowPhoneOptions(true)}
              className="bg-[#D4AF37] text-[#111827] px-6 py-2.5 rounded-md font-semibold hover:bg-yellow-500 transition-all duration-200 flex items-center space-x-2 shadow-md"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#D4AF37] hover:text-yellow-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="block px-4 py-3 rounded-md text-base font-medium text-gray-200 hover:bg-gray-800 hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <button
                onClick={() => setShowPhoneOptions(true)}
                className="block bg-[#D4AF37] text-[#111827] px-4 py-3 rounded-md font-semibold text-center mt-4 hover:bg-yellow-500 transition-colors w-full"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Phone size={18} />
                  <span>Call Now</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

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
    </nav>
  );
};

export default Navbar;
