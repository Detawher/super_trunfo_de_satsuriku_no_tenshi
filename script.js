var carta1 = {
  nome: "Isaac Foster",
  imagem:
    "https://i.pinimg.com/736x/df/89/29/df89291704a12ead973089a76bde07aa.jpg",
  atributos: {
    ataque: 87,
    defesa: 68,
    inteligencia: 59
  }
};

var carta2 = {
  nome: "Rachel Gardner",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEL-EkHX5fi9W3jk9M5FcBJRFR2bLTpddlA&usqp=CAU",
  atributos: {
    ataque: 34,
    defesa: 49,
    inteligencia: 79
  }
};

var carta3 = {
  nome: "Daniel Dickens",
  imagem:
    "https://i.pinimg.com/474x/6b/0d/63/6b0d634ebb9411a85dbbb11cd297e8a6.jpg",
  atributos: {
    ataque: 75,
    defesa: 67,
    inteligencia: 72
  }
};

var carta4 = {
  nome: "Edward Masom",
  imagem:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSO0aiMsQqAny5LOGBetehKKTJ5RUWVgpTQ&usqp=CAU",
  atributos: {
    ataque: 68,
    defesa: 53,
    inteligencia: 70
  }
};

var carta5 = {
  nome: "Catherine Ward",
  imagem:
    "https://i.pinimg.com/originals/2e/82/2c/2e822c809296ab7e64840492f45a626e.jpg",
  atributos: {
    ataque: 69,
    defesa: 71,
    inteligencia: 84
  }
};

var carta6 = {
  nome: "Abraham Gray",
  imagem:
    "https://i.pinimg.com/564x/91/ff/8e/91ff8ebaa702d26fd3cc5d8c9f9f8304.jpg",
  atributos: {
    ataque: 70,
    defesa: 70,
    inteligencia: 70
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
var cartaMaquina;
var cartaJogador;

var pontosJogador = 0;
var pontosMaquina = 0;

atualizarPlacar();

function atualizarPlacar() {
  var divPlacar = document.getElementById("placar");
  var html = "Jogador " + pontosJogador + " / " + pontosMaquina + " Máquina";

  divPlacar.innerHTML = html;
}

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 6);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 6);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 6);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura = `<img src="https://media.discordapp.net/attachments/887531303891767356/890323441046138921/20210922_162005_0000-removebg-preview.png" style=" width: inherit; height: inherit; position: absolute;">`;

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle"> ${cartaJogador.nome} </p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado");
  var atributoSelecionado = obtemAtributoSelecionado();

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = '<p class="resultado-final">Venceu!</p>';
    pontosJogador++;
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = '<p class="resultado-final">Perdeu...</p>';
    pontosMaquina++;
  } else {
    htmlResultado = '<p class="resultado-final">Empatou.</p>';
    pontosJogador++;
    pontosMaquina++;
  }

  document.getElementById("btnProximaRodada").disabled = false;

  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
  atualizarPlacar();
  exibirCartaMaquina();
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
}

function proximaRodada() {
  var divCartas = document.getElementById("cartas");
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`;
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnProximaRodada").disabled = true;

  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura = `<img src="https://media.discordapp.net/attachments/887531303891767356/890323441046138921/20210922_162005_0000-removebg-preview.png" style=" width: inherit; height: inherit; position: absolute;">`;

  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome} </p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}