"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Parallax effect

  return (
    <section ref={ref} className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image with Parallax Effect */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.pixabay.com/photo/2018/08/31/19/16/fan-3645379_1280.jpg"
          alt="Infrastructure"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay Content */}
      <div className="absolute top-0 w-full flex flex-col items-start justify-start text-left bg-white py-6 px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#02084b] w-full pl-8 sm:pl-16 md:pl-28 py-4"

        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Where Success is a Journey,
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          >
            Not a Destination...
          </motion.span>
        </motion.div>
      </div>


      {/* Floating Blue Box */}
      <motion.div
        className="absolute top-56 bg-[#009af1] text-[#02084b] p-6 rounded-xl shadow-lg w-2/3 max-w-md sm:w-1/2 sm:left-auto md:w-2/3 lg:w-1/2 xl:w-1/3 xl:top-14 xl:right-10"
        whileHover={{ scale: 1.05 }}  // Slightly enlarges on hover
        transition={{ type: "spring", stiffness: 200, damping: 10 }}  // Smooth animation
      >
        <h2 className="text-xl font-bold">
          At SIAL, we're not just building infrastructure; We're crafting the future.
        </h2>
        <p className="mt-4 text-sm">
          With a legacy of excellence and a commitment to innovation, we stand at the forefront
          of delivering cutting-edge solutions in infrastructure and logistics.
        </p>
        <button className="mt-4 px-4 py-2 bg-[#02084b] text-white rounded-lg">
          Explore
        </button>
      </motion.div>



    </section>
  );
};

export default Hero;
