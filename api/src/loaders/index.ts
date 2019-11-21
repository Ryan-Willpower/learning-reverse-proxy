import express from "express"

import { createExpressApp } from "./express"
import { logger } from "./logger"
import { mongoClient } from "./mongodb"

export async function loadAllLoaders(appCreater: express.Application) {
  createExpressApp(appCreater)
  logger.info("express app initialize successfully")

  try {
    const client = mongoClient()
    await client.connect()
    logger.info("mongodb connected successfully")
    await client.close()
  } catch (error) {
    logger.error(`cannot connect to database: ${error}`)
  }
}
