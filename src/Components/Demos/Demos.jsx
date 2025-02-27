import React from "react";
import "./Demos.scss";
import { motion } from "framer-motion";

const Demos = () => {
  return (
    <motion.article
      id="demos"
      className="demos"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
    >
      <h2>My Demos</h2>
      {/* Add your project details here */}
    </motion.article>
  );
};

export default Demos;
