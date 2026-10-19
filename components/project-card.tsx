import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { Tag } from '@/components/tag'
import type { Project } from '@/lib/site-config'

const statusLabel: Record<Project['status'], string> = {
  placeholder: 'Placeholder',
  'in-progress': 'In progress',
  completed: 'Completed',
}

export function ProjectCard({ project }: { project: Project }) {
  const isPlaceholder = project.status === 'placeholder'

  return (
    <article
      className={`flex h-full flex-col rounded-lg border bg-card p-6 transition-colors hover:border-primary/40 ${
        isPlaceholder ? 'border-dashed border-border' : 'border-border'
      }`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <FolderGit2 className="size-6 text-primary" aria-hidden="true" />
        <Tag variant={isPlaceholder ? 'outline' : 'accent'}>{statusLabel[project.status]}</Tag>
      </div>

      <h3 className="text-lg font-medium">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        View on GitHub
        <ArrowUpRight className="size-4" aria-hidden="true" />
        <span className="sr-only">: {project.title} (opens in a new tab)</span>
      </a>
    </article>
  )
}
