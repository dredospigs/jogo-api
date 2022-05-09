import express from "express";
import db from "./dbConfig.js";
import jogadores from "./models/jogadorModel.js"
import routes from "./routes/routes-index.js"

db.on("error", console.log.bind(console, 'Houve algum erro na hora de se conectar ao banco!'));
db.once("open", () => {
    console.log('Conexão feita com êxito!')
})

const app = express()
app.use(express.json())

routes(app)

export default app