import express, { Application } from "express"
import morgan from "morgan"
import cors from "cors"

import userRoutes from "../routes/user.routes"

class Server {
  private app: Application
  private port: string

  constructor(params: {port?: string}) {
    this.app = express()
    this.port = params.port || "5200"
    this.middelwares()
    this.routes()
  }

  private middelwares() : void {
    this.app.use(morgan("dev"))
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
  }

  private routes() : void {
    this.app.use("/api/user", userRoutes);
  }

  public listen() : void{
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`)
    })
  }
}

export default Server