import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    icon: 'fab fa-html5',
    title: 'Frontend',
    items: [
      { icon: 'fab fa-html5', name: 'HTML5', width: 92 },
      { icon: 'fab fa-css3-alt', name: 'CSS3', width: 88 },
      { icon: 'fab fa-js', name: 'JavaScript (ES6+)', width: 80 },
      { icon: 'fab fa-react', name: 'React', width: 80 },
       { icon: 'fab fa-js', name: 'TypeScript', width: 60 },
      { icon: 'fab fa-bootstrap', name: 'Bootstrap', width: 88 },
    ],
  },
  {
    icon: 'fab fa-node-js',
    title: 'Backend',
    items: [
      { icon: 'fab fa-node-js', name: 'Node.js', width: 78 },
      { icon: 'fab fa-node-js', name: 'Express.js', width: 78 },
      { icon: 'fas fa-plug', name: 'REST APIs', width: 82 },
      { icon: 'fas fa-lock', name: 'JWT Authentication', width: 70 },
    ],
  },
  {
    icon: 'fas fa-database',
    title: 'Database',
    items: [
      { icon: 'fas fa-database', name: 'MongoDB', width: 75 },
      { icon: 'fas fa-leaf', name: 'Mongoose', width: 70 },
    ],
  },
  {
    icon: 'fas fa-code',
    title: 'Languages',
    items: [
      { icon: 'fas fa-code', name: 'C', width: 65 },
      { icon: 'fas fa-code', name: 'C++', width: 55 },
    ],
  },
  {
    icon: 'fas fa-tools',
    title: 'Tools',
    items: [
      { icon: 'fab fa-git-alt', name: 'Git', width: 82 },
      { icon: 'fab fa-github', name: 'GitHub', width: 82 },
      { icon: 'fas fa-flask', name: 'Postman', width: 72 },
      { icon: 'fas fa-code', name: 'VS Code', width: 88 },
      { icon: 'fas fa-database', name: 'MongoDB Compass', width: 65 },
    ],
  },
  {
    icon: 'fas fa-cogs',
    title: 'Dev Workflow',
    items: [
      { icon: 'fas fa-mobile-alt', name: 'Responsive Design', width: 85 },
      { icon: 'fas fa-sync-alt', name: 'CRUD Operations', width: 80 },
      { icon: 'fas fa-link', name: 'API Integration', width: 78 },
      { icon: 'fas fa-shield-alt', name: 'Auth & Authorization', width: 70 },
      { icon: 'fas fa-layer-group', name: 'MVC Architecture', width: 72 },
    ],
  },
]

export default function Skills() {
  const gridRef = useRef(null)

  // ===== SKILL BAR ANIMATION =====
  useEffect(() => {
    const skillBars = Array.from(gridRef.current.querySelectorAll('.skill-bar-fill'))

    skillBars.forEach(bar => {
      bar.style.width = '0'
    })

    const barObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target
            if (bar.dataset.targetWidth) {
              bar.style.width = bar.dataset.targetWidth + '%'
            }
            barObserver.unobserve(bar)
          }
        })
      },
      { threshold: 0.3 }
    )

    skillBars.forEach(bar => barObserver.observe(bar))

    return () => barObserver.disconnect()
  }, [])

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header" data-aos="fade-up" data-aos-duration="600">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Tools I use to build and ship</p>
        </div>
        <div className="skills-grid" ref={gridRef} data-aos="fade-up" data-aos-duration="700">
          {skillGroups.map(group => (
            <div className="skill-card" key={group.title}>
              <div className="skill-card-header">
                <div className="skill-card-icon"><i className={group.icon}></i></div>
                <h3 className="skill-card-title">{group.title}</h3>
              </div>
              <div className="skill-items">
                {group.items.map(item => (
                  <div className="skill-item" key={item.name}>
                    <span className="skill-item-icon"><i className={item.icon}></i></span>
                    <span className="skill-item-name">{item.name}</span>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" data-target-width={item.width}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
