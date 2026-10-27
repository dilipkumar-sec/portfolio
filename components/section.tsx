import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  index: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({
  id,
  index,
  title,
  description,
  children,
  className,
}: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('border-t border-border py-20 md:py-28', className)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <header className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-primary">
            <span aria-hidden="true">{index}. </span>
            <span className="sr-only">Section {index}: </span>
            {title.toLowerCase()}
          </p>

          <h2
            id={headingId}
            className="text-balance text-3xl font-semibold tracking-tight md:text-4xl"
          >
            {title}
          </h2>

          {description ? (
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </header>

        {children}
      </div>
    </section>
  )
}
