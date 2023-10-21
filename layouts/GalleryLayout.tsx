import { allImages } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import Image from 'next/image'

export const getStaticProps = async () => {
  return { props: { allImages } }
}

export default function GalleryLayout({
  allImages,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="grid grid-flow-dense grid-cols-1 gap-2 pt-8 sm:grid-cols-2">
      {allImages.map((image) => {
        return (
          <div key={image.src}>
            <Image
              src={image.src}
              alt={image.description}
              width="500"
              height="500"
              className="rounded-md"
            />

            <p className="px-2 py-3 italic text-gray-500 dark:text-gray-400">{image.description}</p>
          </div>
        )
      })}
    </div>
  )
}
