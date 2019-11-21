import { Router } from "express"

import { userRouter } from "./routes/user"

export function apiController() {
  const app = Router()

  app.use("/user", userRouter())

  return app
}
