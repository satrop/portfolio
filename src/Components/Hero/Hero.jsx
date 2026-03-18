import React from "react";
import "./Hero.scss";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { AiFillFilePdf } from "react-icons/ai";
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
          delay: 0.6 + i * 0.03,
          ease: "easeInOut",
        },
  }),
};

const listItemAnimation = {
  hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -5 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: shouldReduceMotion
      ? {}
      : {
          delay: 2.25 + i * 0.03,
          ease: "easeInOut",
        },
  }),
};

const Hero = () => {
  const name = "I'm Steve Portas";
  const links = [
    {
      href: require("../../assets/Steve-Portas-Resume.pdf.zip"),
      ariaLabel: "Download a PDF of my resume.",
      icon: <AiFillFilePdf aria-hidden="true" />,
      text: "Download PDF",
      download: true,
    },
    {
      href: "https://github.com/satrop",
      ariaLabel: "GitHub check out my projects.",
      icon: <FaGithub aria-hidden="true" />,
      text: "GitHub",
    },
    {
      href: "https://www.frontendmentor.io/profile/satrop",
      ariaLabel: "See what I've been up to on Frontend Mentor.",
      icon: <SiFrontendmentor aria-hidden="true" />,
      text: "Frontend Mentor",
    },
    {
      href: "https://www.linkedin.com/in/steven-portas/",
      ariaLabel: "Visit my LinkedIn profile.",
      icon: <FaLinkedin aria-hidden="true" />,
      text: "LinkedIn",
    },
    {
      href: "https://codepen.io/satrop",
      ariaLabel: "Go to my CodePen account.",
      icon: <FaCodepen aria-hidden="true" />,
      text: "CodePen",
    },
  ];

  return (
    <article
      id="back-to-top"
      className="hero"
    >
      <div className="hero-inner">
        <div className="hero-heading">
          <motion.div
            className="kicker"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? {} : { duration: 1, ease: "easeOut" }}
          >
            Nice to meet you.
          </motion.div>
          <h1>
            {name.split("").map((letter, index) => (
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
          </h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? {} : { duration: 1, ease: "easeInOut", delay: 1.5 }}
        >
          Senior Front-End Developer specialising in design systems, component architecture, and accessibility-first development. With 20+ years of experience I've moved from writing code to designing the foundations that teams build on — scalable, well-documented systems that outlast any single contributor.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? {} : { duration: 1, ease: "easeInOut", delay: 1.5 }}
        >
          Accessibility isn't a checklist item for me. I have a visual disability, and that shapes how I approach every component I build. WCAG compliance gets baked in from the start, not bolted on at the end.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? {} : { duration: 1, ease: "easeInOut", delay: 1.5 }}
        >
          Currently looking for in-house roles at mission-driven organisations where the work has real, lasting impact.
        </motion.p>
        <ul className="hero-links">
          {links.map((link, index) => (
            <motion.li
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={listItemAnimation}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="tooltip tooltip--bottom"
                download={link.download}
              >
                {link.icon}
                <span aria-hidden="true">{link.text}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Hero;
