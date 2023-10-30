let victory = Number(prompt("Fala jogador! Informe a sua quantidade de vitórias"));
let defeats = Number(prompt("Agora, informe a quantidade de derrotas"));
let level;

function calculateVictory(victory, defeats) {
    let punctuation = victory - defeats;
    return punctuation;
}

let victoryBalance = calculateVictory(victory, defeats);

if (victoryBalance <= 10) {
    level = "Ferro";
} else if (victoryBalance >= 11 && victoryBalance <= 20) {
    level = "Bronze";
} else if (victoryBalance >= 21 && victoryBalance <= 50) {
    level = "Prata";
} else if (victoryBalance >= 51 && victoryBalance <= 80) {
    level = "Ouro";
} else if (victoryBalance >= 81 && victoryBalance <= 90) {
    level = "Diamante";
} else if (victoryBalance >= 91 && victoryBalance <= 100) {
    level = "Lendário";
} else if (victoryBalance >= 101) {
    level = "Imortal";
}

console.log(`O Herói tem saldo de ${victoryBalance} vitórias e está no nível ${level}`)