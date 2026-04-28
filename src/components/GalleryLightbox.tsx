import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react'

interface GalleryItem {
  src: string
  description: string
}

interface GalleryLightboxProps {
  items: GalleryItem[]
}

export default function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  const wasClosedRef = useRef(true)

  const close = useCallback(() => setOpenIndex(null), [])

  const go = useCallback(
    (delta: number) => {
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setOpenIndex((prev) => {
        if (prev === null) return prev
        const n = (prev + delta + items.length) % items.length
        requestAnimationFrame(() => {
          const s = stripRef.current
          if (s) s.scrollTo({ left: n * s.clientWidth, behavior: smooth ? 'smooth' : 'auto' })
        })
        return n
      })
    },
    [items.length]
  )

  useLayoutEffect(() => {
    if (openIndex === null) {
      wasClosedRef.current = true
      return
    }
    const strip = stripRef.current
    if (!strip) return
    if (wasClosedRef.current) {
      wasClosedRef.current = false
      const w = strip.clientWidth
      if (w > 0) {
        strip.scrollTo({ left: openIndex * w, behavior: 'auto' })
      }
    }
  }, [openIndex])

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (items.length < 2) return
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(-1)
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        go(1)
      }
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex, close, go, items.length])

  const onStripScroll = useCallback(() => {
    if (openIndex === null || !stripRef.current) return
    const strip = stripRef.current
    const w = strip.clientWidth
    if (w <= 0) return
    const i = Math.round(strip.scrollLeft / w)
    const c = Math.max(0, Math.min(items.length - 1, i))
    if (c !== openIndex) setOpenIndex(c)
  }, [openIndex, items.length])

  const onLightboxInnerClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      const t = e.target as HTMLElement
      if (t.closest('button.lightbox-arrow')) return
      if (t.closest('.lightbox-img')) return
      close()
    },
    [close]
  )

  const multi = items.length > 1

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <figure key={item.src} className="gallery-figure">
            <button
              className="gallery-btn"
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View: ${item.description}`}
            >
              <img
                className="gallery-img"
                src={item.src}
                alt={item.description}
                loading="eager"
                decoding="async"
              />
            </button>
            <figcaption className="gallery-caption">{item.description}</figcaption>
          </figure>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="lightbox-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery viewer"
        >
          <div className="lightbox-inner" onClick={onLightboxInnerClick}>
            <div className="lightbox-stage">
              {multi && (
                <>
                  <button
                    type="button"
                    className="lightbox-arrow lightbox-arrow--prev"
                    aria-label="Previous image"
                    onClick={(e) => {
                      e.stopPropagation()
                      go(-1)
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 3 5 8l5 5" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="lightbox-arrow lightbox-arrow--next"
                    aria-label="Next image"
                    onClick={(e) => {
                      e.stopPropagation()
                      go(1)
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 3 5 5-5 5" />
                    </svg>
                  </button>
                </>
              )}
              <div ref={stripRef} className="lightbox-strip" onScroll={onStripScroll}>
                {items.map((item) => (
                  <div key={item.src} className="lightbox-slide">
                    <img
                      className="lightbox-img"
                      src={item.src}
                      alt={item.description}
                      decoding="async"
                    />
                    <p className="lightbox-caption">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
