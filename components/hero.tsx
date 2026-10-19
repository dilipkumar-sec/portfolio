import { ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { siteConfig } from '@/lib/site-config'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/4%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/4%)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col justify-center px-6 py-24">
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700 motion-reduce:animate-none">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Currently learning offensive security
          </p>

          <h1 id="hero-heading" className="text-6xl font-semibold tracking-tighter sm:text-7xl md:text-8xl">
            {siteConfig.name}
            <span className="text-primary">.</span>
          </h1>

          <p className="mt-6 text-balance text-xl font-medium text-foreground sm:text-2xl">
            Cybersecurity Enthusiast <span className="text-muted-foreground" aria-hidden="true">|</span>
            <span className="sr-only">,</span> Aspiring Penetration Tester
          </p>

          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.intro}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              View Projects
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border px-6 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <GithubIcon className="size-4" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
