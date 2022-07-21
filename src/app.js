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
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
routes(app)

module.exports = app 