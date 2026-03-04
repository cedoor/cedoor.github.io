import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className="flex items-center py-10">
      <div className="flex flex-1 items-center">
        <Link href="/" aria-label={siteMetadata.headerTitle} className="flex items-center">
          {typeof siteMetadata.headerTitle === 'string' ? (
            <span className="text-2xl font-semibold leading-8">{siteMetadata.headerTitle}</span>
          ) : (
            siteMetadata.headerTitle
          )}
        </Link>
      </div>
      <nav className="hidden items-center justify-center gap-1 sm:flex sm:gap-4">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <div className="flex flex-1 items-center justify-end gap-2">
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
