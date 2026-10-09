const certificates = [
  // Certificate 1
  {
    icon: 'fas fa-award',
    title: 'Infosys Springboard | certificate',
    text: 'Completed the Infosys Springboard MERN Stack & Full Stack Development course, gaining practical skills in React.js, Node.js, Express.js, MongoDB, and REST APIs.',
    badgeClass: 'my-badge infosys',
    badge: '✔ Certified',
    link: 'https://drive.google.com/file/d/1OyjLi_xHgY74N6eRUvBUEg-gGNLUD2Hs/view?usp=drive_link',
  },
  // Certificate 2
  {
    icon: 'fas fa-trophy',
    title: 'Tech War 2026 Hackathon Winner',
    text: 'Won the Tech War 2026 Hackathon by building an innovative software solution, showcasing problem-solving, teamwork, and practical full-stack development skills.',
    badgeClass: 'my-badge winner',
    badge: '🏆 Winner',
    link: 'https://drive.google.com/file/d/1W8WsLHtA5-vNmd2qBf9UC8xEKj8DDuK9/view?usp=drive_link',
  },
  // Certificate 3
  {
    icon: 'fas fa-laptop-code',
    title: 'Future Forward – Design & Development',
    text: 'Completed the Future Forward Design & Development program, gaining practical skills in web design, frontend development, UI/UX, and responsive website development.',
    badgeClass: 'my-badge certified',
    badge: '✔ Certified',
    link: 'https://drive.google.com/file/d/19dTtGb8aeAIL9DcVQ7dbaF24m85-hXRb/view?usp=drive_link',
  },
]

export default function Certificates() {
  return (
    <section id="my-certificates-section">

      <div className="my-cert-header">
        <h2>Certifications</h2>
        <p>Credentials that validate my skills</p>
      </div>

      <div className="my-certificates-grid">

        {certificates.map(certificate => (
          <div className="my-certificate-card" key={certificate.title}>
            <div className="my-cert-icon">
              <i className={certificate.icon}></i>
            </div>

            <h3>{certificate.title}</h3>
            <p>{certificate.text}</p>

            <div className="my-cert-bottom">
              <span className={certificate.badgeClass}>{certificate.badge}</span>

              <a href={certificate.link} target="_blank" className="my-cert-btn">
                Verify Certificate
              </a>
            </div>
          </div>
        ))}

      </div>

    </section>
  )
}
