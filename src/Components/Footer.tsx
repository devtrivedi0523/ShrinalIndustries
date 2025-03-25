import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0f0f10] text-white py-10 px-8 md:px-16">
      <div>
        <h2 className="text-3xl flex font-bold mb-9 items-center justify-center gap-3">
          <FontAwesomeIcon icon={faEnvelope} className="text-[#009af1] mt-1" />
          Get in Touch </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
        {/* Address Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500" />
            Address
          </h3>
          <p className="text-gray-300">
          5-A Shree Jagannath Industrial Estate, Kamod Dholka Road, Paldi Kankaj, Ahmedabad, Gujarat, 382425

          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 md:col-start-2 text-center">
          <h3 className="text-lg font-semibold">QUICK LINKS</h3>
          <ul className="text-gray-300 space-y-2 cursor-pointer">
            <li className="hover:text-white"
              onClick={() => {
                const section = document.getElementById("home");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </li>
            <li className="hover:text-white"
              onClick={() => {
                const section = document.getElementById("about");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Us
            </li>
            <li className="hover:text-white"
              onClick={() => {
                const section = document.getElementById("products");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Products
            </li>
            <li className="hover:text-white"
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </li>
          </ul>
        </div>

        {/* Our Products */}
        <div className="space-y-4 md:col-start-3 text-center">
          <h3 className="text-lg font-semibold">OUR PRODUCTS</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Super Thinner</li>
            <li>PU Thinner 555</li>
            <li>PU Thinner 333</li>
            <li>E Poxy Thinner</li>
            <li>NC Thinner</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto mt-2 text-center md:text-left">
        <h3 className="text-lg font-semibold flex items-center gap-2 justify-center md:justify-start">
          <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-500" />
          Contact Number
        </h3>
        <div className="mt-3">

        <p className="text-gray-300">+91 98259 21099</p>
        <span className="text-sm pl-4"> (Swapnil Sheth)</span>
        <p className="text-gray-300">+91 98794 08800</p>
        <span className="text-sm pl-4"> (Kaushil Sheth)</span>
        <p className="text-gray-300">+91 98257 12666</p>
        <span className="text-sm pl-4"> (Uchit Sheth)</span>
        </div>

      </div>

      {/* Social Media Icons */}
      <div className="w-full flex justify-center items-center mt-6">
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-xl cursor-pointer hover:text-blue-500 transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-xl cursor-pointer hover:text-blue-700 transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-xl cursor-pointer hover:text-pink-500 transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>


      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8 text-sm">
        Copyright © 2025 All Rights Reserved.
      </div>
    </footer>

  );
};

export default Footer;
