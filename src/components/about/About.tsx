import "./About.scss";

export default function About() {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Nest.js",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "OpenAI",
  ];

  return (
    <section className="About" id="about">
      <div className="About__content">

        <div className="About__text">
      <h2 className="About__title">About Me</h2>

          <p>
            I'm a passionate full-stack developer with 2 years of commercial experience
            building modern web and mobile applications. I specialize in React,
            Node.js, and other modern technologies, with a focus on creating scalable,
            user-friendly solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>
        <div className="About__skills">
          <h3 className="About__skills-title">Skills</h3>
          <div className="About__skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="About__skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
