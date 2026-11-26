const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const duvida = document.getElementById("duvida");
const nota = document.getElementById("nota");
const mensagemSucesso = document.getElementById("mensagemSucesso");

// Mostra o erro embaixo do campo
function mostrarErro(campo, idErro, texto) {
    document.getElementById(idErro).textContent = texto;
    campo.classList.add("campo-erro");
    campo.setAttribute("aria-invalid", "true"); 
}

// Tira o erro do campo
function limparErro(campo, idErro) {
    document.getElementById(idErro).textContent = "";
    campo.classList.remove("campo-erro");
    campo.removeAttribute("aria-invalid");
}

// Quando clicar em "Enviar"
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let valido = true;
    mensagemSucesso.textContent = "";

    // Valores guardados sem espaço no início e no final
    const nomeDigitado = nome.value.trim();
    const emailDigitado = email.value.trim();
    const duvidaDigitada = duvida.value.trim();

    // Validação do nome
    if (nomeDigitado === "") {
        mostrarErro(nome, "erroNome", "Digite seu nome.");
        valido = false;
    } else if (nomeDigitado.length < 3) {
        mostrarErro(nome, "erroNome", "O nome precisa ter pelo menos 3 letras.");
        valido = false;
    } else {
        limparErro(nome, "erroNome");
    }

    // Validação do e-mail
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailDigitado === "") {
        mostrarErro(email, "erroEmail", "Digite seu e-mail.");
        valido = false;
    } else if (!padraoEmail.test(emailDigitado)) {
        mostrarErro(email, "erroEmail", "Digite um e-mail válido (exemplo: nome@email.com).");
        valido = false;
    } else {
        limparErro(email, "erroEmail");
    }

    // Validação da dúvida
    if (duvidaDigitada === "") {
        mostrarErro(duvida, "erroDuvida", "Escreva sua dúvida.");
        valido = false;
    } else if (duvidaDigitada.length < 10) {
        mostrarErro(duvida, "erroDuvida", "A dúvida precisa ter pelo menos 10 caracteres.");
        valido = false;
    } else {
        limparErro(duvida, "erroDuvida");
    }

    // Validação da nota
    if (nota.value === "") {
        mostrarErro(nota, "erroNota", "Escolha uma nota de 1 a 10.");
        valido = false;
    } else {
        limparErro(nota, "erroNota");
    }

    // Se tiver erro, leva o cursor para o primeiro campo com problema
    if (!valido) {
        formulario.querySelector(".campo-erro").focus();
        return;
    }

// Se tudo estiver certo, mostra a mensagem de sucesso e limpa o formulário
    mensagemSucesso.textContent = "Dúvida enviada com sucesso! Obrigado(a), " + nomeDigitado + "!";
    formulario.reset();
});

// Quando o usuário volta a digitar, o erro daquele campo some
nome.addEventListener("input", function () { limparErro(nome, "erroNome"); });
email.addEventListener("input", function () { limparErro(email, "erroEmail"); });
duvida.addEventListener("input", function () { limparErro(duvida, "erroDuvida"); });
nota.addEventListener("change", function () { limparErro(nota, "erroNota"); });

// Limpar o formulário
document.getElementById("limpar").addEventListener("click", function () {
    limparErro(nome, "erroNome");
    limparErro(email, "erroEmail");
    limparErro(duvida, "erroDuvida");
    limparErro(nota, "erroNota");
    mensagemSucesso.textContent = "";
});