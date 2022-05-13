import jogadores from "../models/jogadorModel.js"

const jogadorFind = async () => {
    return jogadores.find().lean()
}

const jogadorDelete = async (id) => {
    return jogadores.findByIdAndDelete(id)
}

const jogadorUpdate = async (id, content) => {
    return jogadores.findByIdAndUpdate(id, {$set: content})
}

const jogadorCreate = async (body) => {
    return new jogadores(body)
}

export default {
    jogadorFind,
    jogadorDelete,
    jogadorUpdate,
    jogadorCreate
}
