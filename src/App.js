import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import Counter from './components/Counter';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Counter />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;