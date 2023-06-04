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
      <h2 className="text-2xl font-bold leading-8 tracking-tight">
        {icon && <span>{icon}&nbsp;&nbsp;</span>}
        {title}
      </h2>

      <div className="prose max-w-none pb-8 pt-8 dark:prose-dark">{children}</div>
    </div>
  )
}
