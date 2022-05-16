const express = require("express") 
const { readJogador, createJogador, updateJogador, deletarJogador } = require("../controllers/jogadorController.js")

const router = express.Router()

router
    .get('/jogadores', readJogador)
    .post("/jogadores", createJogador)
    .put("/jogadores/:id", updateJogador)
    .delete("/jogadores/:id", deletarJogador)

module.exports = router 