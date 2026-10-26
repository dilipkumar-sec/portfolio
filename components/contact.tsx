import type { ComponentType, SVGProps } from 'react'
import { Mail } from 'lucide-react'
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
    label: 'LinkedIn',
    value: 'linkedin.com/in/dilipkumar-sec',
    href: 'https://www.linkedin.com/in/dilipkumar-sec',
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/dilipkumar-sec',
    href: 'https://github.com/dilipkumar-sec',
    icon: GithubIcon,
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
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {contactLinks.map(({ label, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              aria-label={label}
              title={label}
              className="group flex size-12 items-center justify-center rounded-sm border border-border bg-transparent text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Icon
                className="size-5 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              {external ? (
                <span className="sr-only">(opens in a new tab)</span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
