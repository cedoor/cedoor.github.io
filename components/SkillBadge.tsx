import type { ProjectSkill } from '@/data/projectsData'

const colorClasses: Record<ProjectSkill['color'], string> = {
  primary: 'bg-primary-400/10 text-primary-700 dark:bg-primary-400/15 dark:text-primary-400/55',
  emerald: 'bg-emerald-400/10 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300/55',
  amber: 'bg-amber-400/10 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300/55',
  violet: 'bg-violet-400/10 text-violet-800 dark:bg-violet-400/15 dark:text-violet-300/55',
  rose: 'bg-rose-400/10 text-rose-800 dark:bg-rose-400/15 dark:text-rose-300/55',
  sky: 'bg-sky-400/10 text-sky-800 dark:bg-sky-400/15 dark:text-sky-300/55',
  slate: 'bg-slate-400/10 text-slate-700 dark:bg-slate-400/15 dark:text-slate-300/55',
}

export default function SkillBadge({ label, color }: ProjectSkill) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium ${colorClasses[color]}`}
    >
      {label}
    </span>
  )
}
