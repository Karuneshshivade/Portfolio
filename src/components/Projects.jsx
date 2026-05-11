import { motion } from 'framer-motion';

function Projects() {

  const projects = [
    {
      title: 'IoT Smart Parking System',
      description:
        'Developed an IoT based smart parking system where users can check real-time parking slot availability through website. Built responsive frontend and integrated parking status monitoring.',
      image:
        'https://images.unsplash.com/photo-1506521781263-d8422e82f27a',
      technologies: [
        'React',
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap'
      ]
    },

    {
      title: 'Smart Agricultural Equipment Rental System',
      description:
        'Created a platform where farmers can rent farming equipment online. The system helps farmers easily access agricultural machinery through web platform.',
      image:
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854',
      technologies: [
        'React',
        'Spring Boot',
        'Java',
        'MySQL'
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section py-5">

      <div className="container">

        <h2 className="section-title text-center mb-5">
          My Projects
        </h2>

        <div className="row">

          {projects.map((project, index) => (

            <div className="col-lg-6 col-md-6 mb-4" key={index}>

              <motion.div
                className="project-card"
                data-aos="zoom-in"
                whileHover={{
                  scale: 1.03,
                  y: -10
                }}
                transition={{
                  duration: 0.3
                }}
              >

                <div className="project-image-container">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid project-image"
                  />

                </div>

                <div className="project-content">

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tech-stack">

                    {project.technologies.map((tech, i) => (
                      <span
                        className="tech-badge"
                        key={i}
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  <div className="project-buttons mt-4">

                    <button className="btn hero-btn me-3">
                      Live Demo
                    </button>

                    <button className="btn btn-outline-light">
                      GitHub
                    </button>

                  </div>

                </div>

              </motion.div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;