import { ReactNode } from 'react'
import { clsx } from 'clsx'

export default function Badge({ children, variant = 'default' }: { children: ReactNode; variant?: 'default' | 'brand' }) {
  return <span className={clsx('rounded-lg px-2 py-1 text-xs', variant === 'brand' ? 'bg-brand-100 text-brand-800' : 'bg-gray-100')}>{children}</span>
}