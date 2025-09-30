import { Router } from "express"
const router = Router()

let users = [{ id: "u1", name: "Lucas", email: "lucas@example.com", password: "123456" }]

router.post("/login", (req, res) => {
  const { email, password } = req.body
  const user = users.find(u => u.email === email && u.password === password)
  if (!user) return res.status(401).json({ ok: false })
  res.json({ ok: true, token: "mock-token", user })
})

router.post("/register", (req, res) => {
  const { name, email, password } = req.body
  const exists = users.some(u => u.email === email)
  if (exists) return res.status(400).json({ ok: false, message: "Usuário já existe" })
  const newUser = { id: `u${users.length + 1}`, name, email, password }
  users.push(newUser)
  res.json({ ok: true, user: newUser })
})

export default router