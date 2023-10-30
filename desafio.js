let vitorias = Number(prompt("Fala jogador! Informe a sua quantidade de vitórias"))
let derrotas = Number(prompt("Agora, informe a quantidade de derrotas"))

function calularPontuacao(vitorias, derrotas) {
    let pontuacao = vitorias - derrotas
    return pontuacao
}