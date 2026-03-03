import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectsLayout from '@/layouts/ProjectsLayout'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description="Projects and experience from my professional journey."
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="block text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Projects that shaped my path.
          </p>
        </div>
        <div className="container pb-10 pt-8">
          <ProjectsLayout projects={projectsData} />
        </div>
      </div>
    </>
  )
}
