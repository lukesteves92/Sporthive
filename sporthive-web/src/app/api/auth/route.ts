import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const ok = body?.email && body?.password
  if (!ok) return NextResponse.json({ ok: false }, { status: 400 })
  return NextResponse.json({ ok: true, token: 'mock-token', user: { id: 'u1', name: 'Usuário', email: body.email } })
}