import { useState, useEffect } from 'react'

interface NavProps {
  currentPath: string
}

const LINKS = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
]

function isActive(href: string, currentPath: string) {
  if (href === '/') return currentPath === '/' || currentPath === ''
  return currentPath.startsWith(href)
}

export default function Nav({ currentPath }: NavProps) {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [themeIconSpin, setThemeIconSpin] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.getAttribute('data-theme') !== 'light')
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 560) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setThemeIconSpin(true)
    }
  }

  return (
    <nav className="nav">
      <a href="/" className="nav-logo">
        cedoor.dev
      </a>

      <div className="nav-right">
        <div className="nav-links">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${isActive(link.href, currentPath) ? ' active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          className="nav-icon-btn nav-theme-btn"
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={toggleTheme}
        >
          <span
            className={`nav-theme-btn-icon${themeIconSpin ? ' nav-theme-btn-icon--spin' : ''}`}
            aria-hidden
            onAnimationEnd={() => setThemeIconSpin(false)}
          >
            {/* Moon: light (switch to dark). Sun: dark (switch to light). */}
            {isDark ? (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="8" r="2.6" />
                <path d="M8 1.5v1.6M8 12.9v1.6M1.5 8h1.6M12.9 8h1.6M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M3.4 12.6l1.1-1.1M11.5 4.5l1.1-1.1" />
              </svg>
            ) : (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 9.5A5 5 0 0 1 6.5 3a.5.5 0 0 0-.7-.6A6 6 0 1 0 13.6 10.2a.5.5 0 0 0-.6-.7Z" />
              </svg>
            )}
          </span>
        </button>

        {/* Hamburger (mobile only, shown via CSS) */}
        <button
          className="nav-icon-btn nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <path d="M3.5 3.5 12.5 12.5" />
                <path d="M12.5 3.5 3.5 12.5" />
              </>
            ) : (
              <>
                <path d="M2.5 5h11" />
                <path d="M2.5 8h11" />
                <path d="M2.5 11h11" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-mobile-link${isActive(link.href, currentPath) ? ' active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
