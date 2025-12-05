import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !src || typeof src !== 'string') {
      setImageSrc(src)
      return
    }

    // Check if src contains a theme-aware marker
    if (src.includes('?theme-aware') || src.includes('&theme-aware')) {
      const basePath = src.split('?')[0].split('&')[0]
      const isDark = resolvedTheme === 'dark'

      // Insert -dark before file extension if dark theme
      const extensionMatch = basePath.match(/\.(png|jpg|jpeg|svg|webp)$/i)
      if (extensionMatch && isDark) {
        const extension = extensionMatch[0]
        const pathWithoutExt = basePath.replace(extension, '')
        setImageSrc(`${pathWithoutExt}-dark${extension}`)
      } else {
        setImageSrc(basePath)
      }
    } else {
      setImageSrc(src)
    }
  }, [mounted, resolvedTheme, src])

  return <NextImage src={imageSrc || src} {...rest} />
}

export default Image
