import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 flex flex-col items-center text-center px-6 md:px-16 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2012/11/28/10/32/welding-6640_640.jpg')",
      }}
    >
      {/* Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-95"></div>

      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-[#02084b] mb-4 relative z-10"
        initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Introduction
      </motion.h2>
      <motion.div
        className="w-16 h-1 bg-[#009af1] mb-6 relative z-10 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl text-left relative z-10">
        {/* Image Section */}
        <motion.div
          className="mb-5 relative w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="absolute w-96 h-96 rounded-full -z-10"
            style={{
              backgroundImage: "radial-gradient(gray 1px, transparent 1px)",
              backgroundSize: "10px 10px",
              backgroundPosition: "center",
              top: "-30px",
            }}
          ></div>

          {/* Main Image */}
          <img
            src="/steptodown.com739731.jpg"
            alt="About Us"
            className="w-80 h-80 rounded-full border-4 border-blue-500 shadow-lg"
          />

          {/* Logo Image (Overlayed) */}
          <img
            src="/Emblem.png"
            alt="Company Logo"
            className="absolute bottom-0 right-16 w-28 h-28 bg-white rounded-full border shadow-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="md:w-1/2 md:ml-10 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-700 mb-6"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Founded in 2003, Shrinal Industries presently deals in <b>Pharmaceutical Chemicals, Paint Chemicals and Construction Chemicals (Curing Compound). </b>
            Formerly known as Paresh Electricals, the proprietary firm's intial scope of work included 
            <b> Erection, Commissioning & Maintenance of Infrastructure Machinery such as crushers, batch & hot mix plants, concrete pavers and generators. </b>
            Under the name of Paresh Electricals, the company successfully commissioned India's first crusher of Svedala, Germany.

          </motion.p>
          <motion.p
            className="text-gray-700 mb-6"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            In 2007, 
            <b> Paresh Electricals was merged with Shrinal Industries, </b> 
            which now caters to a robust clientele in the chemical industry.
          </motion.p>

          {/* Button */}
          {/* <motion.button
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
