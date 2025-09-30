import { Router } from "express"
const router = Router()

const quizzes = [
  { id: "q1", question: "Quantos jogadores tem um time de futebol?", options: ["9", "10", "11"], answer: 2 },
  { id: "q2", question: "Altura da cesta de basquete?", options: ["2,80m", "3,05m", "3,20m"], answer: 1 }
]

router.get("/", (req, res) => res.json(quizzes))

router.post("/answer", (req, res) => {
  const { quizId, answers } = req.body
  const quiz = quizzes.find(q => q.id === quizId)
  if (!quiz) return res.status(404).json({ correct: false })
  const correct = quiz.answer === answers[0]
  res.json({ correct })
})

export default router