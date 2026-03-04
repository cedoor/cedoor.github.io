import type { ProjectData } from '@/data/projectsData'
import SkillBadge from '@/components/SkillBadge'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'

interface Props {
  projects: ProjectData[]
}

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-md border border-gray-300 bg-[#f9f8f5] p-4 dark:border-gray-700 dark:bg-[#222220] md:p-5">
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
    <div className="relative">
      {/* Vertical spine */}
      <div
        className="absolute inset-y-0 left-5 w-px bg-gray-300 dark:bg-gray-700 md:left-1/2 md:-translate-x-1/2"
        aria-hidden
      />

      <ul className="relative">
        {projects.map((project, i) => {
          const isRight = i % 2 === 0
          return (
            <li
              key={project.title}
              className={`relative list-none ${i > 0 ? 'md:-mb-20 md:-translate-y-20' : ''}`}
              style={{ zIndex: i + 1 }}
            >
              {/* Circle on spine */}
              <div
                className="absolute left-5 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-300 bg-[#f9f8f5] dark:border-gray-700 dark:bg-[#222220] md:left-1/2"
                aria-hidden
              />
              {/* Connector: mobile (spine → card) */}
              <div
                className="absolute left-5 top-1/2 z-[5] h-px w-7 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 md:hidden"
                aria-hidden
              />
              {/* Connector: desktop (circle → card, direction depends on side) */}
              <div
                className={`absolute top-1/2 z-[5] hidden h-px w-8 -translate-y-1/2 bg-gray-300 dark:bg-gray-700 md:block ${
                  isRight ? 'left-1/2' : 'right-1/2'
                }`}
                aria-hidden
              />

              {/*
               * Card wrapper:
               * - Mobile: shifted right past the spine (ml-12) with vertical gap (py-2)
               * - Desktop right: starts at 50% with left padding (connector gap)
               * - Desktop left: constrained to left half, card flush-right with right padding
               */}
              <div
                className={`ml-12 py-2 md:ml-0 md:py-0 ${
                  isRight
                    ? 'md:ml-[50%] md:w-1/2 md:pl-8'
                    : 'md:flex md:w-1/2 md:justify-end md:pr-8'
                }`}
              >
                <ProjectCard project={project} />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
