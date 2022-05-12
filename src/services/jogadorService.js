import { jogadorFind, jogadorCreate, jogadorDelete, jogadorUpdate } from "../repositories/jogadorRepository.js";

export const lerJogador = async () => {

    const jogadoresResponse = await jogadorFind();
    const resposta = jogadoresResponse.map(calculateMedalsAndTrophies);

    return resposta;
}

export const deleteJogador = async (id) => {
    return jogadorDelete(id)
}

export const atualizarJogador = async (id, content) => {
    return jogadorUpdate(id, content);
}

export const criarJogador = async(body) => {
    return jogadorCreate(body);
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