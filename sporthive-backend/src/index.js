import express from "express"
import cors from "cors"
import sportsRouter from "./routes/sports.js"
import eventsRouter from "./routes/events.js"
import quizzesRouter from "./routes/quizzes.js"
import usersRouter from "./routes/users.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/sports", sportsRouter)
app.use("/events", eventsRouter)
app.use("/quizzes", quizzesRouter)
app.use("/auth", usersRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`))