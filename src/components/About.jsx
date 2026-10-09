const features = [
  { icon: 'fas fa-brain', title: 'Problem Solver', text: 'I break down complex problems into clean, manageable solutions.' },
  { icon: 'fas fa-rocket', title: 'Fast Learner', text: 'I adapt quickly to new technologies and pick up new skills fast.' },
  { icon: 'fas fa-code', title: 'Clean Code', text: 'I write readable, maintainable code that follows best practices.' },
  { icon: 'fas fa-users', title: 'Team Player', text: 'I collaborate effectively and communicate clearly with teams.' },
]

export default function About() {
  return (
    <section className="about-section section-alt" id="about">
      <div className="container">
        <div className="section-header" data-aos="fade-up" data-aos-duration="600">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A developer who loves building</p>
        </div>
        <div className="about-grid" data-aos="fade-up" data-aos-duration="700">
          <div className="about-image-wrapper">
            <img src="img/man-working-laptop-from-office_1108340-892.jpg" alt="Dharmik coding" loading="lazy" />
          </div>
          <div className="about-text">
            <p>Hey there! I'm <strong>Dharmik Ragiya</strong>, a passionate <strong>Full Stack Web Developer</strong>
              currently pursuing my <strong>Bachelor of Computer Applications (BCA)</strong>. My journey into web
              development started with pure curiosity — I wanted to understand how websites actually work, and that
              curiosity quickly turned into a full-blown passion for building things on the web.</p>
            <p>I specialize in creating responsive, accessible interfaces using <strong>HTML5, CSS3, JavaScript, React ,
              TypeScript, and Bootstrap</strong>. On the backend, I build scalable REST APIs and server-side
              applications with <strong>Node.js, Express.js, and MongoDB</strong>, including JWT-based authentication and
              database modeling with Mongoose. I use <strong>Git & GitHub</strong> for version control and tools like
              Postman for API testing.</p>
            <p>Every project I've built — from e-commerce platforms to weather applications — has taught me something
              valuable about architecture, problem-solving, and the importance of good design. I genuinely enjoy turning
              ideas into working software and seeing them come to life on the web.</p>
            <p>When I'm not coding, I'm exploring new technologies, contributing to open source, or finding ways to
              improve my workflow. My goal is to join a top engineering team where I can solve challenging problems and
              build products that make a real difference.</p>
          </div>
        </div>
        <div className="feature-grid" data-aos="fade-up" data-aos-duration="800">
          {features.map(feature => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon"><i className={feature.icon}></i></div>
              <h4>{feature.title}</h4>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
