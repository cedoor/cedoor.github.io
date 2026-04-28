import { useState, useMemo, useRef } from 'react'

export interface PostMeta {
  slug: string
  title: string
  summary: string
  date: string
  readTime: string
  tags: string[]
}

interface BlogSearchProps {
  posts: PostMeta[]
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return posts
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.date.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    )
  }, [query, posts])

  return (
    <>
      <form
        role="search"
        className={
          query.trim() ? 'blog-search-wrap blog-search-wrap--has-query' : 'blog-search-wrap'
        }
        onSubmit={(e) => {
          e.preventDefault()
          inputRef.current?.blur()
        }}
      >
        <span className="blog-search-icon" aria-hidden="true">
          <svg
            width="13"
            height="13"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="7" cy="7" r="4.5" />
            <path d="M10.5 10.5 14 14" />
          </svg>
        </span>
        <input
          ref={inputRef}
          className="blog-search-input"
          type="text"
          name="blog-search"
          inputMode="search"
          enterKeyHint="search"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== 'Enter' && e.key !== 'Go') return
            e.preventDefault()
            ;(e.target as HTMLInputElement).blur()
          }}
          placeholder="search posts…"
          aria-label="Search posts"
        />
        {query && (
          <button
            className="blog-search-clear"
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </form>

      {filtered.length === 0 ? (
        <p className="blog-empty">no posts match &ldquo;{query}&rdquo;</p>
      ) : (
        <ul className="blog-list">
          {filtered.map((post, i) => (
            <li key={post.slug} style={{ animationDelay: `${i * 40}ms` }}>
              <a className="blog-row" href={`/blog/${post.slug}`}>
                <span className="blog-date">{post.date}</span>
                <span className="blog-main">
                  <span className="blog-title">{post.title}</span>
                  {post.summary ? <span className="blog-summary">{post.summary}</span> : null}
                </span>
                <span className="blog-read">{post.readTime}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
