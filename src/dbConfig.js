const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URL);

let db = mongoose.connection;
module.exports = db;
