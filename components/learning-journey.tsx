import { Crosshair, Globe, Monitor, Network, Terminal, Wrench, type LucideIcon } from 'lucide-react'
import { milestones, type Milestone } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const icons: Record<Milestone['icon'], LucideIcon> = {
  network: Network,
  linux: Terminal,
  windows: Monitor,
  web: Globe,
  offensive: Crosshair,
  tooling: Wrench,
}

const statusStyles: Record<Milestone['status'], { label: string; className: string }> = {
  completed: { label: 'Completed', className: 'border-primary/40 bg-primary/15 text-primary' },
  'in-progress': { label: 'In Progress', className: 'border-primary/30 bg-primary/10 text-primary' },
  learning: { label: 'Learning', className: 'border-primary/20 bg-primary/5 text-primary/90' },
  planned: { label: 'Planned', className: 'border-border bg-secondary text-muted-foreground' },
}

function JourneyCard({ milestone }: { milestone: Milestone }) {
  const Icon = icons[milestone.icon]
  const status = statusStyles[milestone.status]

  return (
    <li className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/40">
      <div className="flex items-start justify-between gap-4">
        <span
          aria-hidden="true"
          className="flex size-10 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors duration-200 group-hover:border-primary/40 group-hover:text-primary"
        >
          <Icon className="size-5" strokeWidth={1.5} />
        </span>
        <span
          className={cn(
            'shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider',
            status.className,
          )}
        >
          <span className="sr-only">Status: </span>
          {status.label}
        </span>
      </div>

      <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">{milestone.category}</p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">{milestone.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{milestone.description}</p>
    </li>
  )
}

export function LearningJourney() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary">
            <span aria-hidden="true">05 / </span>
            <span className="sr-only">Section 05: </span>
            Learning Journey
          </p>
          <h2 id="journey-heading" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Building My Skills
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            My ongoing journey into cybersecurity, penetration testing, and offensive security.
          </p>
        </header>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((milestone) => (
            <JourneyCard key={milestone.title} milestone={milestone} />
          ))}
        </ul>
      </div>
    </section>
  )
}
