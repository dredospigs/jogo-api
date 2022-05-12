import jogadores from "../models/jogadorModel.js"

export const jogadorFind = async () => {
    return jogadores.find().lean()
}

export const jogadorDelete = async (id) => {
    return jogadores.findByIdAndDelete(id)
}

export const jogadorUpdate = async (id, content) => {
    return jogadores.findByIdAndUpdate(id, {$set: content})
}

export const jogadorCreate = async (body) => {
    return new jogadores(body)
}
