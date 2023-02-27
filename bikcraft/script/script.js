// MENU MOBILE
const headerMobile = document.getElementById("header-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("visivel");
  const visivel = nav.classList.contains("visivel");
  event.currentTarget.setAttribute("aria-expanded", visivel);
}

headerMobile.addEventListener("click", toggleMenu);
headerMobile.addEventListener("touchstart", toggleMenu);

// HEADER FIXO
window.onscroll = function () {
  headerFixo();
};

var header = document.getElementById("header-fixo");
var sticky = header.offsetTop;

function headerFixo() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixo");
  } else {
    header.classList.remove("fixo");
  }
}

// PÁGINA SELECIONADA
const links = document.querySelectorAll("#header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ITENS DO ORCAMENTO
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// ABRIR PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// GALERIA BICICLETAS
const imagens = document.querySelectorAll(".bicicleta-imagens li img");

function galeriaTrocar(event) {
  const principal = document.querySelector(".bicicleta-principal")
  const clicada = event.currentTarget;
  principal.src = clicada.src
  principal.alt = clicada.alt
}

function galeriaClique(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaClique);

// ANIMACAO
if(window.SimpleAnime) {
  new SimpleAnime();
}
