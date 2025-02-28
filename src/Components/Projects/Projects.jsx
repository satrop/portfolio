import React from "react";
import "./Projects.scss";
import CardFeatured from "../CardFeatured/CardFeatured";
import CardStandard from "../CardStandard/CardStandard";
import { motion } from "framer-motion";

const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const letterAnimation = {
  hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: shouldReduceMotion
      ? {}
      : {
          delay: i * 0.03,
          ease: "easeInOut",
        },
  }),
};

const Projects = () => {
  const title1 = "A Few Sites I've Built";
  const title2 = "Live Projects";

  return (
    <article
      id="projects"
      className="projects"
    >
      <div className="inner">
        <h2>
          {title1.split("").map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterAnimation}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {letter}
            </motion.span>
          ))}
        </h2>
        <motion.div
          className="featured-cards-container"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? {} : { duration: 1, ease: "easeOut" }}
        >
          <CardFeatured />
        </motion.div>
        <h2>
          {title2.split("").map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={letterAnimation}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {letter}
            </motion.span>
          ))}
        </h2>
        <motion.div
          className="standard-cards-container"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? {} : { duration: 1, ease: "easeOut" }}
        >
          <CardStandard />
        </motion.div>
      </div>
    </article>
  );
};

export default Projects;
