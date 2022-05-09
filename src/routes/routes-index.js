import express from "express";
import userRoutes from "./routes-jogador.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Tela inicial. Olá ;D')
    })

    app.use(
        express.json(),
        userRoutes
        );
};

export default routes