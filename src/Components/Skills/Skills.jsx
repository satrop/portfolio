import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";

const letterAnimation = {
  hidden: { opacity: 0, x: 10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03,
      ease: "easeInOut",
    },
  }),
};

const listAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6 + i * 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const Skills = () => {
  const skills = "Skills";
  const lists = [
    ["Frameworks & Libraries", "React", "Next.js", "Vue.js", "jQuery", "Tailwind CSS", "Bootstrap"],
    ["Tools & Platforms", "Git", "npm", "Yarn", "Webpack", "Gulp", "CMS"],
    ["Design & Prototyping", "Sketch", "Photoshop", "Figma", "Illustrator"],
    ["Programming & Markup", "JavaScript (ES6+)", "TypeScript", "HTML5", "SCSS", "PHP", "C"],
    ["Accessibility & Performance", "WCAG", "ADA Compliance", "Lighthouse Audits"],
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
