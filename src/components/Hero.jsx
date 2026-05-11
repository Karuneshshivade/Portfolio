import { ReactTyped } from 'react-typed';
import resume from '../assets/resume.pdf';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content text-center">

        <h1 className="hero-title">
          Hi, I'm <span>Karunesh Shivade</span>
        </h1>

        <ReactTyped
          strings={[
            'Full Stack Java Developer',
            'React Developer',
            'Angular Developer',
            'Spring Boot Developer',
            'Frontend Developer',
            'Backend Developer'
          ]}
          typeSpeed={60}
          backSpeed={50}
          loop
          className="typed-text"
        />

        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">

          <a href="#projects" className="btn hero-btn">
            Explore My Work
          </a>

          <a
            href={resume}
            download
            className="btn hero-btn"
          >
            Download Resume
          </a>

        </div>
      </div>
    </section>
  );
}
export default Hero;