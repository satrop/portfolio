import React from "react";
import "./Hero.scss";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { AiFillFilePdf } from "react-icons/ai";

const Hero = () => {
  return (
    <article
      id="hero"
      className="hero"
    >
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
              aria-label="Download a PDF of my resume."
              className="tooltip tooltip--bottom"
            >
              <AiFillFilePdf aria-hidden="true" />
              <span aria-hidden="true">Download PDF</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub check out my projects."
              className="tooltip tooltip--bottom"
            >
              <FaGithub aria-hidden="true" />
              <span aria-hidden="true">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/profile/your-frontend-mentor-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="See what I've been up to on Frontend Mentor."
              className="tooltip tooltip--bottom"
            >
              <SiFrontendmentor aria-hidden="true" />
              <span aria-hidden="true">Frontend Mentor</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile."
              className="tooltip tooltip--bottom"
            >
              <FaLinkedin aria-hidden="true" />
              <span aria-hidden="true">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/your-codepen-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go to my CodePen account."
              className="tooltip tooltip--bottom"
            >
              <FaCodepen aria-hidden="true" />
              <span aria-hidden="true">CodePen</span>
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Hero;
