import "./App.scss";
import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navigation/Navigation";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Demos from "./Components/Demos/Demos";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Demos />
    </>
  );
}

export default App;
