import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TagProps = {
  children: ReactNode
  variant?: 'default' | 'accent' | 'outline'
  className?: string
}

const variants = {
  default: 'bg-secondary text-muted-foreground',
  accent: 'bg-primary/10 text-primary ring-1 ring-inset ring-primary/25',
  outline: 'text-muted-foreground ring-1 ring-inset ring-border',
}

export function Tag({ children, variant = 'default', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 font-mono text-xs leading-5',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
