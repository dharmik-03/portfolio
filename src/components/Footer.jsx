export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="navbar-brand" href="#home" style={{ display: 'block' }}>Dharmik</a>
            <p>A passionate Full Stack Web Developer focused on building scalable, performant web applications with modern
              technologies.</p>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul className="footer-links">
              <li><a href="#services">Frontend</a></li>
              <li><a href="#services">Backend</a></li>
              <li><a href="#services">Full Stack</a></li>
              <li><a href="#services">API Dev</a></li>
            </ul>
          </div>
          <div>
            <h5>Connect</h5>
            <div className="footer-social">
              <a href="https://github.com/dharmik-03" target="_blank" aria-label="GitHub"><i
                className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/dharmik-ragiya/" target="_blank" aria-label="LinkedIn"><i
                className="fab fa-linkedin-in"></i></a>

              <a href="https://wa.me/917573068252" target="_blank" aria-label="WhatsApp"><i
                className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Dharmik Ragiya.</p>
          <a href="#home" className="back-to-top" aria-label="Back to top">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
