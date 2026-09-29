
function Resume() {
  return (
    <section className="section resume" id="resume">
      <h2>My Resume</h2>

      <p>
        Download my resume to learn more about my
        education, skills, and projects.
      </p>

      <a
        href="/resume.pdf"
        className="btn"
        download
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;