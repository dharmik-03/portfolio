import { readFileSync } from 'node:fs'

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

function clean(html) {
  return html
    .replace(/<head[\s\S]*?<\/head>/gi, ' ')
    .replace(/<\/?(html|body)[^>]*>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
}

function words(html) {
  return decode(clean(html).replace(/<[^>]+>/g, ' '))
    .split(/\s+/)
    .filter(Boolean)
}

function nodes(html) {
  const out = []
  const tagRe = /<([a-zA-Z][a-zA-Z0-9-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>/g
  let match
  const cleaned = clean(html)
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

function diff(a, b, label) {
  const n = a.length
  const m = b.length
  const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1])
    }
  }
  const onlyA = []
  const onlyB = []
  let i = 0
  let j = 0
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      i++
      j++
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      onlyA.push(a[i])
      i++
    } else {
      onlyB.push(b[j])
      j++
    }
  }
  while (i < n) onlyA.push(a[i++])
  while (j < m) onlyB.push(b[j++])
  console.log(`\n== ${label} == (${n} vs ${m})`)
  if (!onlyA.length && !onlyB.length) {
    console.log('identical')
  } else {
    if (onlyA.length) console.log(`only in A (${onlyA.length}): ` + JSON.stringify(onlyA))
    if (onlyB.length) console.log(`only in B (${onlyB.length}): ` + JSON.stringify(onlyB))
  }
}

const [, , fileA, fileB] = process.argv
const a = readFileSync(fileA, 'utf8')
const b = readFileSync(fileB, 'utf8')
console.log(`A = ${fileA}\nB = ${fileB}`)
diff(words(a), words(b), 'TEXT')
diff(nodes(a), nodes(b), 'STRUCTURE (tag.class#id)')
