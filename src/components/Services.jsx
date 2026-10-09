const services = [
  {
    icon: 'fas fa-palette',
    title: 'Frontend Development',
    text: 'Responsive, accessible interfaces with HTML5, CSS3, JavaScript, TypeScript & Bootstrap.',
  },
  {
    icon: 'fas fa-server',
    title: 'Backend Development',
    text: 'Scalable server-side apps with Node.js, Express.js, MongoDB, and secure JWT authentication.',
  },
  {
    icon: 'fas fa-plug',
    title: 'REST API Development',
    text: 'Design and build RESTful APIs with proper routing, middleware, validation, and documentation.',
  },
  {
    icon: 'fas fa-layer-group',
    title: 'Full Stack Development',
    text: 'End-to-end web apps combining frontend UI with backend logic, databases, auth, and deployment.',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Responsive Websites',
    text: 'Websites that look great on every device — desktop, tablet, and mobile — with clean adaptive layouts.',
  },
  {
    icon: 'fas fa-database',
    title: 'Database Design',
    text: 'Structured MongoDB schemas with Mongoose, optimized queries, and efficient data modeling.',
  },
  {
    icon: 'fas fa-lock',
    title: 'Authentication System',
    text: 'Secure login systems with JWT, password hashing, protected routes, and user session management.',
  },
  {
    icon: 'fas fa-cloud-upload-alt',
    title: 'Website Deployment',
    text: 'Deploy frontend and backend applications to platforms like Netlify, Vercel, and Render.',
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header" data-aos="fade-up" data-aos-duration="600">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">What I can help you with</p>
        </div>
        <div className="services-grid" data-aos="fade-up" data-aos-duration="700">
          {services.map(service => (
            <div className="service-card" key={service.title}>
              <div className="service-icon"><i className={service.icon}></i></div>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
              <a href="#contact" className="btn-premium btn-premium-outline" style={{ fontSize: '0.78rem', padding: '7px 18px' }}>Learn
                More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
