import { Router } from "express"
const router = Router()

const sports = [
  { id: "1", name: "Futebol", popularity: 98, image: "https://picsum.photos/seed/fut/400/240" },
  { id: "2", name: "Basquete", popularity: 85, image: "https://picsum.photos/seed/bas/400/240" },
  { id: "3", name: "Vôlei", popularity: 72, image: "https://picsum.photos/seed/volei/400/240" },
  { id: "4", name: "Corrida", popularity: 65, image: "https://picsum.photos/seed/run/400/240" }
]

router.get("/", (req, res) => res.json(sports))

export default router