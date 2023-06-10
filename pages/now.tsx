import { MDXComponents } from '@/components/MDXComponents'
import { PageSEO } from '@/components/SEO'
import { allNowActivities } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

const DEFAULT_LAYOUT = 'NowLayout'

export const getStaticProps = async () => {
  return { props: { allNowActivities } }
}

export default function Now({ allNowActivities }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title="Now page" description="What I'm focused on at this point in my life." />

      <div className="prose max-w-none pb-4 pt-8 text-gray-500 dark:text-gray-400">
        This is my&nbsp;
        <Link href="https://nownownow.com/about" rel="nofollow" target="_blank">
          now page
        </Link>
        , a place where I can keep track of what I'm focused on at this point in my life.
      </div>

      {allNowActivities
        .sort((a, b) => (a.priority > b.priority ? 1 : -1))
        .map((nowActivity) => {
          return (
            <MDXLayoutRenderer
              key={nowActivity.path}
              layout={nowActivity.layout || DEFAULT_LAYOUT}
              content={nowActivity}
              MDXComponents={MDXComponents}
            />
          )
        })}
    </>
  )
}
