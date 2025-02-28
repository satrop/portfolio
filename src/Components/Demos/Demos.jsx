import React from "react";
import "./Demos.scss";
import { motion } from "framer-motion";
import CardStandard from "../CardStandard/CardStandard";

const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Demos = () => {
  return (
    <motion.article
      id="demos"
      className="demos"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={shouldReduceMotion ? {} : { duration: 1, ease: "easeOut" }}
    >
      <div className="inner">
        <h2>Demos</h2>
        <CardStandard type="demo" />
      </div>
    </motion.article>
  );
};

export default Demos;
