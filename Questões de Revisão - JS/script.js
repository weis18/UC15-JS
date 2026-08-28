//Questão 1 — Operações matemáticas
let numero1 = Number(prompt("Digite um número"));
let numero2 = Number(prompt("Digite outro número"));

console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);

//Questão 2 — Dobro e triplo
let numero = Number(prompt("Digite um número"));

console.log("Dobro:", numero * 2);
console.log("Triplo:", numero * 3);

//Questão 3 — Nome e idade do usuário
let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");

console.log(`Olá, ${nome}! Seja bem-vindo! Você tem ${idade} anos.`);

//Questão 4 — Média de três notas
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media);

//Questão 5 — Sistema de login
let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

if (usuario !== usuarioCorreto) {
    console.log("Usuário incorreto.");
} else if (senha !== senhaCorreta) {
    console.log("Senha incorreta.");
} else {
    console.log("Login realizado com sucesso!");
}

//Questão 6 — Número maior
let numero3 = Number(prompt("Digite o primeiro número:"));
let numero4 = Number(prompt("Digite o segundo número:"));

if (numero1 > numero2) {
    console.log("O maior número é", numero3);
} else if (numero4 > numero3) {
    console.log("O maior número é", numero4);
} else {
    console.log("Os dois números são iguais.");
}