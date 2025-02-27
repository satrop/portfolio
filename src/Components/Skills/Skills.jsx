import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.article
      id="skills"
      className="skills"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
    >
      <h2>My Skills</h2>
      {/* Add your skills details here */}
    </motion.article>
  );
};

export default Skills;
