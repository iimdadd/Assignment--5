function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">DS</div>

          <h3>Dev Stack</h3>

          <p>
            Discover modern technologies and build your own
            developer stack for learning and projects.
          </p>

          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#home">Features</a>
          <a href="#technologies">Your Stack</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;