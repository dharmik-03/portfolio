# Portfolio (React)

This is your original `portfolio` site, converted to React. The UI, text, styles, images and
behaviour are the same — only the implementation changed (HTML/JS → React components).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the build
```

## Structure

```
index.html            same <head>, CDNs (Bootstrap, Font Awesome, AOS, EmailJS) + #root
public/style.css      copied unchanged from portfolio/style.css
public/img/           copied unchanged from portfolio/img/
public/my-resume.pdf  copied unchanged
src/App.jsx           theme state + AOS init, renders all sections
src/components/
  Navbar.jsx        nav, theme toggle, active-link on scroll, mobile menu close
  Hero.jsx          typed text rotation (useEffect)
  Stats.jsx         animated counters (useEffect + IntersectionObserver)
  About.jsx
  Skills.jsx        skill bar fill animation (useEffect + IntersectionObserver)
  Services.jsx
  Projects.jsx
  Achievements.jsx
  Certificates.jsx
  Contact.jsx       EmailJS form submit
  Footer.jsx
scripts/             optional checks that the React output matches the original
  check-text.mjs       text content must be identical
  check-structure.mjs  tag/class/id sequence must be identical
  check-rendered.mjs   optional: compare two dumped DOMs (node script <fileA> <fileB>)
```

`npm run check` runs both checks against the original `../portfolio/index.html`.
