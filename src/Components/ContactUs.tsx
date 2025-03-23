import { motion } from "framer-motion";
import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#0f0f10] text-center px-6">
      <motion.h2
        className="text-4xl font-bold text-[#009af1] mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      {/* Contact Info Container */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Address */}
        <div className="flex items-center space-x-4 text-gray-700">
          <MapPinIcon className="h-8 w-8 text-[#009af1]" />
          <p>123 Street, City, Country</p>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4 text-gray-700">
          <PhoneIcon className="h-8 w-8 text-[#009af1]" />
          <p>+123 456 7890</p>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4 text-gray-700">
          <EnvelopeIcon className="h-8 w-8 text-[#009af1]" />
          <p>info@example.com</p>
        </div>
      </motion.div>
      <hr className="border-t-2 border-gray-700 my-14 " />
    </section>
  );
};

export default Contact;
