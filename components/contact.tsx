import type { ComponentType, SVGProps } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Section } from '@/components/section'

type ContactLink = {
  label: string
  value: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  external: boolean
}

const contactLinks: ContactLink[] = [
  {
    label: 'GitHub',
    value: 'github.com/dilipkumar-sec',
    href: 'https://github.com/dilipkumar-sec',
    icon: GithubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dilipkumar-sec',
    href: 'https://www.linkedin.com/in/dilipkumar-sec',
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'Email',
    value: 'dilipkumarbsec@gmail.com',
    href: 'mailto:YOUR_EMAIL_ADDRESS',
    icon: Mail,
    external: false,
  },
]

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      title="Get in Touch"
      description="Open to connecting with others in security, discussing labs, or learning about entry-level opportunities."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {contactLinks.map(({ label, value, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="group flex h-full items-start justify-between gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="min-w-0">
                <Icon className="mb-4 size-5 text-primary" aria-hidden="true" />
                <p className="font-medium">{label}</p>
                <p className="mt-1 truncate font-mono text-xs text-muted-foreground">
                  {value}
                </p>
                {external ? (
                  <span className="sr-only">(opens in a new tab)</span>
                ) : null}
              </div>

              <ArrowUpRight
                className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
