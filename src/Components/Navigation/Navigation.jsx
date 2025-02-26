import React from "react";
import { motion, useScroll } from "framer-motion";
import "./Navigation.scss";

const Navigation = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          borderRadius: "5px 5px 0 0",
          backgroundColor: "#4ce19e",
        }}
      />
      <article className="navigation">
        <div className="inner">
          <nav>
            <ul>
              <li>
                <a
                  href="#hero"
                  aria-label="Go to Hero section"
                  className="tooltip tooltip--right"
                >
                  <span aria-hidden="true">Hero</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  aria-label="Go to About section"
                  className="tooltip tooltip--right"
                >
                  <span aria-hidden="true">About</span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  aria-label="Go to Skills section"
                  className="tooltip tooltip--right"
                >
                  <span aria-hidden="true">Skills</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  aria-label="Go to Projects section"
                  className="tooltip tooltip--right"
                >
                  <span aria-hidden="true">Projects</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </article>
    </>
  );
};

export default Navigation;
