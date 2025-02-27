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
      href: "/path/to/your-document.pdf",
      ariaLabel: "Download a PDF of my resume.",
      icon: <AiFillFilePdf aria-hidden="true" />,
      text: "Download PDF",
    },
    {
      href: "https://github.com/your-github-username",
      ariaLabel: "GitHub check out my projects.",
      icon: <FaGithub aria-hidden="true" />,
      text: "GitHub",
    },
    {
      href: "https://www.frontendmentor.io/profile/your-frontend-mentor-username",
      ariaLabel: "See what I've been up to on Frontend Mentor.",
      icon: <SiFrontendmentor aria-hidden="true" />,
      text: "Frontend Mentor",
    },
    {
      href: "https://www.linkedin.com/in/your-linkedin-username",
      ariaLabel: "Visit my LinkedIn profile.",
      icon: <FaLinkedin aria-hidden="true" />,
      text: "LinkedIn",
    },
    {
      href: "https://codepen.io/your-codepen-username",
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
            Nice to meet you!
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
          Front-End Web Developer with 10+ years of experience building responsive, accessible, and scalable web applications. Skilled in Next.js, React, SCSS, JavaScript, Tailwind CSS, and ADA compliance (WCAG). Passionate about crafting high-performance, user-friendly web experiences. Strong collaborator with cross-functional teams to enhance development workflows, optimize performance, and uphold best coding practices.
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
