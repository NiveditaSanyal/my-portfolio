
const projects = [
  {
    title: "Bite-Box",
    description:
      "A responsive food ordering and delivery interface built using HTML, CSS, and JavaScript.",
    tech: "HTML, CSS, JavaScript",
    image: "/bitebox.jpg",
  },
  {
    title: "ChaleChalo",
    description:
      "A responsive travel app to explore destinations, discover places, and plan trips.",
    tech: "HTML, Bootstrap, JavaScript",
    image: "/chalechalo.jpg",
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width="600"
              height="350"
            />

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;