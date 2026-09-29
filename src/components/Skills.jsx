
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Bootstrap",
  "Git & GitHub",
  "Responsive Design",
];

function Skills() {
  return (
    <section className="section" id="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;