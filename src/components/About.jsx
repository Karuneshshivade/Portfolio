import profileImage from '../assets/profile.jpg'

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-4" data-aos="fade-right">
            <img
              src={profileImage}
              alt="profile"
              className="img-fluid profile-image"
            />
          </div>

          <div className="col-md-6" data-aos="fade-left">
            <h2 className="section-title">About Me</h2>

            <p>
              I completed BE Computer Engineering from
              Savitribai Phule Pune University.
            </p>

            <p>
              I completed Full Stack Java Development
              training from Seed Infotech.
            </p>

            <p>
              I worked as a Web Developer at Streamline Tech
              where I developed web applications and trained interns.
            </p>

            <p>
              I love creating responsive, modern and scalable applications.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;