'use client'

import { useId, useRef } from 'react'
import { ArrowUpRight, FileBadge, X } from 'lucide-react'

type CertificateViewerProps = {
  file: string
  title: string
}

const isPdf = (file: string) => file.toLowerCase().endsWith('.pdf')

export function CertificateViewer({ file, title }: CertificateViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="inline-flex w-fit items-center gap-2 rounded-md border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <FileBadge className="size-4 text-primary" aria-hidden="true" />
        View Certificate
        <span className="sr-only">: {title}</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
        className="m-auto w-[calc(100%-2rem)] max-w-4xl rounded-lg border border-border bg-card p-0 text-foreground backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6">
          <h3 id={titleId} className="text-sm font-medium sm:text-base">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-1">
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-md px-2 py-1.5 text-xs text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:text-sm"
            >
              <span className="hidden sm:inline">Open full size</span>
              <span className="sm:hidden">Full size</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="size-5" aria-hidden="true" />
              <span className="sr-only">Close certificate</span>
            </button>
          </div>
        </div>

        <div className="p-3 sm:p-6">
          {isPdf(file) ? (
            <iframe src={file} title={title} className="h-[70vh] w-full rounded-md bg-white" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={file}
              alt={title}
              loading="lazy"
              className="mx-auto max-h-[75vh] w-full rounded-md object-contain"
            />
          )}
        </div>
      </dialog>
    </>
  )
}
