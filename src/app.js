const express = require("express")
const db = require("./dbConfig.js")
const jogadores = require("./models/jogadorModel.js")
const routes = require("./routes/routes-index.js")

db.on("error", console.log.bind(console, 'Houve algum erro na hora de se conectar ao banco!'));
db.once("open", () => {
    console.log('Conexão feita com êxito!')
})

const app = express()
app.use(express.json())

routes(app)

module.exports = app 