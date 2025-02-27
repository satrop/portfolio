import React, { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navigation/Navigation";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Demos from "./Components/Demos/Demos";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
      >
        <svg
          viewBox="0 0 24 24"
          class="svg-9"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        </svg>
      </button>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Demos />
    </div>
  );
};

export default App;
