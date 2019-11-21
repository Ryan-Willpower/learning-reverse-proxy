import express, { Request, Response } from "express"

import { UserService } from "../../services/user"
import { logger } from "../../loaders/logger"

const Router = express.Router()

export function userRouter() {
  const user = new UserService()

  Router.get("/", async (_req: Request, res: Response) => {
    try {
      const allUser = await user.getAllUser()

      res.send({ users: allUser })
    } catch (error) {
      logger.error(error)
    }
  })

  Router.get("/:name", async (req: Request, res: Response) => {
    // @todo add client input validator
    const name = req.params.name

    const result = await user.find(name)

    return res.send({ result })
  })

  Router.post("/", async (req: Request, res: Response) => {
    // @todo add client input validator
    try {
      if (!req.body.name) {
        return res.status(400).send({ status: "wrong request body" })
      }

      const name = req.body.name

      await user.add(name)

      return res.send({ status: "user added successfully" })
    } catch (error) {
      return res.status(500).send({ status: "error", description: error })
    }
  })

  return Router
}
