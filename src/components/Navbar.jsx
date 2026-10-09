import { useEffect } from 'react'

export default function Navbar({ theme, onToggleTheme }) {
  useEffect(() => {
    const navbar = document.querySelector('.navbar')
    const navbarCollapse = document.getElementById('navbarNav')
    const navLinks = Array.from(document.querySelectorAll('.nav-link'))

    // ===== NAVBAR: close mobile menu on link click =====
    const bsCollapse = window.bootstrap
      ? new window.bootstrap.Collapse(navbarCollapse, { toggle: false })
      : null

    const closeMenu = () => {
      if (bsCollapse && navbarCollapse.classList.contains('show')) {
        bsCollapse.hide()
      }
    }

    navLinks.forEach(link => link.addEventListener('click', closeMenu))

    // ===== ACTIVE NAV LINK ON SCROLL =====
    const getSectionId = link => {
      const href = link.getAttribute('href')
      return href ? href.replace('#', '') : ''
    }

    const sections = navLinks
      .map(link => {
        const id = getSectionId(link)
        const el = document.getElementById(id)
        if (!el && id === 'home') {
          return { id, el: document.querySelector('.section-hero') }
        }
        return { id, el }
      })
      .filter(s => s.el)

    const updateActiveLink = () => {
      let current = ''
      const scrollY = window.scrollY + 120

      for (const s of sections) {
        const top = s.el.offsetTop
        const bottom = top + s.el.offsetHeight
        if (scrollY >= top && scrollY < bottom) {
          current = s.id
          break
        }
      }

      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`)
      })
    }

    // ===== NAVBAR SHADOW ON SCROLL =====
    const updateScrolled = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40)
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true })
    window.addEventListener('scroll', updateScrolled, { passive: true })
    updateActiveLink()
    updateScrolled()

    return () => {
      window.removeEventListener('scroll', updateActiveLink)
      window.removeEventListener('scroll', updateScrolled)
      navLinks.forEach(link => link.removeEventListener('click', closeMenu))
      if (bsCollapse) bsCollapse.dispose()
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">Dharmik</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto align-items-lg-center">
            <a className="nav-link active" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
            <a href="my-resume.pdf" download className="nav-resume-btn">
              <i className="fas fa-download"></i> Resume
            </a>
            <button className="toggle-btn" id="themeToggle" aria-label="Toggle theme" onClick={onToggleTheme}>
              <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
