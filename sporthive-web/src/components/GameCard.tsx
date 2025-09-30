import Link from 'next/link'

export default function GameCard({ game }: { game: any }) {
  return (
    <Link href={`/jogos/${game.id}`} className="rounded-2xl border p-4">
      <div className="text-sm opacity-70">{game.sport}</div>
      <div className="mt-1 text-lg font-semibold">{game.venueName}</div>
      <div className="text-sm">{new Date(game.date).toLocaleString()}</div>
      <div className="mt-2 text-sm">Vagas: {game.confirmed.length}/{game.maxPlayers}</div>
    </Link>
  )
}