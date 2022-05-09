import mongoose from "mongoose";

const jogadorSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type:String, required:true},
        coins: {type:Number, required:true}
    },
    {
        versionKey:false
    }
);

const jogadores = mongoose.model("jogadores", jogadorSchema);
export default jogadores;