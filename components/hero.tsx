'use client'

import { useEffect, useState } from 'react'
import { Orbitron } from 'next/font/google'
import { ArrowRight, ShieldCheck, Mail } from 'lucide-react'
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

    function typeNext() {
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
        className="absolute -inset-10 rounded-full bg-white/[0.035] blur-3xl"
      />

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#080808] shadow-2xl shadow-black/60">
        {/* Terminal header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-5 py-4">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>

          <span className="font-mono text-[11px] text-white/40">
            dilip@kali:~
          </span>

          <ShieldCheck
            className="size-4 text-white/70"
            aria-hidden="true"
          />
        </div>

        {/* Animated terminal */}
        <div
          className="min-h-[285px] space-y-5 p-5 font-mono text-xs leading-relaxed sm:min-h-[320px] sm:p-7 sm:text-sm"
          aria-label="Animated cybersecurity terminal"
        >
          {terminalLines.map((line, index) => {
            const completed = index < visibleLines
            const active = index === visibleLines

            if (!completed && !active) return null

            return (
              <div key={line.command} className="space-y-1.5">
                <p className="break-words text-white/85">
                  <span className="mr-3 text-white">$</span>
                  {completed ? line.command : typedCommand}

                  {active && (
                    <span
                      className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-white align-middle motion-reduce:animate-none"
                      aria-hidden="true"
                    />
                  )}
                </p>

                {completed && (
                  <p className="break-words pl-5 text-white/45">
                    {line.output}
                  </p>
                )}
              </div>
            )
          })}

          {visibleLines === terminalLines.length && (
            <p className="text-white/85">
              <span className="mr-3">$</span>
              <span
                className="inline-block h-3.5 w-1.5 animate-pulse bg-white align-middle motion-reduce:animate-none"
                aria-hidden="true"
              />
            </p>
          )}
        </div>

        {/* Terminal footer */}
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 font-mono text-[10px] text-white/40 sm:px-7">
          <span>SESSION: ACTIVE</span>

          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-white" />
            LEARNING MODE
          </span>
        </div>
      </div>

      {/* Floating decorations */}
      <div
        aria-hidden="true"
        className="absolute -left-5 top-1/2 hidden -translate-y-1/2 items-center justify-center border border-white/10 bg-[#111111] p-4 text-white/80 shadow-xl sm:flex"
      >
        <ArrowRight className="size-5" />
      </div>

      <div
        aria-hidden="true"
        className="absolute -right-4 bottom-12 hidden rotate-6 items-center justify-center border border-white/10 bg-[#111111] p-4 text-white/80 shadow-xl sm:flex"
      >
        <ShieldCheck className="size-5" />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-background pt-20 sm:pt-24"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_85%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 -z-10 size-[400px] rounded-full bg-white/[0.025] blur-[120px]"
      />

      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1400px] items-center gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-12">
        {/* Left column */}
        <div className="min-w-0 animate-in fade-in slide-in-from-bottom-3 duration-700 motion-reduce:animate-none">
          {/* Availability badge */}
          <div className="mb-8 inline-flex max-w-full items-center gap-3 border border-white/10 bg-white/[0.025] px-4 py-2 font-mono text-[10px] tracking-wide text-white/60 sm:text-xs">
            <span className="size-2 shrink-0 rounded-full bg-white" />
            <span>AVAILABLE FOR CYBERSECURITY OPPORTUNITIES</span>
          </div>

          {/* Name: white text without white background blocks */}
          <h1
            id="hero-heading"
            className={`${orbitron.className} mb-8 flex flex-col items-start text-[clamp(3.1rem,7.2vw,6.8rem)] font-black uppercase leading-[0.98] tracking-[-0.045em]`}
          >
            <span className="text-white">DILIP</span>
            <span className="text-white">KUMAR</span>
          </h1>

          {/* Professional title */}
          <div className="mb-5 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-[2px] w-12 shrink-0 bg-white/70"
            />

            <p className="font-mono text-sm text-white/80 sm:text-lg">
              I&apos;m a{' '}
              <span className="font-semibold text-white">
                Penetration Tester
              </span>
              <span
                className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-white align-middle motion-reduce:animate-none"
                aria-hidden="true"
              />
            </p>
          </div>

          {/* Introduction */}
          <p className="max-w-xl text-sm leading-8 text-white/55 sm:text-base sm:leading-9">
            {siteConfig.intro}
          </p>

          {/* Main action buttons */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex h-[58px] items-center justify-center gap-3 bg-white px-7 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
            >
              Get in Touch

              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>

            <a
              href="#projects"
              className="group inline-flex h-[58px] items-center justify-center gap-3 border border-white/25 px-7 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/[0.05] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
            >
              Explore Projects

              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex flex-wrap gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dilipkumar-sec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-14 items-center justify-center border border-white/10 text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-black motion-reduce:transition-none"
            >
              <span className="text-lg font-bold" aria-hidden="true">
                in
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dilipkumar-sec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-14 items-center justify-center border border-white/10 text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-black motion-reduce:transition-none"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.02 3.35 1.53.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            {/* Medium profile */}
            <a
              href="https://medium.com/@dilipkumar-sec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium profile"
              className="flex size-14 items-center justify-center border border-white/10 font-serif text-xl font-bold text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-black motion-reduce:transition-none"
            >
              M
            </a>

            {/* Email */}
            <a
              href="mailto:dilipkumarbsec@gmail.com"
              aria-label="Email dilipkumarbsec@gmail.com"
              className="flex size-14 items-center justify-center border border-white/10 text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-black motion-reduce:transition-none"
            >
              <Mail className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="min-w-0 animate-in fade-in slide-in-from-bottom-3 duration-1000 motion-reduce:animate-none">
          <TerminalWindow />

          {/* Current focus */}
          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              Current Focus
            </p>

            <p className="mt-2 text-sm font-medium text-white/85">
              Practical Penetration Testing
            </p>

            <p className="mt-2 font-mono text-xs text-white/40">
              eJPT Certified / CPTS in Progress
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
