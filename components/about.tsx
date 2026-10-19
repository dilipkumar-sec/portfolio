import { Section } from '@/components/section'

const focusAreas = [
  { label: 'Approach', value: 'Hands-on labs' },
  { label: 'Focus', value: 'Penetration testing' },
  { label: 'Platforms', value: 'Linux & Windows' },
  { label: 'Interest', value: 'Network pentesting' },
]

export function About() {
  return (
    <Section id="about" index="01" title="About Me">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <p>
            {"I'm a cybersecurity learner focused on "}
            <span className="text-foreground">penetration testing</span>
            {' and the fundamentals behind red team operations. My goal is to understand how systems work well enough to see how they can break — and how to communicate those findings responsibly.'}
          </p>
          <p>
            {"Most of my learning happens through "}
            <span className="text-foreground">hands-on labs</span>
            {'. I practice in legal, intentionally vulnerable environments where I can make mistakes, take notes, and repeat a methodology until it becomes second nature.'}
          </p>
          <p>
            {"Right now I'm strengthening my "}
            <span className="text-foreground">networking fundamentals</span>
            {', getting comfortable across '}
            <span className="text-foreground">Linux</span>
            {' and '}
            <span className="text-foreground">Windows</span>
            {', and studying '}
            <span className="text-foreground">web application security</span>
            {'. This site is where I document that progress honestly as it happens.'}
          </p>
        </div>

        <dl className="grid h-fit grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
          {focusAreas.map((item) => (
            <div key={item.label} className="bg-background p-5">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{item.label}</dt>
              <dd className="mt-2 text-sm font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
