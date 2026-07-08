# cedoor.dev

Personal website for Omar (cedoor), a software engineer focused on privacy and programmable cryptography. The design is minimal, personality-driven, and warm. Not corporate, not a portfolio template.

For writing or editing blog **prose** (the author's voice, frontmatter, KaTeX math, citations, illustrations), the `blog-post` skill carries the full guidance. This file covers the codebase, the design system, and the technical side of the content layer.

## Stack

| Tool                    | Role                                                 |
| ----------------------- | ---------------------------------------------------- |
| Astro 6 (static output) | Page rendering and routing                           |
| React 18                | Interactive islands (`client:load`): Nav, BlogSearch |
| MDX                     | Blog post authoring                                  |
| pnpm                    | Package manager                                      |
| Prettier                | Formatting                                           |

Vite is Astro's bundler, so no separate Vite config is needed.

## Pages

| Route          | File                             | Notes                                            |
| -------------- | -------------------------------- | ------------------------------------------------ |
| `/`            | `src/pages/index.astro`          | About: avatar, bio, Now section                  |
| `/projects`    | `src/pages/projects.astro`       | Timeline of 11 projects, newest first            |
| `/blog`        | `src/pages/blog/index.astro`     | Searchable list via `BlogSearch` React component |
| `/blog/[slug]` | `src/pages/blog/[...slug].astro` | MDX post rendered via Astro content layer        |
| `/gallery`     | `src/pages/gallery.astro`        | Photo grid                                       |

## File layout

```
src/
  components/
    Nav.tsx            # React (client:load) — theme toggle, hamburger, active link
    BlogSearch.tsx     # React (client:load) — filters posts by title/date/tag
  content/
    blog/              # MDX files; file name = slug
  content.config.ts    # Astro 6 content layer (glob loader)
  data/
    projects.ts        # All 11 projects with HTML description strings
    gallery.ts         # 4 gallery items with src + caption
  layouts/
    BaseLayout.astro   # HTML shell: anti-FOUC script, Nav, footer, slot
  pages/               # (see routes above)
  styles/
    global.css         # All design tokens and component styles
  utils/
    reading-time.ts    # readingTime(body) + formatDate(date)
public/
  static/
    images/            # avatar.jpg, gallery photos, greco illustrations
    favicons/
```

## Dev commands

```
pnpm dev       # start dev server
pnpm build     # production build to dist/
pnpm preview   # preview production build
pnpm format    # prettier --write .
```

## Design system

### Theme

Two variants, dark (default) and light, controlled by a `data-theme="light"` attribute on `<html>`. Dark is the default; no attribute means dark. Theme is persisted to `localStorage` under the key `theme`.

CSS custom properties are declared in `src/styles/global.css`:

| Token             | Dark            | Light           | Use                            |
| ----------------- | --------------- | --------------- | ------------------------------ |
| `--bg`            | `#282828`       | `#fafaf7`       | Page background                |
| `--bg-hard`       | `#1d2021`       | `#f4f3ee`       | Elevated surfaces, code blocks |
| `--surface`       | `#3c3836`       | `#ececea`       | Cards, skill badges            |
| `--text`          | `#ebdbb2`       | `#2b2b2b`       | Primary text                   |
| `--text-soft`     | `#d5c4a1`       | `#3c3836`       | Body prose                     |
| `--muted`         | `#928374`       | `#7c6f64`       | Meta, labels, nav, captions    |
| `--faint`         | `#665c54`       | `#bdb6ac`       | Inactive nav links             |
| `--border`        | `#3c3836`       | `#e6e4df`       | Dividers                       |
| `--border-strong` | `#504945`       | `#d6d3cc`       | Active borders, skill badges   |
| `--orange`        | `#fe8019`       | `#af3a03`       | Accent (default), now arrows   |
| `--yellow`        | `#fabd2f`       | `#b57614`       | Alternate accent               |
| `--blue`          | `#83a598`       | `#076678`       | Alternate accent               |
| `--accent`        | `var(--orange)` | `var(--orange)` | Current accent color           |

### Typography

- **Body / headings / prose**: `var(--font-serif)` = `'Lora', Georgia, serif` (loaded from Google Fonts)
- **Nav, labels, metadata, captions, code**: `var(--font-mono)` = `'IBM Plex Mono', monospace`
- No sans-serif anywhere. No Inter, no system-ui.

Typical sizes:

- Page `h1`: 22px (20px at ≤560px)
- Bio / prose body: 16–17px, `line-height: 1.85`
- Nav links / labels: 11–12px
- Captions: 11px, `var(--muted)`, no italic

### Layout

- Single column; shell width `--shell-max` (660px base, up to 860px from 1400px viewport), `margin: 0 auto`.
- Shell padding: 32px sides, tightening to 22px (≤720px), 20px (≤560px), 18px (≤420px).
- Nav: `padding-top: 56px`, `padding-bottom: 64px`.
- Footer: `margin-top: 96px`.

### Responsive breakpoints

| Breakpoint | Changes                                                                                 |
| ---------- | --------------------------------------------------------------------------------------- |
| `≤720px`   | Shell padding tightens, nav/footer spacing compresses                                   |
| `≤560px`   | Blog rows reflow to 2-line grid, gallery 3→2 columns, nav links hidden, hamburger shown |
| `≤420px`   | Shell padding further reduced, timeline indent tightens                                 |

### CSS conventions

- All styles live in `src/styles/global.css`. No CSS modules, no scoped styles.
- Use class names in Astro (`class=`) and React (`className=`). Inline styles only for values computed at render time (e.g. sequential `index`-based animation delays), never for static design tokens.
- `::selection` uses `var(--orange)` background with `var(--bg-hard)` text.
- Transitions on color/border-color: `120ms ease`. On background: `200ms ease`.
- Links in prose: `color: var(--accent)`, underline with `text-decoration-color: var(--border-strong)` shifting to `var(--accent)` on hover.

### Tone

Flat surfaces only. No gradients, no box shadows on content (only on the mobile nav dropdown). No decorative effects. Generous whitespace.

## Constraints

Hard rules. What NOT to do.

### Never use inline styles for colors or typography

All colors and fonts are expressed via CSS custom properties (`var(--bg)`, `var(--text)`, `var(--font-serif)`, etc.) defined in `src/styles/global.css`. Using hex codes or font names as inline styles bypasses theming and will break light mode.

### Never add Tailwind or a CSS-in-JS library

Styling is plain CSS in `src/styles/global.css`. Class names are applied via `className` in React and `class` in Astro. Do not reach for Tailwind, emotion, styled-components, or any utility-class framework. The design system is small enough that it does not need one.

### Never render React components without a `client:` directive

Astro renders React server-side by default, producing static HTML with no interactivity. `Nav` and `BlogSearch` must have `client:load` (or another `client:*` directive) on their Astro call sites, or they will not hydrate.

### Never put logic in layouts

`BaseLayout.astro` is structural only: HTML shell, meta tags, anti-FOUC script, Nav, footer, and a `<slot />`. Data fetching and page-specific logic belong in the page file.

### Never add new pages without updating the nav

`Nav.tsx` has a hardcoded `LINKS` array. Adding a route without updating `LINKS` leaves it unreachable from the navigation.

### Never edit files under `public/static/` generated by tools

`public/static/favicons/` was generated from the source avatar. Regenerate via the original toolchain if the source changes. Do not hand-edit PNG/ICO files.

### Never use `post.slug`, it was removed in Astro 6

Use `post.id.replace(/\.mdx?$/, '')` to derive the slug from the content layer entry. `post.slug` does not exist in Astro 6's content layer API.

### Never call `entry.render()`, it was removed in Astro 6

Import `render` from `astro:content` and call `render(entry)`. The old method form (`entry.render()`) does not exist in Astro 6.

## Content layer (technical)

For blog authoring (frontmatter schema, KaTeX, citations, writing voice) use the `blog-post` skill. This section covers only the code side: how posts are loaded and rendered, the static data files, and reading time.

Posts live in `src/content/blog/`. The file name is the slug (e.g. `greco.mdx` serves at `/blog/greco`).

The collection is defined in `src/content.config.ts` using the `glob` loader:

```typescript
import { glob } from 'astro/loaders'
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({ ... })
})
```

### Key API differences from Astro 4 legacy collections

| Legacy (Astro ≤4)                     | Astro 6                                                 |
| ------------------------------------- | ------------------------------------------------------- |
| `src/content/config.ts`               | `src/content.config.ts`                                 |
| `entry.slug`                          | `entry.id.replace(/\.mdx?$/, '')`                       |
| `entry.render()`                      | `import { render } from 'astro:content'; render(entry)` |
| `type: 'content'` in defineCollection | `loader: glob(...)`                                     |

### Usage in pages

```typescript
// blog/index.astro
const posts = await getCollection('blog', ({ data }) => !data.draft)
const slug = post.id.replace(/\.mdx?$/, '')

// blog/[...slug].astro
import { render } from 'astro:content'
const { Content } = await render(post)
```

### Themed illustrations

For a light/dark adaptive illustration, provide two files (`example.png` and `example-dark.png`, or `example-light.svg`/`example-dark.svg`) and render them with `src/components/ThemedIllustration.astro`, which toggles visibility via `[data-theme='light']` CSS rather than JS. Props: `lightSrc`, `darkSrc`, `alt` (required, describes the image for screen readers), `caption` (optional, rendered as a `<figcaption>` below the figure, styled via `.prose .themed-illustration figcaption` in `global.css`). Do not add a plain paragraph under the illustration for a description; use `caption` instead.

### Static data (not MDX)

Projects and gallery items are TypeScript files under `src/data/`, not content collections.

- `src/data/projects.ts`, a `Project[]` with HTML string descriptions rendered via `set:html` in Astro. HTML uses `<b>`, `<a>`, `<br>` only. No script tags, no events.
- `src/data/gallery.ts`, a `GalleryItem[]` with `src` and `description`.

### Reading time

Calculated in `src/utils/reading-time.ts` from `post.body` (raw MDX string) at ~200 words/minute. `post.body` may be `undefined` for some loader configurations, so always use `post.body ?? ''`.
