import type { NowActivities } from 'contentlayer/generated'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  content: Omit<NowActivities, '_id' | '_raw' | 'body'>
}

export default function NowLayout({ children, content }: Props) {
  const { title, icon } = content

  return (
    <div className="pt-8">
      <h4 className="sm:text-1xl md:text-1xl text-2xl capitalize tracking-tight text-gray-900 dark:text-gray-100">
        {icon && <span>{icon}&nbsp;&nbsp;</span>}
        {title}
      </h4>

      <div className="prose max-w-none pb-4 pt-8 dark:prose-dark">{children}</div>
    </div>
  )
}
