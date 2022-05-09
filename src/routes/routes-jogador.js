import express from "express"
import { read, create, update, deletar } from "../controllers/jogadorController.js"

const router = express.Router()

router
    .get('/jogadores', read)
    .post("/jogadores", create)
    .put("/jogadores/:id", update)
    .delete("/jogadores/:id", deletar)

export default router