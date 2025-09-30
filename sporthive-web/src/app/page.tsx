import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border bg-gradient-to-br from-brand-50 to-white p-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold tracking-tight">SportHive</h1>
            <p className="mt-3 text-lg">Encontre jogos, aprenda com quizzes e conecte-se com sua comunidade esportiva.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/jogos" className="rounded-xl bg-brand-600 px-6 py-3 text-white">Ver jogos</Link>
              <Link href="/login" className="rounded-xl border px-6 py-3">Entrar</Link>
            </div>
          </div>
          <div className="shrink-0">
            <Image src="/logo.png" alt="SportHive" width={360} height={120} priority />
          </div>
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <div className="text-sm text-brand-700">Jogos</div>
          <div className="mt-2 text-xl font-semibold">Partidas perto de você</div>
          <p className="mt-2 text-sm opacity-70">Explore quadras, horários e vagas.</p>
          <Link href="/jogos" className="mt-4 inline-block rounded-lg border px-4 py-2">Abrir</Link>
        </div>
        <div className="rounded-2xl border p-6">
          <div className="text-sm text-brand-700">Ranking</div>
          <div className="mt-2 text-xl font-semibold">Esportes populares</div>
          <p className="mt-2 text-sm opacity-70">Veja o que a galera pratica.</p>
          <Link href="/jogos" className="mt-4 inline-block rounded-lg border px-4 py-2">Explorar</Link>
        </div>
        <div className="rounded-2xl border p-6">
          <div className="text-sm text-brand-700">Quiz</div>
          <div className="mt-2 text-xl font-semibold">Aprenda jogando</div>
          <p className="mt-2 text-sm opacity-70">Curiosidades e regras.</p>
          <Link href="/jogos" className="mt-4 inline-block rounded-lg border px-4 py-2">Começar</Link>
        </div>
      </section>
    </div>
  )
}