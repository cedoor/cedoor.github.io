import { MDXComponents } from '@/components/MDXComponents'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
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
      <PageSEO
        title={`Now - ${siteMetadata.author}`}
        description="What I'm focused on at this point in my life."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="block text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Now page
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            This is my&nbsp;
            <Link href="https://nownownow.com/about" rel="nofollow" target="_blank">
              now page
            </Link>
            , a place where I can keep track of what I'm focused on at this point in my life.
          </p>
        </div>
        <div className="container pb-10 pt-2">
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
        </div>
      </div>
    </>
  )
}
