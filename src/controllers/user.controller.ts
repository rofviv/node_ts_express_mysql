import { Request, Response } from "express"

import pool from "../database/connection"

class UserController {

  public async list(req: Request, res: Response): Promise<void> {
    try {
      const [results] = await pool.query("SELECT * FROM tbl_user")
      res.json({ "data": results })
    } catch (error) {
      res.status(500).json({ "data": error })
    }
  }

  public async get(req: Request, res: Response): Promise<void> {
    try {
      const [results] = await pool.query("SELECT * FROM tbl_user WHERE id = ?", [req.params.id])
      res.json({ "data": results })
    } catch (error) {
      res.status(500).json({ "data": error })
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const [results] = await pool.query("INSERT INTO tbl_user set ?", [req.body])
      res.json({ "data": results })
    } catch (error) {
      res.status(500).json({ "data": error })
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const [results] = await pool.query("UPDATE tbl_user set ? WHERE id = ?", [req.body, req.params.id])
      res.json({ "data": results })
    } catch (error) {
      res.status(500).json({ "data": error })
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const [results] = await pool.query("DELETE FROM tbl_user WHERE id = ?", [req.params.id])
      res.json({ "data": results })
    } catch (error) {
      res.status(500).json({ "data": error })
    }
  }

}
const ctrl = new UserController()
export default ctrl
