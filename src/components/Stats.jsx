import { useEffect, useRef } from 'react'

const stats = [
  { target: 7, suffix: '+', label: 'Projects Completed' },
  { target: 2, suffix: 'x', label: 'Hackathon Winner' },
  { target: 15, suffix: '+', label: 'Technologies Learned' },
  { target: 2025, suffix: '', label: 'Learning Journey Started' },
]

export default function Stats() {
  const gridRef = useRef(null)

  // ===== ANIMATED COUNTERS =====
  useEffect(() => {
    const frames = []
    const counters = Array.from(gridRef.current.querySelectorAll('.counter'))

    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target
            const target = parseInt(el.getAttribute('data-target'))
            const duration = 2000
            const start = performance.now()

            const update = now => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              el.textContent = Math.floor(eased * target)
              if (progress < 1) {
                frames.push(requestAnimationFrame(update))
              } else {
                el.textContent = target
              }
            }

            frames.push(requestAnimationFrame(update))
            counterObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )

    counters.forEach(c => counterObserver.observe(c))

    return () => {
      counterObserver.disconnect()
      frames.forEach(frame => cancelAnimationFrame(frame))
    }
  }, [])

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid" ref={gridRef} data-aos="fade-up" data-aos-duration="700">
          {stats.map(stat => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-value">
                <span className="counter" data-target={stat.target}>0</span>
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
