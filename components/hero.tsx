'use client'

import { useEffect, useState } from 'react'
import { Orbitron } from 'next/font/google'
import { ArrowDownRight, ArrowRight, ShieldCheck } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { siteConfig } from '@/lib/site-config'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const terminalLines = [
  { command: 'whoami', output: 'dilipkumar' },
  {
    command: 'cat current_focus.txt',
    output: 'Penetration Testing | Network Security',
  },
  { command: 'cat certification.txt', output: 'eJPT Certified' },
  { command: './next-mission.sh', output: 'Learning in progress...' },
]

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [typedCommand, setTypedCommand] = useState('')

  useEffect(() => {
    let lineIndex = 0
    let characterIndex = 0
    let timeout: ReturnType<typeof setTimeout>

    const typeNext = () => {
      if (lineIndex >= terminalLines.length) {
        timeout = setTimeout(() => {
          setVisibleLines(0)
          setTypedCommand('')
          lineIndex = 0
          characterIndex = 0
          timeout = setTimeout(typeNext, 700)
        }, 3500)
        return
      }

      const command = terminalLines[lineIndex].command

      if (characterIndex < command.length) {
        characterIndex += 1
        setTypedCommand(command.slice(0, characterIndex))
        timeout = setTimeout(typeNext, 65)
      } else {
        setVisibleLines(lineIndex + 1)
        setTypedCommand('')
        lineIndex += 1
        characterIndex = 0
        timeout = setTimeout(typeNext, 650)
      }
    }

    timeout = setTimeout(typeNext, 900)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#080a09]/95 shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-red-400/80" />
            <span className="size-2.5 rounded-full bg-yellow-400/80" />
            <span className="size-2.5 rounded-full bg-green-400/80" />
          </div>

          <span className="font-mono text-[11px] text-white/35">
            dilip@kali:~
          </span>

          <ShieldCheck
            className="size-4 text-primary/70"
            aria-hidden="true"
          />
        </div>

        <div
          className="min-h-[285px] space-y-5 p-5 font-mono text-xs leading-relaxed sm:min-h-[320px] sm:p-7 sm:text-sm"
          aria-label="Animated terminal showing cybersecurity learning activities"
        >
          {terminalLines.map((line, index) => {
            const completed = index < visibleLines
            const active = index === visibleLines

            if (!completed && !active) return null

            return (
              <div key={line.command} className="space-y-1.5">
                <p className="break-words text-white/80">
                  <span className="mr-2 text-primary">$</span>
                  {completed ? line.command : typedCommand}

                  {active && (
                    <span
                      className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-primary align-middle motion-reduce:animate-none"
                      aria-hidden="true"
                    />
                  )}
                </p>

                {completed && (
                  <p className="break-words pl-4 text-white/45">
                    {line.output}
                  </p>
                )}
              </div>
            )
          })}

          {visibleLines === terminalLines.length && (
            <p className="text-primary">
              <span className="mr-2">$</span>
              <span
                className="inline-block h-3.5 w-1.5 animate-pulse bg-primary align-middle motion-reduce:animate-none"
                aria-hidden="true"
              />
            </p>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 font-mono text-[10px] text-white/30 sm:px-7">
          <span>SESSION: ACTIVE</span>

          <span className="flex items-center gap-2">
            <span
              className="size-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            LEARNING MODE
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute -bottom-5 -left-5 hidden items-center justify-center border border-white/10 bg-[#0a0a0a] p-4 text-primary shadow-xl sm:flex"
      >
        <ArrowDownRight className="size-5" />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pt-20 sm:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,oklch(1_0_0/3%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/3%)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 -z-10 size-[400px] rounded-full bg-primary/[0.04] blur-[120px]"
      />

      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10">
        <div className="min-w-0 animate-in fade-in slide-in-from-bottom-3 duration-700 motion-reduce:animate-none">
          <div className="mb-8 inline-flex max-w-full items-center gap-3 border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[10px] tracking-wide text-muted-foreground sm:text-xs">
            <span className="relative flex size-2 shrink-0">
              <span
                className="absolute inline-flex size-full animate-ping rounded-full bg-primary/50 motion-reduce:animate-none"
                aria-hidden="true"
              />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>

            <span>AVAILABLE FOR CYBERSECURITY OPPORTUNITIES</span>
          </div>

          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-primary sm:text-sm sm:tracking-[0.3em]">
            Offensive Security / Portfolio
          </p>

          <h1
            id="hero-heading"
            className={`${orbitron.className} text-[clamp(2rem,4.1vw,4.25rem)] font-black uppercase leading-[1.08] tracking-[-0.02em] text-foreground`}
          >
            <span className="whitespace-nowrap">
              {siteConfig.name}
              <span className="text-primary">.</span>
            </span>
          </h1>

          <div className="mt-8 space-y-2">
            <p className="text-lg font-medium tracking-tight text-foreground sm:text-2xl">
              Aspiring Penetration Tester
            </p>

            <p className="flex items-center gap-2 font-mono text-sm text-primary sm:text-base">
              <span className="text-muted-foreground" aria-hidden="true">
                {'>_'}
              </span>
              eJPT Certified
            </p>
          </div>

          <p className="mt-7 max-w-xl text-pretty text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {siteConfig.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center gap-3 bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
            >
              Get in Touch

              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>

            <a
              href="#projects"
              className="group inline-flex h-12 items-center justify-center gap-3 border border-white/20 px-6 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
            >
              Explore Projects

              <ArrowRight
                className="size-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="h-px w-10 bg-primary/60" />

            <span className="font-mono tracking-wide">
              LEARN. PRACTICE. IMPROVE.
            </span>
          </div>
        </div>

        <div className="min-w-0 animate-in fade-in slide-in-from-bottom-3 duration-1000 motion-reduce:animate-none">
          <TerminalWindow />

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Current focus
              </p>

              <p className="mt-1 text-sm font-medium text-foreground">
                Practical Penetration Testing
              </p>
            </div>

            <a
              href="https://github.com/dilipkumar-sec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/10 px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <GithubIcon className="size-4" aria-hidden="true" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
