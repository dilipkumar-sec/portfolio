import { ArrowUpRight, Award } from 'lucide-react'
import { Tag } from '@/components/tag'
import type { Certification } from '@/lib/site-config'

const statusLabel: Record<Certification['status'], string> = {
  'training-completed': 'Training completed',
  'in-progress': 'In progress',
  certified: 'Certified',
}

const statusVariant: Record<Certification['status'], 'accent' | 'outline'> = {
  'training-completed': 'accent',
  'in-progress': 'outline',
  certified: 'accent',
}

export function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40">
      <div className="mb-5 flex items-start justify-between gap-4">
        <Award className="size-6 text-primary" aria-hidden="true" />
        <Tag variant={statusVariant[certification.status]}>
          <span className="sr-only">Status: </span>
          {statusLabel[certification.status]}
        </Tag>
      </div>

      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{certification.provider}</p>
      <h3 className="mt-2 text-lg font-medium">
        {certification.shortName}
        <span className="text-muted-foreground"> — {certification.title}</span>
      </h3>

      {certification.description ? (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{certification.description}</p>
      ) : (
        <div className="flex-1" />
      )}

      {certification.verificationUrl ? (
        <a
          href={certification.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          Verify credential
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">: {certification.shortName} (opens in a new tab)</span>
        </a>
      ) : null}
    </article>
  )
}
