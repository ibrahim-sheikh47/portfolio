import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { dp } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full cursor-pointer">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          loading="lazy"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="gap-6 mt-10 relative flex md:flex-row flex-col">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary md:text-lg text-sm max-w-2xl text-justify leading-[30px] md:order-1 order-2"
        >
          Creative and results-oriented Frontend Developer specializing in
          modern web and mobile application development using React, React
          Native, and Firebase. With a strong command of tools like Vite,
          Tailwind CSS, and Git, I build scalable, responsive, and visually
          compelling user interfaces that prioritize performance and usability.
          I seamlessly integrate Firebase services—including authentication,
          Firestore, and cloud functions— into my projects, enabling full-stack
          functionality without traditional backend infrastructure. Experienced
          in converting high-fidelity Figma designs into pixel-perfect code,
          adding smooth animations, and optimizing for performance
        </motion.p>

        <img
          src={dp}
          alt="profile"
          className="object-cover md:absolute md:-right-20 md:-top-72 md:h-[600px] md:order-2 order-1 img-fade-edges"
          loading="lazy"
        />
      </div>

      <div className="md:mt-60 mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
