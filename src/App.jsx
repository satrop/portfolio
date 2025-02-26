import "./App.scss";
import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navigation/Navigation";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About"; // Import About component
import CardFeatured from "./Components/CardFeatured/CardFeatured";
import CardStandard from "./Components/CardStandard/CardStandard";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CardFeatured />
      <CardStandard />
    </>
  );
}

export default App;
