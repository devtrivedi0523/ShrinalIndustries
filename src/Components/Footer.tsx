import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contact" className="bg-[#0f0f10] text-white py-10 px-8 md:px-16">

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">


        {/* Quick Links */}
        <div className="space-y-4 text-center">
          <h3 className="text-lg font-semibold">QUICK LINKS</h3>
          <ul className="text-gray-300 space-y-2 cursor-pointer">
            {["Home", "About Us", "Products", "Contact Us"].map((link) => (
              <li
                key={link}
                className="hover:text-white"
                onClick={() => {
                  const section = document.getElementById(link.toLowerCase().replace(/\s/g, ""));
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Our Products */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">OUR PRODUCTS</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-300 max-w-lg mx-auto text-center">
            {[
              "Super Thinner",
              "PU Thinner 555",
              "PU Thinner 333",
              "E Poxy Thinner",
              "NC Thinner",
              "All Purpose Thinner",

            ].map((product) => (
              <span key={product} className="hover:text-white transition">
                {product}
              </span>
            ))}
          </div>
        </div>

      {/* Social Media Icons */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">SOCIALS</h3>
        <div className="flex space-x-6">
          {[faFacebookF, faLinkedin, faInstagram].map((icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-400 text-xl cursor-pointer hover:text-blue-500 transition duration-300"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
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
