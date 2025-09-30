import { ButtonHTMLAttributes } from 'react'
import { clsx } from 'clsx'

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props
  return <button {...rest} className={clsx('rounded-xl bg-brand-600 px-6 py-3 text-white', className)} />
}