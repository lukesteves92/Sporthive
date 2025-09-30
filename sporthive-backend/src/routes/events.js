import { Router } from "express"
const router = Router()

const events = [
  { id: "e1", sport: "Futebol", title: "Pelada no Bairro", date: "2025-10-05T19:00:00-03:00", location: "Arena Central", participants: 12 },
  { id: "e2", sport: "Basquete", title: "Treino de Basquete", date: "2025-10-06T20:00:00-03:00", location: "Quadra A", participants: 8 }
]

router.get("/", (req, res) => res.json(events))

export default router
