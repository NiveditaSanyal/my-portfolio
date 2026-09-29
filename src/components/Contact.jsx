
function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        Have a project or opportunity in mind?
        Feel free to get in touch.
      </p>

      <a
        href="mailto:your-email@example.com"
        className="btn"
      >
        Send Email
      </a>

      <p>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>
        {" | "}
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>
    </section>
  );
}

export default Contact;