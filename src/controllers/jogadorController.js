const { atualizarJogador, deleteJogador, lerJogador, criarJogador} = require("../services/jogadorService.js")

const readJogador = async function readJogador(req, res){

    const jogadorResponse = await lerJogador();

    res.status(200).json(jogadorResponse);
    
    /*/ const jogadoresResponse = await jogadorFind();
    // const jogadoresResponseCloned = JSON.parse(JSON.stringify(jogadoresResponse));
    // jogadoresResponseCloned.forEach(jogador => {
    //     const moedas = jogador.coins;
    //     let medalhas = parseInt(moedas / 10);
    //     let trofeus = parseInt(medalhas / 3);

    //     jogador.medals = medalhas;
    //     jogador.trophies = trofeus;
    // })
    // res.status(200).json(jogadoresResponseCloned);*/
}

const createJogador = async function cadastrarJogador(req, res){
    let jogador = await criarJogador(req.body);
    jogador.save((err) => {
        if(err){
            res.send(`Houve um erro na criação do jogador! Erro:${err.message}`);
        }
        else{
            res.status(201).send('O jogador foi cadastrado com sucesso!');
        }
    })
}

const updateJogador = (req, res) => {
    const id = req.params.id;

    try {
        atualizarJogador(id, req.body);
        res.status(201).send('A atualização foi feita com sucesso!');
    } catch (error) {
        res.send(`Houve um erro na hora de atualizar o jogador! Erro: ${error}`);
    }
}

const deletarJogador = (req, res) => {
    const id = req.params.id;

    try {
        deleteJogador(id);
        res.status(201).send('O jogador foi deletado com sucesso!');
    } catch (error) {
        res.send(`Houve um erro na hora de deletar o jogador! Erro: ${error}`);
    }
}

module.exports = {
    atualizarJogador,
    readJogador,
    createJogador,
    updateJogador,
    deletarJogador
} 