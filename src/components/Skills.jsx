import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJava,
  FaJsSquare,
   FaDatabase,
   FaLeaf,
   FaGitAlt,
   FaAngular
} from 'react-icons/fa';

function Skills() {

  const skills = [
      {
        name: 'HTML',
        icon: <FaHtml5 />
      },
      {
          name: 'CSS',
          icon: <FaCss3Alt />
        },
        {
            name: 'JavaScript',
            icon: <FaJsSquare />
        },
        {
            name: 'Bootstrap',
            icon: <FaBootstrap />
        },
        {
          name: 'React',
          icon: <FaReact />
        },
        {
        name: 'Angular',
        icon: <FaAngular />
        },
    {
      name: 'Java',
      icon: <FaJava />
    },
    {
      name: 'Spring Boot',
      icon: <FaLeaf />
    },
    {
    name: 'MySQL',
    icon: <FaDatabase />
    },
    {
    name: 'Git',
    icon: <FaGitAlt />
    },
    ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">

        <h2 className="section-title text-center mb-5">
          My Skills
        </h2>

        <div className="row">

          {skills.map((skill, index) => (
            <div
              className="col-md-3 mb-4"
              key={index}
              data-aos="zoom-in"
            >

              <div className="skill-card text-center">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h5>{skill.name}</h5>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;