import { renderToStaticMarkup } from 'react-dom/server'
import App from '../src/App.jsx'

globalThis.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
}
globalThis.window = {
  matchMedia: () => ({ matches: false }),
}

process.stdout.write(renderToStaticMarkup(<App />))
