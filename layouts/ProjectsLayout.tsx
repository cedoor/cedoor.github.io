import type { ProjectData } from '@/data/projectsData'
import SkillBadge from '@/components/SkillBadge'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'

interface Props {
  projects: ProjectData[]
}

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-md border border-gray-300 bg-[#f9f8f5] p-4 dark:border-gray-700 dark:bg-[#222220]">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-2">
        {project.subtitle && (
          <span className="text-xs text-gray-500 dark:text-gray-500">{project.subtitle}</span>
        )}
        <p className="ml-auto text-xs text-gray-500 dark:text-gray-500">{project.dateRange}</p>
      </div>
      <div className="mb-3 h-px bg-gray-300 dark:bg-gray-700" />
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-lg font-bold leading-tight text-gray-900 dark:text-gray-100">
          {project.title}
        </h2>
        {project.repoUrl && (
          <SocialIcon
            kind="github"
            href={project.repoUrl}
            svgClassName="fill-current h-4 w-4 text-black hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
          />
        )}
      </div>
      <div className="prose prose-sm mb-3 max-w-none flex-1 text-gray-600 dark:text-gray-400">
        {project.description}
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {project.skills.map((skill) => (
          <SkillBadge key={skill.label} {...skill} />
        ))}
      </div>
      {project.href && (
        <Link
          href={project.href}
          className="mt-2 inline-block text-sm font-bold text-link-500 hover:text-link-600 dark:text-link-500 dark:hover:text-link-600"
          aria-label={`Link to ${project.title}`}
        >
          Learn more &rarr;
        </Link>
      )}
    </div>
  )
}

export default function ProjectsLayout({ projects }: Props) {
  return (
    <div>
      <ul className="space-y-6">
        {projects.map((project, index) => (
          <li key={project.title} className="list-none">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  )
}
