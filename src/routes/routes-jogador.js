import express from "express"
import { readJogador, createJogador, updateJogador, deletarJogador } from "../controllers/jogadorController.js"

const router = express.Router()

router
    .get('/jogadores', readJogador)
    .post("/jogadores", createJogador)
    .put("/jogadores/:id", updateJogador)
    .delete("/jogadores/:id", deletarJogador)

export default router