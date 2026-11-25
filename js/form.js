// Pegando os elementos da página
var formulario = document.getElementById("formulario");
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var duvida = document.getElementById("duvida");
var nota = document.getElementById("nota");
var mensagemSucesso = document.getElementById("mensagemSucesso");

// Mostra o erro embaixo do campo
function mostrarErro(campo, idErro, texto) {
    document.getElementById(idErro).innerHTML = texto;
    campo.classList.add("campo-erro");
}

// Tira o erro do campo
function limparErro(campo, idErro) {
    document.getElementById(idErro).innerHTML = "";
    campo.classList.remove("campo-erro");
}

// Quando clicar em "Enviar"
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // não deixa a página recarregar

    var valido = true;
    mensagemSucesso.innerHTML = "";

    // Validação do nome
    if (nome.value.trim() == "") {
        mostrarErro(nome, "erroNome", "Digite seu nome.");
        valido = false;
    } else if (nome.value.trim().length < 3) {
        mostrarErro(nome, "erroNome", "O nome precisa ter pelo menos 3 letras.");
        valido = false;
    } else {
        limparErro(nome, "erroNome");
    }

    // Validação do e-mail
    if (email.value.trim() == "") {
        mostrarErro(email, "erroEmail", "Digite seu e-mail.");
        valido = false;
    } else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        mostrarErro(email, "erroEmail", "Digite um e-mail válido (exemplo: nome@email.com).");
        valido = false;
    } else {
        limparErro(email, "erroEmail");
    }

    // Validação da dúvida
    if (duvida.value.trim() == "") {
        mostrarErro(duvida, "erroDuvida", "Escreva sua dúvida.");
        valido = false;
    } else if (duvida.value.trim().length < 10) {
        mostrarErro(duvida, "erroDuvida", "A dúvida precisa ter pelo menos 10 caracteres.");
        valido = false;
    } else {
        limparErro(duvida, "erroDuvida");
    }

    // Validação da nota
    if (nota.value == "") {
        mostrarErro(nota, "erroNota", "Escolha uma nota de 1 a 10.");
        valido = false;
    } else {
        limparErro(nota, "erroNota");
    }

    // Se estiver tudo certo
    if (valido == true) {
        mensagemSucesso.innerHTML = "Dúvida enviada com sucesso! Obrigada, " + nome.value.trim() + ".";
        formulario.reset();
    }
});

// Quando clicar em "Limpar", tira também as mensagens de erro
document.getElementById("limpar").addEventListener("click", function () {
    limparErro(nome, "erroNome");
    limparErro(email, "erroEmail");
    limparErro(duvida, "erroDuvida");
    limparErro(nota, "erroNota");
    mensagemSucesso.innerHTML = "";
});