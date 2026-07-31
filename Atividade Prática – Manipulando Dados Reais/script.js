/* Tarefa 1 */
let nome = prompt("Digite seu nome completo:");
let cargo = prompt("Digite seu cargo ou função:");
let empresa = prompt("Digite o nome da empresa ou escola:");
let email = prompt("Digite seu e-mail:");

nome = nome.toUpperCase();

console.log("===== CARTÃO DE VISITA =====");
console.log("Nome: " + nome);
console.log("Cargo: " + cargo);
console.log("Empresa: " + empresa);
console.log("E-mail: " + email);

alert("Cartão de visita gerado com sucesso!");


/* Tarefa 2 */
let produto = prompt("Digite o nome do produto:");
let preco = parseFloat(prompt("Digite o preço original:"));
let desconto = parseFloat(prompt("Digite o percentual de desconto:"));

let valorDesconto = preco * (desconto / 100);
let precoFinal = preco - valorDesconto;

console.log("===== CALCULADORA DE DESCONTO =====");
console.log("Produto: " + produto);
console.log("Preço Original: " + preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
console.log("Desconto: " + valorDesconto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
console.log("Preço Final: " + precoFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));

alert(
    "Produto: " + produto +
    "\nPreço Final: " +
    precoFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);


/* Tarefa 3 */
let senha = prompt("Digite uma senha:");

let pontuacao = 0;

if (senha.length >= 8) pontuacao++;
if (/[A-Z]/.test(senha)) pontuacao++;
if (/[a-z]/.test(senha)) pontuacao++;

let classificacao;

if (pontuacao == 3) {
    classificacao = "Forte";
} else if (pontuacao == 2) {
    classificacao = "Média";
} else {
    classificacao = "Fraca";
}

console.log("===== VERIFICADOR DE SENHA =====");
console.log("Quantidade de caracteres: " + senha.length);
console.log("Classificação: " + classificacao);

alert("Classificação da senha: " + classificacao);