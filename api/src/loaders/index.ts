import express from "express"

import { createExpressApp } from "./express"
import { logger } from "./logger"

export async function loadAllLoaders(appCreater: express.Application) {
  await createExpressApp(appCreater)
  logger.info("express app initialize successfully")
}
