const achievements = [
  {
    icon: 'fas fa-trophy',
    title: 'Hackathon Winner',
    text: 'Won college-level hackathons building full-stack applications.',
  },
  {
    icon: 'fas fa-layer-group',
    title: '7+ Projects',
    text: 'Built and deployed multiple web applications from scratch.',
  },
  {
    icon: 'fab fa-github',
    title: 'GitHub Commits',
    text: 'Active GitHub profile with consistent contributions.',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Continuous Learning',
    text: 'Always exploring new tools, languages, and best practices.',
  },
  {
    icon: 'fas fa-user-graduate',
    title: 'BCA Student',
    text: 'Pursuing Bachelor of Computer Applications degree.',
  },
]

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <div className="section-header" data-aos="fade-up" data-aos-duration="600">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Milestones and recognitions</p>
        </div>
        <div className="achievements-grid" data-aos="fade-up" data-aos-duration="700">
          {achievements.map(achievement => (
            <div className="achievement-card" key={achievement.title}>
              <div className="achievement-icon"><i className={achievement.icon}></i></div>
              <h4>{achievement.title}</h4>
              <p>{achievement.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
