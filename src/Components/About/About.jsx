import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import myImage from "../../assets/images/Me.jpg";

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

const About = () => {
  const about = "A Little Bit About Me";
  return (
    <article
      id="about"
      className="about"
    >
      <div className="inner">
        <h2>
          {about.split("").map((letter, index) => (
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
          className="content"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? {} : { duration: 0.5, ease: "easeInOut", delay: 0.6 }}
        >
          <p>My mum is an artist, and my dad is an engineer. My brain loves working in both of those spaces at the same time. Yep, I love blending left-brain logic with right-brain creativity—front-end development with an eye for artistry.</p>

          <p>I spent years working in graphic design and studying fine art (yes, even tapestry!) before finally finding my forever home in front-end development.</p>

          <p>I grew up in a tiny town called Bridgwater in England—it's missing an “e” because the Vikings stole it (really!).</p>

          <p>Just as I was about to dive into digital design, I ended up managing 13 people in one of the busiest, high-end pubs in London. And I was stinkin' good at it. Oh, and I was also head chef—grilling every steak—while leading that crew under the hottest heat in the business.</p>

          <p>When I moved to the U.S., I felt right at home. California was a bit too sunny, but the Pacific Northwest? Just right. I met my wife, Jess, and we've been giggling together for 15 years. Our kiddos, pups, and kitty just add to the fun.</p>

          <p>I've done a lot of interesting work, but now it's time to find a role that truly fits all my skills and passions.</p>
        </motion.div>
        <motion.div
          className="media"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={shouldReduceMotion ? {} : { duration: 2, ease: "easeInOut" }}
        >
          <motion.img
            src={myImage}
            alt="Steve's face"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 10 }}
            whileInView={{ opacity: 0.2, x: 0 }}
            transition={shouldReduceMotion ? {} : { duration: 1, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>
      </div>
    </article>
  );
};

export default About;
