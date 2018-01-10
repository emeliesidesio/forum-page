import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.urluncoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb://localhost/forum-api", { useMongoClient: true })

mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

const ForumInput = mongoose.model("ForumInput", {
  id: Number,
  type: String,
  text: String,
  date: Date,
  sender: String,
  publish: Boolean,
  handled: Boolean,
  image: String
})

app.get("/", (req, res) =>
  res.send("Hello forum start-page!")
)

app.post("/questions", (req, res) => {
  const question = new ForumInput(req.body)

  question.save()
    .then(() => { res.status(201).send("Question asked") })
    .catch(err => { res.status(400).send(err)} )
})

app.post("/answers", (req, res) => {
  const answer = new ForumInput(req.body)

  answer.save()
    .then(() => { res.status(201).send("Answer created") })
    .catch(err => { res.status(400).send(err)} )
})

app.get("/questions", (req, res) => {
  ForumInput.find().then(allQuestions => {
    res.json(allQuestions)
  })
})

app.get("/answers", (req, res) => {
  ForumInput.find().then(allAnswers => {
    res.json(allAnswers)
  })
})

app.listen(8080, () =>
  console.log("Example app listening on port 8080!")
)