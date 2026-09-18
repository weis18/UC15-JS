function mostrarCidade() {
    let cidade = document.getElementById("cidade").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Que legal! Sua próxima aventura será em " + cidade + "! ✈️";
}

document.getElementById("botaoCidade").addEventListener("click", mostrarCidade);

function destacarMensagem() {
    let mensagem = document.getElementById("mensagem");

    mensagem.style.color = "white";
    mensagem.style.backgroundColor = "blue";
    mensagem.style.fontSize = "24px";
    mensagem.style.padding = "15px";
}

document.getElementById("botaoEstilo").addEventListener("click", destacarMensagem);

let valorContador = 10;

function aumentar() {
    valorContador++;

    document.getElementById("contador").textContent = valorContador;
}

function diminuir() {
    valorContador--;

    document.getElementById("contador").textContent = valorContador;
}

document.getElementById("mais").addEventListener("click", aumentar);

document.getElementById("menos").addEventListener("click", diminuir);