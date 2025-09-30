import { NextResponse } from 'next/server'

export async function GET() {
  const games = [
    { id: 'g1', sport: 'basquete', venueId: 'v1', venueName: 'Quadra Central', date: new Date(Date.now() + 86400000).toISOString(), maxPlayers: 10, levelTarget: 'intermediario', priceSplit: 12, confirmed: ['u1', 'u2'] },
    { id: 'g2', sport: 'futebol', venueId: 'v2', venueName: 'Arena Bairro', date: new Date(Date.now() + 172800000).toISOString(), maxPlayers: 14, priceSplit: 15, confirmed: ['u3'] },
    { id: 'g3', sport: 'vôlei', venueId: 'v3', venueName: 'Praça Esportiva', date: new Date(Date.now() + 259200000).toISOString(), maxPlayers: 12, levelTarget: 'iniciante', priceSplit: 8, confirmed: [] }
  ]
  return NextResponse.json(games)
}