const mongoose = require('mongoose');

const jogadorSchema = new mongoose.Schema(
    {
        name: {type:String, required:true},
        coins: {type:Number, required:true}
    },
    {
        versionKey:false
    }
);

module.exports = mongoose.models.jogadores || mongoose.model("jogadores", jogadorSchema) 