'use client'

import { useEffect, useState } from 'react'
import { Orbitron } from 'next/font/google'
import {
ArrowRight,
ShieldCheck,
Linkedin,
Mail,
Github,
} from 'lucide-react'
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

```
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
```

}, [])

return ( <div className="relative mx-auto w-full max-w-xl"> <div
     aria-hidden="true"
     className="absolute -inset-10 rounded-full bg-white/[0.035] blur-3xl"
   />

```
  <div className="relative overflow-hidden rounded-xl border border-white/[0.12] bg-[#080808]/95 shadow-2xl shadow-black/60">
    {/* Terminal title bar */}
    <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.045] px-5 py-4">
      <div className="flex items-center gap-2" aria-hidden="true">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
      </div>

      <span className="font-mono text-[11px] text-white/35">
        dilip@kali:~
      </span>

      <ShieldCheck
        className="size-4 text-white/65"
        aria-hidden="true"
      />
    </div>

    {/* Animated terminal content */}
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
  </div>

  {/* Floating terminal decoration */}
  <div
    aria-hidden="true"
    className="absolute -left-5 top-1/2 hidden -translate-y-1/2 items-center justify-center border border-white/[0.12] bg-[#111111] p-4 text-white/80 shadow-xl sm:flex"
  >
    <ArrowRight className="size-5" />
  </div>

  <div
    aria-hidden="true"
    className="absolute -right-4 bottom-12 hidden rotate-6 items-center justify-center border border-white/[0.12] bg-[#111111] p-4 text-white/80 shadow-xl sm:flex"
  >
    <ShieldCheck className="size-5" />
  </div>
</div>
```

)
}

export function Hero() {
return ( <section
   id="top"
   aria-labelledby="hero-heading"
   className="relative isolate overflow-hidden bg-background pt-20 sm:pt-24"
 >
{/* Subtle monochrome grid */} <div
     aria-hidden="true"
     className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_85%)]"
   />

```
  <div
    aria-hidden="true"
    className="pointer-events-none absolute right-0 top-20 -z-10 size-[400px] rounded-full bg-white/[0.025] blur-[120px]"
  />

  <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1400px] items-center gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-12">
    {/* LEFT: Introduction */}
    <div className="min-w-0 animate-in fade-in slide-in-from-bottom-3 duration-700 motion-reduce:animate-none">
      {/* Availability badge */}
      <div className="mb-8 inline-flex max-w-full items-center gap-3 border border-white/[0.12] bg-white/[0.025] px-4 py-2 font-mono text-[10px] tracking-wide text-white/60 sm:text-xs">
        <span className="size-2 shrink-0 rounded-full bg-white" />
        <span>AVAILABLE FOR CYBERSECURITY OPPORTUNITIES</span>
      </div>

      {/* Name: oversized monochrome blocks */}
      <h1
        id="hero-heading"
        className={`${orbitron.className} mb-8 flex flex-col items-start text-[clamp(3.1rem,7.2vw,6.8rem)] font-black uppercase leading-[0.98] tracking-[-0.045em]`}
      >
        <span className="bg-white px-1.5 py-0.5 text-black">
          DILIP
        </span>
        <span className="bg-white px-1.5 py-0.5 text-black">
          KUMAR
        </span>
      </h1>

      {/* Role */}
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
          <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-white align-middle motion-reduce:animate-none" />
        </p>
      </div>

      {/* Description */}
      <p className="max-w-xl text-sm leading-8 text-white/55 sm:text-base sm:leading-9">
        {siteConfig.intro}
      </p>

      {/* Action buttons */}
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
        <a
          href="https://www.linkedin.com/in/dilipkumar-sec"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex size-14 items-center justify-center border border-white/[0.12] text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-black motion-reduce:transition-none"
        >
          <Linkedin className="size-5" aria-hidden="true" />
        </a>

        <a
          href="https://github.com/dilipkumar-sec"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex size-14 items-center justify-center border border-white/[0.12] text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-black motion-reduce:transition-none"
        >
          <Github className="size-5" aria-hidden="true" />
        </a>

        <a
          href="https://medium.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
          className="flex size-14 items-center justify-center border border-white/[0.12] font-serif text-xl font-bold text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-black motion-reduce:transition-none"
        >
          M
        </a>

        <a
          href="mailto:dilipkumarbsec@gmail.com"
          aria-label="Email"
          className="flex size-14 items-center justify-center border border-white/[0.12] text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-black motion-reduce:transition-none"
        >
          <Mail className="size-5" aria-hidden="true" />
        </a>
      </div>
    </div>

    {/* RIGHT: Terminal */}
    <div className="min-w-0 animate-in fade-in slide-in-from-bottom-3 duration-1000 motion-reduce:animate-none">
      <TerminalWindow />

      <div className="mt-8 border-t border-white/[0.12] pt-5">
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
```

)
}
