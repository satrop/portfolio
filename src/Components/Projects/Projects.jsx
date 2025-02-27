import React from "react";
import "./Projects.scss";
import { motion } from "framer-motion";

const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Projects = () => {
  return (
    <motion.article
      id="projects"
      className="projects"
      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={shouldReduceMotion ? {} : { duration: 1, ease: "easeInOut", delay: 0.6 }}
    >
      <h2>My Projects</h2>
      {/* Add your project details here */}
    </motion.article>
  );
};

export default Projects;
