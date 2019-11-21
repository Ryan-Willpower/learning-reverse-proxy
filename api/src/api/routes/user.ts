import express, { Request, Response } from "express"

const Router = express.Router()

export function userRouter() {
  Router.get("/", (_req: Request, res: Response) => {
    try {
      res.send({ status: "ok" })
    } catch (error) {
      throw new Error("error")
    }
  })

  return Router
}
