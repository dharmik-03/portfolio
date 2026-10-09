import { useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)

  // ===== EMAILJS =====
  const handleSubmit = event => {
    event.preventDefault()
    setSending(true)

    window.emailjs
      .send(
        'service_mxdgmiu',
        'template_jicbzu5',
        {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value,
        },
        { publicKey: 'pj8wIiBzPo2npZ1gu' }
      )
      .then(() => {
        alert('Message sent successfully!')
        formRef.current.reset()
        setSending(false)
      })
      .catch(error => {
        console.log(error)
        alert('Failed to send message. Please try again.')
        setSending(false)
      })
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up" data-aos-duration="600" style={{ marginBottom: '32px' }}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project? Let's talk about it</p>
        </div>
        <div className="contact-grid" data-aos="fade-up" data-aos-duration="700">
          <div className="contact-info-card">
            <h3>Let's build something together</h3>
            <p>I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!</p>
            <div className="contact-detail">
              <div className="contact-detail-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <h5>Location</h5>
                <p>Bhavnagar, Gujarat 364240</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><i className="fas fa-envelope"></i></div>
              <div>
                <h5>Email</h5>
                <a href="mailto:dharmik161616@gmail.com">dharmik161616@gmail.com</a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><i className="fas fa-phone-alt"></i></div>
              <div>
                <h5>Phone</h5>
                <a href="tel:+917573068252">+91 7573068252</a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><i className="fas fa-clock"></i></div>
              <div>
                <h5>Availability</h5>
                <p>Open to freelance & full-time opportunities</p>
              </div>
            </div>
            <div className="contact-social">
              <a href="https://github.com/dharmik-03" target="_blank" className="contact-social-link"
                aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/dharmik-ragiya/" target="_blank" className="contact-social-link"
                aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>

              <a href="https://wa.me/917573068252" target="_blank" className="contact-social-link" aria-label="WhatsApp"><i
                className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className="contact-form-card">
            <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="submit-btn" id="submitBtn" disabled={sending}>
                {sending
                  ? <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                  : <><i className="fas fa-paper-plane"></i> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
