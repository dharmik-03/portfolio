import { build } from 'esbuild'
import { execFileSync } from 'node:child_process'
import { readFileSync, rmSync } from 'node:fs'
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
rmSync(outfile, { force: true })

function nodes(html) {
  const cleaned = html
    .replace(/<head[\s\S]*?<\/head>/gi, ' ')
    .replace(/<\/?(html|body)[^>]*>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')

  const out = []
  const tagRe = /<([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>/g
  let match
  while ((match = tagRe.exec(cleaned))) {
    const tag = match[1].toLowerCase()
    const attrs = match[2]
    const get = name => {
      const m = attrs.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*("([^"]*)"|'([^']*)')`))
      return m ? (m[2] ?? m[3]) : ''
    }
    out.push(`${tag} .${get('class')} #${get('id')}`)
  }
  return out
}

const original = nodes(readFileSync(path.join(root, '..', 'portfolio', 'index.html'), 'utf8'))
const react = nodes(rendered)

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

console.log(`original nodes: ${n}, react nodes: ${m}`)
if (!missing.length && !extra.length) {
  console.log('STRUCTURE MATCH: identical tag/class/id sequence')
} else {
  if (missing.length) console.log('MISSING in react:\n  ' + missing.join('\n  '))
  if (extra.length) console.log('EXTRA in react:\n  ' + extra.join('\n  '))
  process.exitCode = 1
}
