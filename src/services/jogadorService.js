const repository = require("../repositories/jogadorRepository.js")

const lerJogador = async () => {

    const jogadoresResponse = await repository.jogadorFind();
    const resposta = jogadoresResponse.map(calculateMedalsAndTrophies);

    return resposta;
}

const deleteJogador = async (id) => {
    return repository.jogadorDelete(id)
}

const atualizarJogador = async (id, content) => {
    return repository.jogadorUpdate(id, content);
}

const criarJogador = async(body) => {
    return repository.jogadorCreate(body);
}

//funções de regras de negócios
const calculateMedalsAndTrophies = (jogador) => {
    const { coins } = jogador;
    const medals = parseInt(coins / 10);
    const trophies = parseInt(medals / 3);
    return {
      ...jogador,
      medals,
      trophies
    }
}

module.exports = {
    lerJogador,
    deleteJogador,
    atualizarJogador,
    criarJogador
} 