const forca = document.querySelectorAll(".forca");

const caixaErros = document.querySelector(".erros");

const userInput = document.querySelector(".user-input");

const mensagemFinal = document.querySelector(".mensagem-vencedor");
const mensagemErro = document.querySelector(".mensagem-erro");

const novoJogo = document.querySelector(".btn-opcoes-item-1");

const adicionarInput = document.querySelector(".adicionar-input");
const continuar = document.querySelector("continuar");

/////////////////////////

const palavraSorteio = [
  "javascript",
  "programar",
  "java",
  "backend",
  "frontend",
];

let sorteio =
  palavraSorteio[
    Math.floor(Math.random() * palavraSorteio.length)
  ].toUpperCase();
const acertos = [];
const erros = [];

function mostrarPalavra() {
  userInput.innerHTML = `${sorteio
    .split("")
    .map(
      (letra) =>
        `<span class="input">${acertos.includes(letra) ? letra : ""}</span>`
    )
    .join("")}`;

  const letraAcerto = userInput.innerText.replace(/\n/g, "");

  if (letraAcerto === sorteio) {
    mensagemFinal.style.visibility = "visible";
  }
}
function atualizar() {
  caixaErros.innerHTML = `${erros.length > 0 ? "<p>Erros</p>" : ""}${erros.map(
    (letra) => `<span> ${letra} </span>`
  )}`;

  Array.from(forca)
    .reverse()
    .forEach((partes, index) => {
      const err = erros.length;

      if (index < err) {
        partes.style.visibility = "visible";
      } else {
        partes.style.visibility = "hidden";
      }
    });
  if (erros.length === forca.length) {
    mensagemFinal.style.visibility = "visible";
    mensagemFinal.innerText = "Você perdeu!";
  }
}
function mostrarErro() {
  mensagemErro.style.visibility = "visible";
  setTimeout(() => {
    mensagemErro.style.visibility = "hidden";
  }, 2000);
}

window.addEventListener("keydown", (event) => {
  const inputDoUser = event.key.toUpperCase();

  if (event.keyCode >= 65 && event.keyCode <= 90) {
    if (sorteio.includes(inputDoUser)) {
      if (!palavraSorteio.includes(inputDoUser)) {
        acertos.push(inputDoUser);
        mostrarPalavra();
      } else {
        mostrarErro();
      }
    } else {
      if (!erros.includes(inputDoUser)) {
        erros.push(inputDoUser);
        atualizar();
      } else {
        mostrarErro();
      }
    }
  }
});

novoJogo.addEventListener("click", () => {
  acertos.splice(0);
  erros.splice(0);
  sorteio =
    palavraSorteio[
      Math.floor(Math.random() * palavraSorteio.length)
    ].toUpperCase();
  mostrarPalavra();
  atualizar();
  mensagemFinal.style.visibility = "hidden";
});

mostrarPalavra();
