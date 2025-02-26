import logo from './logo.svg';
import './App.scss';
import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import CardFeatured from './Components/CardFeatured/CardFeatured';
import CardStandard from './Components/CardStandard/CardStandard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <CardFeatured />
      <CardStandard />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
