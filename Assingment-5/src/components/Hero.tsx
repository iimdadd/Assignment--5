function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-small-text">
          BUILD YOUR DEVELOPER STACK
        </p>

        <h1>
          Discover the tools
          <span> that build the web.</span>
        </h1>

        <p className="hero-description">
          Explore modern technologies, compare their strengths,
          and create your own developer technology stack.
        </p>

        <div className="hero-buttons">
          <a href="#technologies" className="primary-button">
            Explore Technologies
          </a>

          <a href="#technologies" className="secondary-button">
            Learn More
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
          alt="Developer technology workspace"
        />
      </div>
    </section>
  );
}

export default Hero;