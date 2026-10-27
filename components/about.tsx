import { Section } from '@/components/section'

const focusAreas = [
  {
    label: 'Certification',
    value: 'INE eJPT',
    detail: 'Junior Penetration Tester',
    number: '01',
  },
  {
    label: 'Currently Learning',
    value: 'HTB CPTS',
    detail: 'Penetration Testing Path',
    number: '02',
  },
  {
    label: 'Specialization',
    value: 'Network Security',
    detail: 'Enumeration & Pentesting',
    number: '03',
  },
  {
    label: 'Environment',
    value: 'Linux / Windows',
    detail: 'System & Security Fundamentals',
    number: '04',
  },
]

export function About() {
  return (
    <Section id="about" index="01" title="About Me">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        {/* Introduction */}
        <div className="space-y-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              A little about my journey
            </p>

            <h3 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Building my skills.
              <br />
              <span className="text-muted-foreground">
                One lab at a time.
              </span>
            </h3>
          </div>

          <div className="max-w-xl space-y-4 text-pretty leading-7 text-muted-foreground">
            <p>
              I'm a cybersecurity practitioner focused on{' '}
              <span className="font-medium text-foreground">
                penetration testing
              </span>
              , network security, and understanding how systems can be
              exploited and secured.
            </p>

            <p>
              I learn through hands-on labs, document my findings, and
              practice a structured approach to discovering vulnerabilities
              in authorized environments.
            </p>

            <p>
              Currently pursuing the{' '}
              <span className="font-medium text-foreground">
                HTB Certified Penetration Testing Specialist (CPTS)
              </span>{' '}
              path, I'm strengthening my networking, Linux, Windows, and web
              application security skills.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              LEARNING IN PROGRESS
            </span>

            <span className="font-mono text-xs text-muted-foreground">
              DOCUMENTING THE JOURNEY
            </span>
          </div>
        </div>

        {/* Focus cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {focusAreas.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:bg-muted/30"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.label.toUpperCase()}
                </span>

                <span className="font-mono text-xs text-muted-foreground/50 transition-colors duration-300 group-hover:text-foreground">
                  {item.number}
                </span>
              </div>

              <h4 className="text-lg font-semibold tracking-tight">
                {item.value}
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
