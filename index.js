// Estudo de Logica da Programacao
// Bootcamp Logica da Programacao na Dio
// Autor do desafio: Felipe Aguiar
// Projeto desenvolvido por: Antonio Azevedo (aluno)
// Criado em 05/10/2023

// Variaveis
let vitorias = 50
let derrotas = 19
let nivelXp

// Funcao para calcular saldo de vitorias
function saldoVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

// Variavel para armazenar o calculo da funcao saldoVitorias
let nivel = saldoVitorias(vitorias, derrotas)

    // Condicao para determinar o nivel do heroi com base no saldo de vitorias
    if (nivel < 10) {
        nivelXp = "Ferro"
    } else if (nivel > 10 && nivel < 21) {
        nivelXp = "Bronze"
    } else if (nivel > 20 && nivel < 51) {
        nivelXp = "Prata"
    } else if (nivel > 50 && nivel < 81) {
        nivelXp = "Ouro"
    } else if (nivel > 80 && nivel < 91) {
        nivelXp = "Diamante"
    } else if (nivel > 90 && nivel < 101) {
        nivelXp = "Lendário"
    } else {
        nivelXp = "Imortal"
    }

// Apresentacao do resultado na tela
console.log("O herói tem de saldo de " + nivel + " e está no nível de "+ nivelXp + ".")