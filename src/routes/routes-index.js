import express from "express";
import userRoutes from "./routes-jogador.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(202).send('Tela inicial. Olá ;D')
    })

    app.use(
        userRoutes
        );
};

export default routes