import rss, { type RSSFeedItem } from '@astrojs/rss'
import mdxRenderer from '@astrojs/mdx/server.js'
import { getCollection, render } from 'astro:content'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import type { APIContext } from 'astro'

function postprocessRssHtml(html: string, origin: string): string {
  return html
    .replace(/\bhref="\/(?!\/)/g, `href="${origin}/`)
    .replace(/\bsrc="\/(?!\/)/g, `src="${origin}/`)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .trim()
}

export async function GET(context: APIContext) {
  const site = context.site
  if (!site) {
    throw new Error('Set `site` in astro.config so RSS has absolute links.')
  }
  const origin = new URL('/', site).origin

  const container = await AstroContainer.create()
  container.addServerRenderer({ renderer: mdxRenderer })

  const posts = await getCollection('blog', ({ data }) => !data.draft)
  const sorted = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

  const items: RSSFeedItem[] = []
  for (const post of sorted) {
    const slug = post.id.replace(/\.mdx?$/, '')
    const { Content } = await render(post)
    const postUrl = new URL(`/blog/${slug}/`, site)
    const raw = await container.renderToString(Content, {
      request: new Request(postUrl),
    })
    const content = postprocessRssHtml(raw, origin)
    const summary = post.data.summary
    items.push({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/blog/${slug}/`,
      ...(summary !== undefined && { description: summary }),
      content,
    })
  }

  return rss({
    title: 'cedoor.dev',
    description: 'Software engineer focused on privacy, programmable cryptography, and learning tools.',
    site: site,
    items,
  })
}
