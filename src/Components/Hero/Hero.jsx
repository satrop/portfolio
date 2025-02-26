import React from "react";
import "./Hero.scss";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { AiFillFilePdf } from "react-icons/ai";

const Hero = () => {
  return (
    <article className="hero">
      <div className="hero-inner">
        <div className="hero-heading">
          <div className="green-200 fw-600">Nice to meet you!</div>
          <h1>I'm Steve Portas</h1>
        </div>
        <p>Front-End Web Developer with 10+ years of experience building responsive, accessible, and scalable web applications. Skilled in Next.js, React, SCSS, JavaScript, Tailwind CSS, and ADA compliance (WCAG). Passionate about crafting high-performance, user-friendly web experiences. Strong collaborator with cross-functional teams to enhance development workflows, optimize performance, and uphold best coding practices.</p>
        <ul className="hero-links">
          <li>
            <a
              href="/path/to/your-document.pdf"
              download
              aria-label="Download PDF"
            >
              <AiFillFilePdf aria-hidden="true" /> <span>Download PDF</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub aria-hidden="true" /> <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/your-frontend-mentor-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Frontend Mentor"
            >
              <SiFrontendmentor aria-hidden="true" /> <span>Frontend Mentor</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" /> <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/your-codepen-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodePen"
            >
              <FaCodepen aria-hidden="true" /> <span>CodePen</span>
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Hero;
