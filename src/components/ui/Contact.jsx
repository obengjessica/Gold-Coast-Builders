import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [isVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build WhatsApp message with form data
    const whatsappMessage = `Hello Gold Coast Builders,%0A%0AName: ${encodeURIComponent(
      formData.name,
    )}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(
      formData.phone,
    )}%0ASubject: ${encodeURIComponent(
      formData.subject,
    )}%0A%0AMessage:%0A${encodeURIComponent(formData.message)}`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/233594068020?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    // Show success message
    setSubmitStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37]" />,
      title: "Call Us",
      primary: "0594 068 020",
      secondary: "0209 099 019",
      action1: "tel:0594068020",
      action2: "tel:0209099019",
      description: "Available 24/7 for emergencies",
    },
    {
      icon: (
        <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37]" />
      ),
      title: "WhatsApp",
      primary: "0594 068 020",
      secondary: "0209 099 019",
      action1:
        "https://wa.me/233594068020?text=Hello%20Gold%20Coast%20Builders%2C%20I%27m%20interested%20in%20your%20services.",
      action2:
        "https://wa.me/233209099019?text=Hello%20Gold%20Coast%20Builders%2C%20I%27m%20interested%20in%20your%20services.",
      description: "Quick response guaranteed",
    },
    {
      icon: <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37]" />,
      title: "Email",
      primary: "goldcoastbuilders1@gmail.com",
      action1: "mailto:goldcoastbuilders1@gmail.com?subject=Project%20Inquiry",
      description: "We'll respond within 24 hours",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed (Emergency calls only)" },
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
                WE'RE HERE TO HELP
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              <span className="block text-white">Get in</span>
              <span className="block text-[#D4AF37] mt-1 sm:mt-2 animate-shimmer">
                Touch With Us
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed px-4">
              Let's discuss your construction project and bring your vision to
              life
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div
          className={`text-center mb-10 sm:mb-12 lg:mb-16 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#111827] mb-3 sm:mb-4">
            Contact Us Directly
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            Choose your preferred method to reach us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group bg-white border-2 border-gray-100 hover:border-[#D4AF37] rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex justify-center mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <div className="bg-[#D4AF37]/10 p-4 sm:p-5 rounded-2xl group-hover:bg-[#D4AF37]/20 transition-colors">
                  {method.icon}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] text-center mb-3 sm:mb-4 group-hover:text-[#D4AF37] transition-colors">
                {method.title}
              </h3>

              <div className="space-y-3 mb-4">
                <a
                  href={method.action1}
                  target={method.title === "WhatsApp" ? "_blank" : undefined}
                  rel={
                    method.title === "WhatsApp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block text-center text-sm sm:text-base text-gray-700 hover:text-[#D4AF37] font-semibold transition-colors break-all"
                >
                  {method.primary}
                </a>
                {method.secondary && (
                  <a
                    href={method.action2}
                    target={method.title === "WhatsApp" ? "_blank" : undefined}
                    rel={
                      method.title === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block text-center text-sm sm:text-base text-gray-700 hover:text-[#D4AF37] font-semibold transition-colors"
                  >
                    {method.secondary}
                  </a>
                )}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 text-center mb-4 sm:mb-6">
                {method.description}
              </p>

              {/* Primary Action Button */}
              <a
                href={method.action1}
                target={method.title === "WhatsApp" ? "_blank" : undefined}
                rel={
                  method.title === "WhatsApp"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block w-full bg-[#D4AF37] text-[#111827] px-6 py-3 rounded-xl font-bold text-center hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                {method.title === "Email"
                  ? "Send Email"
                  : `${method.title} Now`}
              </a>

              {/* Secondary Action Button (for Phone/WhatsApp) */}
              {method.secondary && (
                <a
                  href={method.action2}
                  target={method.title === "WhatsApp" ? "_blank" : undefined}
                  rel={
                    method.title === "WhatsApp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block w-full mt-3 bg-white border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-xl font-bold text-center hover:bg-[#D4AF37] hover:text-[#111827] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                  {method.title} (Alt)
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Office Information & Hours */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Office Location */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#D4AF37]/10 p-3 rounded-xl mr-4">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111827]">
                  Our Location
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
                <p className="leading-relaxed">
                  <strong className="text-[#111827]">Head Office:</strong>
                  <br />
                  Accra, Greater Accra Region
                  <br />
                  Ghana
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-[#111827] mb-2">
                    Service Areas:
                  </p>
                  <p className="text-gray-600">
                    We serve clients across Greater Accra, Eastern Region,
                    Central Region, and surrounding areas of Ghana.
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-[#D4AF37]/10 p-3 rounded-xl mr-4">
                  <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111827]">
                  Office Hours
                </h3>
              </div>

              <div className="space-y-4">
                {officeHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0"
                  >
                    <span className="font-semibold text-[#111827] text-sm sm:text-base">
                      {schedule.day}
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-[#D4AF37]/10 rounded-xl">
                <p className="text-xs sm:text-sm text-gray-700 text-center">
                  <strong className="text-[#111827]">
                    Emergency Services:
                  </strong>{" "}
                  Available 24/7 for urgent construction issues
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-3 sm:mb-4">
              Send us an Email
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border-2 border-gray-100"
          >
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-400 rounded-lg">
                <p className="text-green-700 font-semibold text-center">
                  ✓ Opening WhatsApp... Your message is ready to send!
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-400 rounded-lg">
                <p className="text-red-700 font-semibold text-center">
                  ✗ Please fill in all required fields.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#111827] mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#111827] mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-[#111827] mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                placeholder="0594 068 020"
              />
            </div>

            {/* Subject Field */}
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-[#111827] mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                placeholder="e.g., Project Inquiry"
              />
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[#111827] mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your construction project..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>
                {isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* Quick Contact Methods Section */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-3 sm:mb-4">
              Or Contact Us Via
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Quick ways to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* WhatsApp Quick Message */}
            <a
              href="https://wa.me/233594068020?text=Hello%20Gold%20Coast%20Builders%2C%0A%0AI%27m%20interested%20in%20discussing%20a%20construction%20project.%0A%0AProject%20Type%3A%20%0ALocation%3A%20%0ABudget%20Range%3A%20%0A%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-green-600 text-white p-8 rounded-2xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <MessageCircle className="w-12 h-12 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-2">
                WhatsApp Message
              </h3>
              <p className="text-sm text-center text-green-100">
                Quick response guaranteed
              </p>
            </a>

            {/* Phone Call */}
            <a
              href="tel:0594068020"
              className="group relative bg-[#D4AF37] text-[#111827] p-8 rounded-2xl hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <Phone className="w-12 h-12 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-2">
                Call Us Now
              </h3>
              <p className="text-sm text-center opacity-80">
                0594 068 020 - Available 24/7
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-[#111827] py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/src/assets/C.jpg')",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#111827]/80"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#D4AF37]/30 rounded-full animate-pulse hidden lg:block z-10"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-16 sm:right-32 w-10 h-10 sm:w-12 sm:h-12 border-4 border-white/20 rounded-full animate-bounce hidden lg:block z-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Don't hesitate to reach out. We're here to answer all your questions
            and provide expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:0594068020"
              className="group relative bg-[#D4AF37] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 flex items-center justify-center space-x-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-yellow-400 to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone
                size={18}
                className="relative z-10 group-hover:rotate-12 transition-transform shrink-0"
              />
              <span className="relative z-10">Call: 0594 068 020</span>
            </a>

            <a
              href="tel:0209099019"
              className="group relative bg-[#D4AF37] text-[#111827] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-500 transition-all duration-300 shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 flex items-center justify-center space-x-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-yellow-400 to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone
                size={18}
                className="relative z-10 group-hover:rotate-12 transition-transform shrink-0"
              />
              <span className="relative z-10">Call: 0209 099 019</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
