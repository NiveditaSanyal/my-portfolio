
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="intro">Hello, I'm</p>
        <h1>Nivedita Sanyal</h1>
        <h2>Frontend & React Developer</h2>

        <p>
          I build responsive and user-friendly web
          applications using modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/profile.jpg"
          alt="Nivedita Sanyal"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

export default Hero;