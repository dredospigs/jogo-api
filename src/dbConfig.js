const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://andre_soares:senha123@desafio.1sk7f.mongodb.net/?retryWrites=true&w=majority');

let db = mongoose.connection;
module.exports = db;
