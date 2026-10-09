const projects = [
  // Project 1: E-Commerce
  {
    title: 'E-Commerce Website',
    live: 'https://e-commerce-1p.netlify.app/',
    image: 'img/p2.png',
    imageAlt: 'E-Commerce Website',
    imageStyle: null,
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    text: 'Modern, responsive e-commerce website with product listings, shopping cart, and a clean, user-friendly shopping experience.',
    code: 'https://github.com/dharmik-03/Javascript/tree/main/E-Commerce',
  },
  // Project 2: Construction
  {
    title: 'Construction Website',
    live: 'https://brikly-construction.vercel.app/',
    image: 'img/p1.png',
    imageAlt: 'Construction Website',
    imageStyle: null,
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    text: 'Modern, responsive construction website showcasing services, projects, and company information with a professional design.',
    code: 'https://github.com/dharmik-03/brikly-construction',
  },
  // Project 3: ToDO
  {
    title: 'ToDO App',
    live: 'https://todoreactds.vercel.app/',
    image: '/img/p3.png',
    imageAlt: '',
    imageStyle: {
      background: 'linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tags: ['REACT', 'CSS3', 'Bootstrap 5', 'Modern UI'],
    text: 'A modern and fully responsive ToDo application built with React, Bootstrap 5, and CSS, featuring a clean interface and a smooth user experience across devices.',
    code: 'https://github.com/dharmik-03/TODO-react/',
  },
  // Project 4: Nature Image Slider
  {
    title: 'Nature Image Slider',
    live: 'https://slider-project-js03.netlify.app/',
    image: '/img/p4.png',
    imageAlt: '',
    imageStyle: {
      background: 'linear-gradient(135deg,#0b0f1a,#1a1a2e,#16213e)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    text: 'Lightweight image slider built with Vanilla JavaScript. Auto-cycles through images with smooth transitions and manual Previous & Next navigation.',
    code: 'https://github.com/dharmik-03/Javascript/tree/main/slider-project',
  },
  // Project 5: Greenly Landscaping
  {
    title: 'Greenly Landscaping',
    live: 'https://greenly-project.netlify.app/',
    image: '/img/p5.png',
    imageAlt: '',
    imageStyle: {
      background: 'linear-gradient(135deg,#0a1f0e,#1a3a1a,#2d5a27)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'Responsive'],
    text: 'Modern landscaping business website with service showcase, testimonials, image gallery, FAQ section, and professional business-oriented design.',
    code: 'https://github.com/dharmik-03/web-flow-compitition',
  },
  // Project 6: Weather app
  {
    title: 'Weather App',
    live: 'https://weather-api033.netlify.app/',
    image: '/img/p6.png',
    imageAlt: '',
    imageStyle: {
      background: 'linear-gradient(135deg,#1a1a3e,#2d1b69,#3a0ca3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    text: 'A responsive Weather Application that provides real-time weather information using the OpenWeather API. Users can search for any city to instantly view current weather conditions through a clean and modern interface.',
    code: 'https://github.com/dharmik-03/Javascript/tree/main/weather-API',
  },
]

export default function Projects() {
  return (
    <section className="projects-section section-alt" id="projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up" data-aos-duration="600">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built from the ground up</p>
        </div>
        <div className="projects-grid" data-aos="fade-up" data-aos-duration="700">
          {projects.map(project => (
            <div
              className="project-card"
              key={project.title}
              onClick={() => window.open(project.live, '_blank')}
            >
              <div className="project-image" style={project.imageStyle || undefined}>
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
                <div className="project-overlay"></div>
                <span className="project-status">Live</span>
              </div>
              <div className="project-body">
                <h4>{project.title}</h4>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <p>{project.text}</p>
                <div className="project-actions">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium btn-premium-primary"
                    onClick={event => event.stopPropagation()}
                  >
                    <i className="fas fa-external-link-alt"></i> Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium btn-premium-outline"
                    onClick={event => event.stopPropagation()}
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
