import { build } from 'esbuild'
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..')
const outfile = path.join(here, '.ssr-out.cjs')

await build({
  entryPoints: [path.join(here, 'ssr-entry.jsx')],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  jsx: 'automatic',
  outfile,
  logLevel: 'silent',
})

const rendered = execFileSync(process.execPath, [outfile], { encoding: 'utf8' })
writeFileSync(path.join(here, '.rendered.html'), rendered)

function decode(h) {
  return h
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&amp;/g, '&')
    .replace(/&copy;/g, '©')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

// The <head> lives in index.html (copied verbatim), so compare only <body> content.
function words(html) {
  const h = html
    .replace(/<head[\s\S]*?<\/head>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
  return decode(h).split(/\s+/).filter(Boolean)
}

const original = words(readFileSync(path.join(root, '..', 'portfolio', 'index.html'), 'utf8'))
const react = words(rendered)

// classic LCS diff over word sequences
const n = original.length
const m = react.length
const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1))
for (let i = n - 1; i >= 0; i--) {
  for (let j = m - 1; j >= 0; j--) {
    dp[i][j] = original[i] === react[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1])
  }
}

const missing = []
const extra = []
let i = 0
let j = 0
while (i < n && j < m) {
  if (original[i] === react[j]) {
    i++
    j++
  } else if (dp[i + 1][j] >= dp[i][j + 1]) {
    missing.push(original[i])
    i++
  } else {
    extra.push(react[j])
    j++
  }
}
while (i < n) missing.push(original[i++])
while (j < m) extra.push(react[j++])

console.log(`original words: ${n}, react words: ${m}`)
if (!missing.length && !extra.length) {
  console.log('TEXT MATCH: identical')
} else {
  if (missing.length) console.log('MISSING in react: ' + JSON.stringify(missing))
  if (extra.length) console.log('EXTRA in react:   ' + JSON.stringify(extra))
  process.exitCode = 1
}

rmSync(outfile, { force: true })
