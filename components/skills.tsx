import { Braces, Globe, Monitor, Network, ScanSearch, Terminal, SquareTerminal, type LucideIcon } from 'lucide-react'
import { Section } from '@/components/section'
import { Tag } from '@/components/tag'
import { skills } from '@/lib/site-config'

const skillIcons: Record<string, LucideIcon> = {
  Networking: Network,
  Linux: Terminal,
  'Windows & PowerShell': Monitor,
  'Web Application Security': Globe,
  Enumeration: ScanSearch,
  'Bash Scripting': SquareTerminal,
  Python: Braces,
}

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      title="Technical Skills"
      description="Core areas I'm actively studying and practicing. Each is a work in progress."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          const Icon = skillIcons[skill.name] ?? Terminal
          return (
            <li
              key={skill.name}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-medium">{skill.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${skill.name} topics`}>
                {skill.topics.map((topic) => (
                  <li key={topic}>
                    <Tag>{topic}</Tag>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
