import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faComments } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_co4xj8c",   // Replace with your EmailJS Service ID
        "template_whkoqkh",  // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "h0DmlChFH_RN2XOIB" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <footer id="contact" className="bg-[#0f0f10] text-white py-10 px-8 md:px-16">
      {/* Title */}
      <div className="text-center mb-11">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3">
          <FontAwesomeIcon icon={faComments} className="text-[#009af1] mt-1" />
          Get in Touch
        </h2>
      </div>

      {/* Flexbox Layout */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side: Address & Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500" />
              Address
            </h3>
            <p className="text-gray-300 mt-2 leading-relaxed mb-5">
              5-A Shree Jagannath Industrial Estate, Kamod Dholka Road, Paldi Kankaj, Ahmedabad, Gujarat, 382425
            </p>
          </div>

          {/* Contact Info (Placed Below Address) */}
          <div className="mt-7 md:mt-9 lg:mt-10">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-500" />
              Contact Number
            </h3>
            <div className="mt-3 text-gray-300 space-y-2">
              <p>+91 98259 21099 <span className="text-sm pl-4">(Swapnil Sheth)</span></p>
              <p>+91 98794 08800 <span className="text-sm pl-4">(Kaushil Sheth)</span></p>
              <p>+91 98257 12666 <span className="text-sm pl-4">(Uchit Sheth)</span></p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500"/>
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-[#181818] text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-[#181818] text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md bg-[#181818] text-white"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#009af1] text-white px-4 py-2 rounded-full hover:scale-105 transition-transform"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
