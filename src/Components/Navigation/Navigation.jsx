import React from "react";
import { motion, useScroll } from "framer-motion";
import "./Navigation.scss";

const staggerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.5 + i * 0.1,
      duration: 1.5,
      ease: "easeInOut",
    },
  }),
};

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
          backgroundColor: "#4ce19e",
        }}
      />
      <article className="navigation">
        <div className="inner">
          <nav>
            <motion.ul
              initial="hidden"
              animate="visible"
            >
              {["back-to-top", "about", "skills", "projects", "demos"].map((section, i) => (
                <motion.li
                  key={section}
                  custom={i}
                  variants={staggerVariants}
                >
                  <a
                    href={`#${section}`}
                    aria-label={`Go to ${section.charAt(0).toUpperCase() + section.slice(1)} section`}
                    className="tooltip tooltip--right"
                  >
                    <span aria-hidden="true">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </article>
    </>
  );
};

export default Navigation;
