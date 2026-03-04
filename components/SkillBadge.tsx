import type { ProjectSkill } from '@/data/projectsData'

const colorClasses: Record<ProjectSkill['color'], string> = {
  primary:
    'bg-primary-400/10 text-primary-700 border-primary-400/25 dark:bg-primary-400/15 dark:text-primary-400/55 dark:border-primary-400/20',
  emerald:
    'bg-emerald-400/10 text-emerald-800 border-emerald-400/25 dark:bg-emerald-400/15 dark:text-emerald-300/55 dark:border-emerald-400/20',
  amber:
    'bg-amber-400/10 text-amber-800 border-amber-400/25 dark:bg-amber-400/15 dark:text-amber-300/55 dark:border-amber-400/20',
  violet:
    'bg-violet-400/10 text-violet-800 border-violet-400/25 dark:bg-violet-400/15 dark:text-violet-300/55 dark:border-violet-400/20',
  rose: 'bg-rose-400/10 text-rose-800 border-rose-400/25 dark:bg-rose-400/15 dark:text-rose-300/55 dark:border-rose-400/20',
  sky: 'bg-sky-400/10 text-sky-800 border-sky-400/25 dark:bg-sky-400/15 dark:text-sky-300/55 dark:border-sky-400/20',
  slate:
    'bg-slate-400/10 text-slate-700 border-slate-400/25 dark:bg-slate-400/15 dark:text-slate-300/55 dark:border-slate-400/20',
  teal: 'bg-teal-400/10 text-teal-800 border-teal-400/25 dark:bg-teal-400/15 dark:text-teal-300/55 dark:border-teal-400/20',
  indigo:
    'bg-indigo-400/10 text-indigo-800 border-indigo-400/25 dark:bg-indigo-400/15 dark:text-indigo-300/55 dark:border-indigo-400/20',
}

export default function SkillBadge({ label, color }: ProjectSkill) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium ${colorClasses[color]}`}
    >
      {label}
    </span>
  )
}
