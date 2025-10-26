import Link from 'next/link'
import { kebabCase } from 'pliny/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 text-sm font-bold uppercase text-link-500 hover:text-link-600 dark:text-link-500 dark:hover:text-link-600"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
