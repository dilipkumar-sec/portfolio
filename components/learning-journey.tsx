import { Section } from '@/components/section'
import { Tag } from '@/components/tag'
import { milestones, type Milestone } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const statusStyles: Record<Milestone['status'], { label: string; dot: string }> = {
  completed: { label: 'Completed', dot: 'bg-primary border-primary' },
  'in-progress': { label: 'In progress', dot: 'bg-primary/30 border-primary' },
  planned: { label: 'Planned', dot: 'bg-background border-muted-foreground/50' },
}

export function LearningJourney() {
  return (
    <Section
      id="journey"
      index="04"
      title="Learning Journey"
      description="A running log of milestones and practical labs. Entries are updated as progress is made."
    >
      <ol className="relative ml-2 border-l border-border">
        {milestones.map((milestone) => {
          const status = statusStyles[milestone.status]
          return (
            <li key={milestone.title} className="relative pb-10 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className={cn('absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2', status.dot)}
              />
              <div className="flex flex-wrap items-center gap-2">
                <Tag variant="outline">{milestone.category}</Tag>
                <Tag variant={milestone.status === 'planned' ? 'default' : 'accent'}>{status.label}</Tag>
                {milestone.date ? (
                  <time className="font-mono text-xs text-muted-foreground">{milestone.date}</time>
                ) : null}
              </div>
              <h3 className="mt-3 font-medium">{milestone.title}</h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {milestone.description}
              </p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
