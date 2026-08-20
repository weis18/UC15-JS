// Com if/else - 4 linhas
let mensagem;
if(nota >= 6) {
    mensagem = 'Aprovado';
} else {
    mensagem = 'Reprovado';
}

// Com ternário - 1 linha
const mensagem = nota >= 6 ? 'Aprovado' : 'Reprovado';

// ATIVIDADE
1.
let descricao;
if (temperatura > 30) {
  descricao = 'Quente';
} else {
  descricao = 'Agradável';
}
//Resposta
const descricao = temperatura > 30 ? 'Quente' : 'Agradável';

2.
let tipo;
if (numero % 2 === 0) {
  tipo = 'par';
} else {
  tipo = 'ímpar';
}
//Resposta
const tipo = numero % 2 === 0 ? 'Par' : 'Ímpar';

3.
let saudacao;
if (hora < 12) {
  saudacao = 'Bom dia';
} else {
  saudacao = 'Boa tarde/noite';
}
//Resposta
const saudacao = hora < 12 ? 'Bom dia' : 'Boa tarde/noite'