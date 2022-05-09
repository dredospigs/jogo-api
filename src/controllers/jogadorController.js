import jogadores from "../models/jogadorModel.js"

export const readJogador = async function readJogador(req, res){

    const jogadoresResponse = await jogadores.find()
    const jogadoresResponseC = JSON.parse(JSON.stringify(jogadoresResponse))
    jogadoresResponseC.forEach(jogador => {
        const moedas = jogador.coins;
        let medalhas = parseInt(moedas / 10)
        let trofeus = parseInt(medalhas / 3)

        jogador.medals = medalhas
        jogador.trophies = trofeus
    })

    res.json(jogadoresResponseC)
}

export const createJogador = async function cadastrarJogador(req, res){
    let jogador = new jogadores(req.body);
    jogador.save((err) => {
        if(err){
            res.send(`Houve um erro na criação do jogador! Erro:${err.message}`);
        }
        else{
            res.status(200).send('O jogador foi cadastrado com sucesso!')
        }
    })
}

export const updateJogador = (req, res) => {
    let id = req.params.id;

    jogadores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(err){
            res.send(`Houve um erro na hora de atualizar o jogador! Erro: ${err.message}`)
        }
        else{
            res.send('A atualização foi feita com sucesso!')
        }
    })
}

export const deletarJogador = (req, res) => {
    let id = req.params.id;

        jogadores.findByIdAndDelete(id, (err) => {
            if(err){
                res.send(`Houve um erro na hora de deletar o jogador! Erro: ${err.message}`);
            }
            else{
                res.send('O jogador foi deletado com sucesso!');
            }
        })
}