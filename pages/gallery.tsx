import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import GalleryLayout from '@/layouts/GalleryLayout'
import { allImages } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps = async () => {
  return { props: { allImages } }
}

export default function Gallery({ allImages }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title={`Gallery - ${siteMetadata.author}`}
        description="Fragments from my journeys."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="block text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Gallery
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Fragments from my journeys.
          </p>
        </div>
        <div className="container pb-10 pt-2">
          {Object.values(
            groupBy(
              allImages.sort(
                (a, b) => Number(a.category.split('-')[0]) - Number(b.category.split('-')[0])
              ),
              'category'
            )
          ).map((categoryImages) => (
            <div key={categoryImages[0].category}>
              <h4 className="sm:text-1xl md:text-1xl -mb-3 mt-4 text-2xl capitalize leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
                {categoryImages[0].category.split('-')[1]}
              </h4>

              <GalleryLayout allImages={categoryImages} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function groupBy(list: object[], key: string) {
  return list.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}
