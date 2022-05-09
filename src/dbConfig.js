import mongoose from "mongoose";

mongoose.connect('mongodb+srv://andre_soares:senha123@jogo-api.zvqcw.mongodb.net/jogo-api');

let db = mongoose.connection;
export default db;
