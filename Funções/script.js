// Sem Função
console.log("Olá, Maria! Seja bem-vinda!")
console.log("Olá, João! Seja bem-vindo!")
console.log("Olá, Pedro! Seja bem-vindo!")

// Com Função
function darBoasVindas(nome) {
    console.log(`Olá, ${nome}! Seja brm-vindo!`);
}

darBoasVindas("Maria");
darBoasVindas("João");
darBoasVindas("Pedro");

function apresentar(nome, idade) {
    console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
}

apresentar("Pedro",25)

// Criar uma função que recebe o nome de uma pessoa e mostra uma mensagem dizendo se ela está estudando.
function verificarEstudo(nome) {
    console.log(`${nome} está estudando programação!`);
}

verificarEstudo("Ana");
verificarEstudo("Pedro");


function somar(a, b) {
    return a + b;
}

somar(5, 3)

let resultado = somar(5, 3);

console.log(resultado);

// Crie uma função que pegue dois valores e dê a média deles, se for acima de 6 é aprovado, senão será reprovado.
function verificarMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;

    if (media > 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

verificarMedia(8, 7);
verificarMedia(5, 6);


function calcularMedia(nota1, nota2) {
    return (nota1 + nota2)/2;
}

let nome = prompt("Digite o nome do aluno:");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media1 = calcularMedia(nota1, nota2);

console.log(`${nome} ficou com ${media1}`);

if (media1 >= 6) {
    console.log(`${nome} está aprovado!`);
} else {
    console.log(`${nome} está reprovado!`);
}

calcularMedia(nota1, nota2)

// Crie um programa que utilize uma função com vários parâmetros para calcular o custo total de uma viagem. O programa deverá receber os valores da passagem, hospedagem, alimentação e passeios, calcular o total e informar se a viagem está dentro do orçamento de R$ 2.000,00.
function calcularCustoViagem(passagem, hospedagem, alimentacao, passeios) {
    let total = passagem + hospedagem + alimentacao + passeios;

    console.log("Custo total da viagem: R$ " + total.toFixed(2));

    if (total <= 2000) {
        console.log("A viagem está dentro do orçamento de R$ 2.000,00.");
    } else {
        console.log("A viagem ultrapassou o orçamento de R$ 2.000,00.");
    }
}

let passagem = Number(prompt("Digite o valor da passagem: R$"));
let hospedagem = Number(prompt("Digite o valor da hospedagem: R$"));
let alimentacao = Number(prompt("Digite o valor da alimentação: R$"));
let passeios = Number(prompt("Digite o valor dos passeios: R$"));

calcularCustoViagem(passagem, hospedagem, alimentacao, passeios);
