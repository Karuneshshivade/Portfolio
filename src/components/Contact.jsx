import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container text-center">

        <h2 className="section-title mb-4">Contact Me</h2>

        <p>
          Let's connect and build something amazing.
        </p>

        <div className="contact-icons">

          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>

          <a href="https://github.com">
            <FaGithub />
          </a>

          <a href="mailto:karunesh@example.com">
            <FaEnvelope />
          </a>

        </div>
      </div>
    </section>
  );
}
export default Contact;