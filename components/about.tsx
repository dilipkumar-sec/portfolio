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
      <div className="grid items-center gap-14 md:grid-cols-[1fr_0.95fr] lg:gap-20 xl:gap-24">

        {/* Introduction */}
        <div className="flex flex-col justify-center">
          <div className="mb-7">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              A little about my journey
            </p>

            <h3 className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.65rem]">
              Building my skills.
              <br />
              <span className="text-muted-foreground">
                One lab at a time.
              </span>
            </h3>
          </div>

          <div className="max-w-xl space-y-5 text-pretty text-[15px] leading-8 text-muted-foreground">
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

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 font-mono text-[11px] tracking-wide text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              LEARNING IN PROGRESS
            </span>

            <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
              DOCUMENTING THE JOURNEY
            </span>
          </div>
        </div>

        {/* Focus Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {focusAreas.map((item) => (
            <div
              key={item.label}
              className="group relative flex min-h-[190px] flex-col overflow-hidden rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:bg-muted/30 lg:min-h-[205px] lg:p-7"
            >
              <div className="mb-auto flex items-center justify-between gap-3 pb-8">
                <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </span>

                <span className="font-mono text-xs text-muted-foreground/50 transition-colors duration-300 group-hover:text-foreground">
                  {item.number}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-semibold leading-snug tracking-tight lg:text-xl">
                  {item.value}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}
