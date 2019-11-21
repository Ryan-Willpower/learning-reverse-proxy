import express, { Request, Response } from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "welcome to test api! navigate to /user to get started" })
})

app.listen(8080, "localhost", () => {
  console.log("> server start at http://localhost:8080")
})
