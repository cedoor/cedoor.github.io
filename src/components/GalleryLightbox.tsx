import { useState, useEffect, useCallback } from 'react'

interface GalleryItem {
  src: string
  description: string
}

interface GalleryLightboxProps {
  items: GalleryItem[]
}

export default function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [active, setActive] = useState<GalleryItem | null>(null)

  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close])

  return (
    <>
      <div className="gallery-grid">
        {items.map((item) => (
          <figure key={item.src} className="gallery-figure">
            <button
              className="gallery-btn"
              onClick={() => setActive(item)}
              aria-label={`View: ${item.description}`}
            >
              <img
                className="gallery-img"
                src={item.src}
                alt={item.description}
                loading="lazy"
                decoding="async"
              />
            </button>
            <figcaption className="gallery-caption">{item.description}</figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <div className="lightbox-backdrop" onClick={close} role="dialog" aria-modal="true">
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img className="lightbox-img" src={active.src} alt={active.description} />
            <p className="lightbox-caption">{active.description}</p>
          </div>
        </div>
      )}
    </>
  )
}
