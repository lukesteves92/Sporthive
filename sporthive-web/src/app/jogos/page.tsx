import GameCard from '@/components/GameCard'

async function fetchGames() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || ''
  const res = await fetch(`${base}/api/games`, { cache: 'no-store' })
  return res.json()
}

export default async function Jogos() {
  const games = await fetchGames()
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Jogos próximos</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((g: any) => <GameCard key={g.id} game={g} />)}
      </div>
    </div>
  )
}