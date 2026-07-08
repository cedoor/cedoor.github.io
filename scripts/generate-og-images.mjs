import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const blogDir = join(root, 'src/content/blog')
const templatePath = join(__dirname, 'social-preview.template.svg')
const avatarPath = join(root, 'public/static/images/og-avatar.jpg')
const aboutPath = join(root, 'src/data/about.ts')
const outDir = join(root, 'public/static/images/og')

const AUTHOR = 'Omar Desogus'
const AVATAR_URL = `data:image/jpeg;base64,${readFileSync(avatarPath).toString('base64')}`
const ROLE =
  readFileSync(aboutPath, 'utf8').match(/export const role = '([^']+)'/)?.[1] ??
  'Software engineer · privacy, cryptography & learning tools'
const PAD_X = 80
const CONTENT_MAX_W = 1000
const MIDDLE_TOP = 158
const MIDDLE_BOTTOM = 530

const template = readFileSync(templatePath, 'utf8')

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return {}

  const yaml = match[1]
  const data = {}

  const title = yaml.match(/^title:\s*(.+)$/m)?.[1]?.trim()
  if (title) data.title = title.replace(/^['"]|['"]$/g, '')

  const date = yaml.match(/^date:\s*(.+)$/m)?.[1]?.trim()
  if (date) data.date = date.replace(/^['"]|['"]$/g, '')

  const draft = yaml.match(/^draft:\s*(.+)$/m)?.[1]?.trim()
  data.draft = draft === 'true'

  return data
}

function titleFontSize(title) {
  const len = title.length
  if (len > 90) return 46
  if (len > 60) return 56
  if (len > 40) return 66
  return 76
}

function maxCharsPerLine(fontSize) {
  const avgWidth = fontSize * 0.52
  return Math.max(12, Math.floor(CONTENT_MAX_W / avgWidth))
}

function wrapWords(text, maxChars) {
  const words = text.split(/\s+/).filter(Boolean)
  const lines = []
  let line = ''

  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (next.length > maxChars && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }

  if (line) lines.push(line)
  return lines
}

function formatOgDate(dateValue) {
  const date = new Date(dateValue)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

function buildTitle(title, fontSize) {
  const lineHeight = Math.round(fontSize * 1.15 * 10) / 10
  const letterSpacing = Math.round(fontSize * -0.01 * 100) / 100
  const lines = wrapWords(title, maxCharsPerLine(fontSize))
  const titleLineHeight = fontSize * 1.15
  const titleHeight = lines.length * titleLineHeight
  const titleY = Math.round(
    MIDDLE_TOP + (MIDDLE_BOTTOM - MIDDLE_TOP - titleHeight) / 2 + titleLineHeight * 0.82
  )

  const tspans = lines
    .map((line, index) => {
      const attrs = index === 0 ? `x="${PAD_X}" y="${titleY}"` : `x="${PAD_X}" dy="${lineHeight}"`
      return `    <tspan ${attrs}>${escapeXml(line)}</tspan>`
    })
    .join('\n')

  return `<text class="serif" font-size="${fontSize}" letter-spacing="${letterSpacing}">\n${tspans}\n  </text>`
}

export function renderOgSvg({ title, date, author = AUTHOR }) {
  const titleBlock = buildTitle(title, titleFontSize(title))

  return template
    .replace('{{ARIA_TITLE}}', escapeXml(`${title} - cedoor.dev blog`))
    .replace('{{AVATAR_URL}}', escapeXml(AVATAR_URL))
    .replace('{{ROLE}}', escapeXml(ROLE))
    .replace('{{TITLE}}', titleBlock)
    .replace('{{AUTHOR}}', escapeXml(author))
    .replace('{{DATE}}', escapeXml(formatOgDate(date)))
}

function main() {
  mkdirSync(outDir, { recursive: true })

  const files = readdirSync(blogDir).filter((name) => /\.mdx?$/.test(name))
  let count = 0

  for (const file of files) {
    const slug = file.replace(/\.mdx?$/, '')
    const source = readFileSync(join(blogDir, file), 'utf8')
    const { title, date, draft } = parseFrontmatter(source)

    if (draft || !title || !date) continue

    const svg = renderOgSvg({ title, date })
    writeFileSync(join(outDir, `${slug}.svg`), svg)
    count += 1
    console.log(`og  ${slug}.svg`)
  }

  console.log(`\nGenerated ${count} OG image(s) in public/static/images/og/`)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main()
}
