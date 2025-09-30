import Link from 'next/link'

async function fetchGame(id: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || ''
  const res = await fetch(`${base}/api/games`, { cache: 'no-store' })
  const all = await res.json()
  return all.find((g: any) => g.id === id)
}

export default async function JogoDetalhe({ params }: { params: { id: string } }) {
  const game = await fetchGame(params.id)
  if (!game) return <div>Jogo não encontrado</div>
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{game.sport} • {new Date(game.date).toLocaleString()}</h2>
      <div className="rounded-2xl border p-4">
        <div>Local: {game.venueName}</div>
        <div>Vagas: {game.confirmed.length}/{game.maxPlayers}</div>
        <div>Nível sugerido: {game.levelTarget ?? 'Livre'}</div>
        <div>Rateio: R$ {game.priceSplit?.toFixed(2) ?? '0,00'}</div>
      </div>
      <div className="flex gap-3">
        <button className="rounded-xl bg-brand-600 px-6 py-3 text-white">Participar</button>
        <Link href="/jogos" className="rounded-xl border px-6 py-3">Voltar</Link>
      </div>
    </div>
  )
}