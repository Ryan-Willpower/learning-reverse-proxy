import express, { Request, Response } from "express"
import cors from "cors"

import { config } from "./config"

const app = express()

app.use(cors())

app.get("/", (_req: Request, res: Response) => {
  res.send({ message: "welcome to test api! navigate to /user to get started" })
})

app.listen(config.port, config.hostname, () => {
  console.log(`> server start at http://${config.hostname}:${config.port}`)
})
