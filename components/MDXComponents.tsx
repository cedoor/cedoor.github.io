/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MDXLayout, ComponentMap } from 'pliny/mdx-components'
import { TOCInline } from 'pliny/ui/TOCInline'
import { Pre } from 'pliny/ui/Pre'
import { BlogNewsletterForm } from 'pliny/ui/NewsletterForm'

import Image from './Image'
import CustomLink from './Link'

export const Wrapper = ({ layout, content, ...rest }: MDXLayout) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout content={content} {...rest} />
}

const ThemedImg = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const { src, alt, ...rest } = props
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

  return <img src={imageSrc || src} alt={alt} {...rest} />
}

export const MDXComponents: ComponentMap = {
  Image,
  img: ThemedImg,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  BlogNewsletterForm,
}
