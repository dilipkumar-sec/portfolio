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

const MediumIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.37 7.01a.7.7 0 0 0-.23-.59L2.4 4.15V3.8h5.4l4.18 9.17 3.67-9.17h5.15v.35l-1.49 1.43a.43.43 0 0 0-.16.41v10.36a.43.43 0 0 0 .16.41l1.46 1.43v.35h-7.36v-.35l1.51-1.47c.15-.15.15-.2.15-.41V7.93l-4.2 10.57h-.57L5.42 7.93v7.09a.96.96 0 0 0 .26.8l1.96 2.38v.35H2.08v-.35l1.96-2.38a.93.93 0 0 0 .24-.8V6.82a.7.7 0 0 0-.24-.6L2.2 4.15V3.8h5.16l3.99 8.75L15 3.8h5.8v.35l-1.48 1.43a.43.43 0 0 0-.16.41v10.36a.43.43 0 0 0 .16.41l1.48 1.43v.35h-7.44v-.35l1.53-1.47c.15-.15.15-.2.15-.41V7.01" />
  </svg>
)

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
    label: 'Medium',
    value: 'medium.com/@dilipkumar-sec',
    href: 'https://medium.com/@dilipkumar-sec',
    icon: MediumIcon,
    external: true,
  },
  {
    label: 'Email',
    value: 'dilipkumarbsec@gmail.com',
    href: 'mailto:dilipkumarbsec@gmail.com',
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
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                <Icon
                  className="mb-4 size-5 text-primary"
                  aria-hidden="true"
                />
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
