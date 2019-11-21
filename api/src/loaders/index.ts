import express from "express"

import { createExpressApp } from "./express"

export async function loadAllLoaders(appCreater: express.Application) {
  await createExpressApp(appCreater)
}
