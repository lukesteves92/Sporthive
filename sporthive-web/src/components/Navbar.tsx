import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="SportHive" width={140} height={40} />
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/jogos" className="rounded-lg px-3 py-2">Jogos</Link>
          <Link href="/login" className="rounded-lg border px-3 py-2">Entrar</Link>
        </nav>
      </div>
    </header>
  )
}