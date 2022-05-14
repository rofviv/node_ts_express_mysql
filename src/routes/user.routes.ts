import { Router } from "express";

import userController from "../controllers/user.controller"

class UserRoutes {
  public router: Router = Router()

  constructor() {
    this.config()
  }

  private config(): void {
    this.router.get('/', userController.list)
    this.router.get('/:id', userController.get)
    this.router.post('/', userController.create)
    this.router.put('/:id', userController.update)
    this.router.delete('/:id', userController.delete)
  }
}

const userRoutes = new UserRoutes
export default userRoutes.router;
