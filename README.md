# cedoor.dev

Source for [cedoor.dev](https://cedoor.dev) — a personal website for a software engineer focused on privacy and programmable cryptography.

## Stack

| Tool                                                                                                                                             | Role                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| [Astro 6](https://astro.build)                                                                                                                   | Static site generator and routing      |
| [React 18](https://react.dev)                                                                                                                    | Interactive islands (nav, blog search) |
| [MDX](https://mdxjs.com)                                                                                                                         | Blog post authoring                    |
| [remark-math](https://github.com/remarkjs/remark-math) + [rehype-katex](https://github.com/remarkjs/remark-math/tree/main/packages/rehype-katex) | LaTeX rendering in posts               |
| [pnpm](https://pnpm.io)                                                                                                                          | Package manager                        |
| [Prettier](https://prettier.io)                                                                                                                  | Formatting                             |

## Pages

| Route          | Description                                       |
| -------------- | ------------------------------------------------- |
| `/`            | About — bio and now section                       |
| `/projects`    | Timeline of projects, newest first                |
| `/blog`        | Searchable list of posts                          |
| `/blog/[slug]` | Individual post with full prose and LaTeX support |
| `/gallery`     | Photography grid                                  |

## Structure

```
src/
  components/
    Nav.tsx              # Theme toggle, hamburger menu, active nav links
    BlogSearch.tsx       # Client-side post filtering by title, date, or tag
  content/
    blog/                # MDX files — file name becomes the slug
  content.config.ts      # Astro 6 content layer (glob loader + schema)
  data/
    projects.ts          # Project timeline data
    gallery.ts           # Gallery items (src + caption)
  layouts/
    BaseLayout.astro     # HTML shell shared by all pages
  pages/                 # One file per route
  styles/
    global.css           # All design tokens and component styles
  utils/
    reading-time.ts      # Word-count reading time + date formatter
public/
  static/
    images/              # Photos and illustrations
    favicons/
```

## Dev

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # production build → dist/
pnpm preview    # preview the production build
pnpm format     # prettier --write .
```

## Design

Gruvbox dark by default, with a warm off-white light variant. Theme is toggled via a button in the nav and persisted to `localStorage`. An inline script in `<head>` applies the saved preference before first paint to avoid flash.

- **Serif** (body, headings, prose): EB Garamond
- **Monospace** (nav, labels, metadata): Courier New
- **Column width**: 660px max, single column
- **Accent**: orange (`#fe8019` dark / `#af3a03` light)

All design tokens are CSS custom properties in `src/styles/global.css`. No Tailwind, no CSS-in-JS.

## Content

### Adding a blog post

Create `src/content/blog/my-post.mdx` with the following frontmatter:

```yaml
---
title: Post title
date: '2026-01-15'
tags: ['cryptography']
summary: One-sentence description used as the meta description.
---
```

The slug is derived from the file name. Reading time is calculated automatically from the word count.

For posts with LaTeX, use standard KaTeX syntax — `$...$` for inline, `$$...$$` for display. The KaTeX stylesheet is only loaded on pages that contain math.

### Updating the now section

Edit the `nowItems` array in `src/pages/index.astro`.

### Adding a gallery photo

Add the image to `public/static/images/` and append an entry to `src/data/gallery.ts`:

```ts
{ src: '/static/images/photo.jpg', description: 'Caption text.' }
```

### Adding a project

Append to the `projects` array in `src/data/projects.ts`. HTML is allowed in the `description` field and rendered via Astro's `set:html`.
