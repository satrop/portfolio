import React from "react";
import "./Skills.scss";
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

const listAnimation = {
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: shouldReduceMotion
      ? {}
      : {
          delay: 0.6 + i * 0.2,
          duration: 0.5,
          ease: "easeInOut",
        },
  }),
};

const Skills = () => {
  const skills = "Skills";
  const lists = [
    ["Design Systems & Architecture", "Design Systems", "Design Tokens", "CSS Architecture", "Component Libraries"],
    ["Frameworks & Libraries", "React", "Astro", "Tailwind CSS", "Bootstrap"],
    ["Programming & Markup", "JavaScript (ES6+)", "TypeScript", "HTML5", "SCSS"],
    ["Accessibility & Performance", "WCAG 2.1", "ADA Compliance", "Accessibility-first Development", "Lighthouse Audits"],
    ["Tools & Platforms", "Git", "pnpm", "Yarn", "Webpack", "Gulp"],
    ["Design & Prototyping", "Figma"],
  ];

  return (
    <article
      id="skills"
      className="skills"
    >
      <div className="inner">
        <h2>
          {skills.split("").map((letter, index) => (
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
        <div className="content">
          {lists.map((list, index) => (
            <motion.ul
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={listAnimation}
            >
              <li className="title">{list[0]}</li>
              {list.slice(1).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </motion.ul>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Skills;
