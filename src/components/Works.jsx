"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import StarWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectDialog } from "./ProjectDialog";
import { landingPages, projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  onClick,
  isLandingPage,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", Math.min(index * 0.1, 0.3), 0.5)}
      onClick={isLandingPage ? () => window.open(live_link, "_blank") : onClick}
      className="w-full sm:w-[360px]"
    >
      <div className="bg-tertiary p-5 rounded-2xl w-full cursor-pointer hover:shadow-2xl transition-all duration-300 h-auto md:h-[520px] relative hover:scale-[1.02] transform-gpu">
        {/* Project Image */}
        <div className="relative w-full h-[200px] sm:h-[230px]">
          <img
            src={
              image ||
              "/placeholder.svg?height=230&width=360&query=project screenshot"
            }
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />

          {/* Hover Overlay only for Landing Pages */}
          {isLandingPage && (
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-lg">
                Click to View
              </span>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-5 justify-center sm:justify-start">
        {/* Normal Projects */}
        {projects?.length > 0 &&
          projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              onClick={() => handleCardClick(project)}
              isLandingPage={false}
            />
          ))}

        {/* Landing Pages Section */}
        {landingPages?.length > 0 && (
          <>
            <div className="w-full mt-10">
              <p className="text-white text-xl font-bold">Landing Pages</p>
            </div>

            {landingPages.map((landingPage, index) => (
              <ProjectCard
                key={`landing-${index}`}
                index={projects?.length + index}
                {...landingPage}
                isLandingPage={true}
              />
            ))}
          </>
        )}
      </div>

      {/* Project Dialog */}
      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={closeDialog}
      />
    </>
  );
};

export default StarWrapper(Works, "projects");
