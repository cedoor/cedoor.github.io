import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'node:url'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeCitation from 'rehype-citation'

const bibPath = fileURLToPath(new URL('./src/data', import.meta.url))

export default defineConfig({
  site: 'https://cedoor.dev',
  output: 'static',
  integrations: [react(), mdx()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [rehypeCitation, { bibliography: 'references-data.bib', path: bibPath, csl: 'vancouver' }],
    ],
  },
})
