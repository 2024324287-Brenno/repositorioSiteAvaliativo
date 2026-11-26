// pega todos os elementos que vão animar
var elementos = document.querySelectorAll(
    ".texto-sobre, .imagem-sobre, .servicos h2, .servicos .subtitulo, .servico-card, .contato h2, .contato .subtitulo, .contato-card"
);

//classe "surgir"
for (var i = 0; i < elementos.length; i++) {
    elementos[i].classList.add("surgir");
}

// quando o elemento aparece na tela, classe "visivel"
var observador = new IntersectionObserver(function (itens) {
    for (var i = 0; i < itens.length; i++) {
        if (itens[i].isIntersecting) {
            itens[i].target.classList.add("visivel");
            observador.unobserve(itens[i].target);
        }
    }
}, { threshold: 0.15 });

for (var j = 0; j < elementos.length; j++) {
    observador.observe(elementos[j]);
}

// fecha o menu quando clicar em algum link
const menu = document.getElementById("menu");

document.querySelectorAll("#menu .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});