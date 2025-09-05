"use client";

import { bgVideo } from "../assets";
import { styles } from "../styles";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2, // Reduced from 0.3 for faster loading
      ease: "easeOut",
      staggerChildren: 0.1, // Reduced stagger for faster appearance
    },
  },
};

const textVariant = {
  hidden: {
    opacity: 0,
    y: 20, // Reduced movement for smoother performance
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Reduced duration for faster animation
      ease: "easeOut", // Simplified easing for better performance
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Video Background - Always visible, animate in with motion */}
      <motion.video
        aria-hidden="true"
        role="presentation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Dark Overlay - Always visible, animate in with motion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 bg-black/40"
      />
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <motion.div
          className="flex flex-col justify-center items-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }} // Reduced delay
        >
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariant}
          className="mt-20"
        >
          <motion.h1
            variants={textVariant}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className="text-[#915EFF]">Ibrahim Sheikh</span>
          </motion.h1>

          <motion.p
            variants={textVariant}
            className={`${styles.heroSubText} mt-5 text-white-100`}
          >
            I'm a Frontend Developer for Web & Mobile{" "}
            <br className="sm:block hidden" />
            skilled in React, React Native, Next.js,
            <br className="sm:block hidden" /> Firebase , Gsap , Framer Motion
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
