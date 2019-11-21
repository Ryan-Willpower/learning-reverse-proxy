import express, { Request, Response } from "express"
import cors from "cors"

import { config } from "./config"
import { loadAllLoaders } from "./loaders"

const app = express()

async function startServer() {
  await loadAllLoaders(app)

  app.listen(config.port, config.hostname, () => {
    console.log(`> server start at http://${config.hostname}:${config.port}`)
  })
}

startServer()
