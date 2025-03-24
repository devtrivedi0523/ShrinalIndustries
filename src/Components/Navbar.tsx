import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu on link click (for mobile)
  };

  return (
    <nav id="home" className="relative top-0 left-0 w-full px-6 md:px-10 py-4 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img src="/Horizontal_Tagline-removebg-previewedit.png" alt="SIAL Logo" className="h-14 w-auto" />
        </a>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {["about", "products", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="font-semibold relative text-gray-700 hover:text-[#009af1] transition-colors 
                after:content-[''] after:absolute after:w-6 after:h-[2px] after:bg-[#009af1] 
                after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:scale-x-0 
                hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Phone Number - Always Visible */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+91 98250 09480" className="text-gray-700 hover:text-[#009af1] flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} />
            <span className="font-semibold">+91 98250 09480</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-[#009af1] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Menu (Sliding Effect) */}
      {/* Mobile Menu (Sliding Effect) */}
      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#009af1]">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col space-y-6 mt-6 text-center">
          {["about", "products", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="font-semibold text-gray-700 hover:text-[#009af1] transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
            </button>
          ))}

          {/* Mobile Phone Number */}
          <a href="tel:+919227027522" className="text-gray-700 hover:text-[#009af1] flex justify-center items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} />
            <span className="font-semibold">+91 92 2702 7522</span>
          </a>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
