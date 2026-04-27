import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft)
  const sorted = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

  return rss({
    title: 'cedoor.dev',
    description: 'Software engineer focused on privacy and programmable cryptography.',
    site: context.site!,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/blog/${post.id.replace(/\.mdx?$/, '')}/`,
    })),
  })
}
