import { useEffect } from 'react'

const roles = ['MERN Stack Developer', 'Full Stack Developer']

export default function Hero() {
  // ===== TYPED TEXT ROTATION =====
  useEffect(() => {
    const typedEl = document.getElementById('typed-text')
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timer = null

    const schedule = (fn, ms) => {
      timer = setTimeout(fn, ms)
    }

    const typeEffect = () => {
      const current = roles[roleIndex]
      if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex - 1)
        charIndex--
      } else {
        typedEl.textContent = current.substring(0, charIndex + 1)
        charIndex++
      }

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true
        schedule(typeEffect, 2000)
        return
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false
        roleIndex = (roleIndex + 1) % roles.length
        schedule(typeEffect, 400)
        return
      }

      schedule(typeEffect, isDeleting ? 40 : 80)
    }

    schedule(typeEffect, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="section-hero" id="home">
      <div className="container">
        <div className="hero-content" data-aos="fade-up" data-aos-duration="800">
          <div className="hero-left">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name"><span>Dharmik Ragiya</span></h1>
            <div className="hero-role-wrapper">
              <span className="hero-role">I'm a</span>
              <span className="hero-role-text" id="typed-text">Full Stack Applications</span>
            </div>
            <p className="hero-description">
              A passionate Full Stack Web Developer focused on building scalable, performant web applications.
              I specialize in crafting responsive frontends with HTML, CSS, React, JavaScript & TypeScript, and
              architecting robust backends with Node.js, Express.js & MongoDB. I care deeply about clean code,
              great user experiences, and continuous learning.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-premium btn-premium-primary">
                <i className="fas fa-eye"></i> View Projects
              </a>
              <a href="my-resume.pdf" download className="btn-premium btn-premium-outline">
                <i className="fas fa-download"></i> Resume
              </a>
              <a href="#contact" className="btn-premium btn-premium-outline">
                <i className="fas fa-envelope"></i> Hire Me
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/dharmik-03" target="_blank" className="hero-social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/dharmik-ragiya/" target="_blank" className="hero-social-link"
                aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:dharmik161616@gmail.com" className="hero-social-link" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>

            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <img src="img/2unnamed.jpg" alt="Dharmik Ragiya" />
              <div className="floating-icon"><i className="fab fa-js"></i></div>
              <div className="floating-icon"><i className="fab fa-node-js"></i></div>
              <div className="floating-icon"><i className="fas fa-database"></i></div>
              <div className="floating-icon"><i className="fab fa-bootstrap"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
