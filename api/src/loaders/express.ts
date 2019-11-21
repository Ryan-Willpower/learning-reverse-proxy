import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

import { apiController } from "../api/"

const app = express()

export function createExpressApp(app: express.Application) {
  // use this option for reverse proxy
  app.enable("trust proxy")

  app.use(cors())
  app.use(bodyParser.json())
  app.use("/", apiController())
}
