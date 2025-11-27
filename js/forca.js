let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];
let tentativas = 6;

const palavras = [
  (palavra001 = { nome: "Brasil", categoria: "PAIS" }),
  (palavra002 = { nome: "Peru", categoria: "PAIS" }),
  (palavra003 = { nome: "Alemanha", categoria: "PAIS" }),
  (palavra004 = { nome: "Bangladesh", categoria: "PAIS" }),
  (palavra005 = { nome: "Botsuana", categoria: "PAIS" }),
  (palavra006 = { nome: "Bielorrússia ", categoria: "PAIS" }),
  (palavra007 = { nome: "Liechtenstein", categoria: "PAIS" }),
  (palavra008 = { nome: "Bosnia", categoria: "PAIS" }),
  (palavra009 = { nome: "Eslovênia", categoria: "PAIS" }),
  (palavra010 = { nome: "Zambia", categoria: "PAIS" }),
  (palavra011 = { nome: "Vanuatu", categoria: "PAIS" }),
  (palavra012 = { nome: "Tuvalu", categoria: "PAIS" }),
  (palavra013 = { nome: "Belgica", categoria: "PAIS" }),
  (palavra014 = { nome: "Canada ", categoria: "PAIS" }),
  (palavra015 = { nome: "Jordania", categoria: "PAIS" }),
  (palavra016 = { nome: "Madagascar", categoria: "PAIS" }),
  (palavra017 = { nome: "Libia", categoria: "PAIS" }),
  (palavra018 = { nome: "Lesoto", categoria: "PAIS" }),
  (palavra018 = { nome: "Kiribati", categoria: "PAIS" }),
  (palavra019 = { nome: "Oma", categoria: "PAIS" }),
  (palavra021 = { nome: "Essuatini", categoria: "PAIS" }),
  (palavra022 = { nome: "Benim ", categoria: "PAIS" }),
  (palavra023 = { nome: "Haiti", categoria: "PAIS" }),
  (palavra024 = { nome: "Mocambique", categoria: "PAIS" }),
  (palavra025 = { nome: "Braganca", categoria: "CIDADE" }),
  (palavra026 = { nome: "Tatui", categoria: "CIDADE" }),
  (palavra027 = { nome: "Oklahoma ", categoria: "CIDADE" }),
  (palavra028 = { nome: "Quebec", categoria: "CIDADE" }),
  (palavra029 = { nome: "Amsterda", categoria: "CIDADE" }),
  (palavra030 = { nome: "Guatemala", categoria: "CIDADE" }),
  (palavra031 = { nome: "Cubatao", categoria: "CIDADE" }),
  (palavra032 = { nome: "Oklahoma ", categoria: "CIDADE" }),
  (palavra033 = { nome: "Nova-Déli", categoria: "CIDADE" }),
  (palavra034 = { nome: "Abuja", categoria: "CIDADE" }),
];

criarPalavraSecreta();

function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length); //multiplica pelo tamanho da lista

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;

  console.log(indexPalavra);
}

montarPalavraTela();

function montarPalavraTela() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraSecretaCategoria;

  const palavraTela = document.getElementById("palavra-secreta");
  palavraTela.innerHTML = "";

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = "&nbsp;";
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    } else {
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    }
  }
}

// muda a cor das letras escolhidas
function verificaLetraEscolhida(letra) {
  if (tentativas > 0) {
    mudarStyleLetra("tecla-" + letra);
    comparaListas(letra);
    montarPalavraTela();
  }
}

function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = "#1C1C1C";
  document.getElementById(tecla).style.color = "#fffafa";
  document.getElementById(tecla).style.border = " 3px solid #FF0000";
}

function comparaListas(letra) {
  const pos = palavraSecretaSorteada.indexOf(letra);
  if (pos < 0) {
    tentativas--;
    // errou apresenta a imagem na tela
    carregaImageForca();
    // verificar se tem tentativas , apresentar msg na tela
  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }

  let vitoria = true;
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }
  if (vitoria == true) {
    //mensagem na tela
    tentativas = 0;
  }
}

function carregaImageForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("imagem").style.background =
        "url('./img/forca01.png')";
      document.getElementById("imagem").style.backgroundRepeat = "no-repeat";
      break;
    case 4:
      document.getElementById("imagem").style.background =
        "url('./img/forca02.png')";
      document.getElementById("imagem").style.backgroundRepeat = "no-repeat";
      break;
    case 3:
      document.getElementById("imagem").style.background =
        "url('./img/forca03.png')";
      document.getElementById("imagem").style.backgroundRepeat = "no-repeat";
      break;
    case 2:
      document.getElementById("imagem").style.background =
        "url('./img/forca04.png')";
      document.getElementById("imagem").style.backgroundRepeat = "no-repeat";
      break;
    case 1:
      document.getElementById("imagem").style.background =
        "url('./img/forca05.png')";
      document.getElementById("imagem").style.backgroundRepeat = "no-repeat";
      break;
    case 0:
      document.getElementById("imagem").style.background =
        "url('./img/forca07.png')";
      document.getElementById("imagem").style.backgroundRepeat = "no-repeat";
      break;
    default:
      document.getElementById("imagem").style.background =
        "url('./img/forca.png')";
      document.getElementById("imagem").style.backgroundRepeat = "no-repeat";
      break;
  }
}
