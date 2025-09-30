import { NextResponse } from 'next/server'

export async function GET() {
  const venues = [
    { id: 'v1', name: 'Quadra Central', sport: 'basquete', address: 'Rua A, 123', lat: -23.5, lng: -46.6, pricePerHour: 120, capacity: 10, amenities: ['Vestiário', 'Estacionamento'] },
    { id: 'v2', name: 'Arena Bairro', sport: 'futebol', address: 'Av. B, 456', lat: -23.52, lng: -46.62, pricePerHour: 180, capacity: 14 },
    { id: 'v3', name: 'Praça Esportiva', sport: 'vôlei', address: 'Praça C, 789', lat: -23.51, lng: -46.61, pricePerHour: 90, capacity: 12 }
  ]
  return NextResponse.json(venues)
}