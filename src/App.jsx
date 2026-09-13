import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Stats />
      <About />
      <Skills />
      <MyWork />
      <Education />
      <Contact />
    </>
  );
}

export default App;