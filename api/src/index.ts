import express from "express"

import { config } from "./config"
import { loadAllLoaders } from "./loaders"
import { logger } from "./loaders/logger"

const app = express()

async function startServer() {
  await loadAllLoaders(app)

  app.listen(config.port, config.hostname, () => {
    logger.info(`> server start at http://${config.hostname}:${config.port}`)
  })
}

startServer()
