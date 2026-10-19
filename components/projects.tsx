import { Info } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { Section } from '@/components/section'
import { projects } from '@/lib/site-config'

export function Projects() {
  const hasPlaceholders = projects.some((p) => p.status === 'placeholder')

  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      description="A space for the tools, scripts, and write-ups I build while learning."
    >
      {hasPlaceholders ? (
        <p className="mb-8 flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          Cards marked “Placeholder” are planned projects, not completed work. They will be updated with real
          details and repositories as each one is built.
        </p>
      ) : null}

      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
