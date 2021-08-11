/* Variaveis das cartas */
var cartaHarry = { nome: "Harry Potter", atributos: { ataque: 500, defesa: 850, magia: 1000 } }
var cartaRick = { nome: "Rick Sanchez", atributos: { ataque: 1000, defesa: 1000, magia: 850 } }
var cartaThomas = { nome: "Thomas Shelby", atributos: { ataque: 250, defesa: 600, magia: 0 } }
var cartaLucifer = { nome: "Lúcifer Morningstar", atributos: { ataque: 1205, defesa: 999, magia: 999 } }
var cartaFin = { nome: "Fin", atributos: { ataque: 110, defesa: 360, magia: 350 } }
var cartaJack = { nome: "Jack Cachorro", atributos: { ataque: 500, defesa: 850, magia: 600 } }
var cartaVoldemort = { nome: "Lord Voldemort", atributos: { ataque: 500, defesa: 600, magia: 999 } }
var cartaResplendor = { nome: "Sr. Resplendor", atributos: { ataque: 1000, defesa: 900, magia: 500 } }
var cartaMEGA = { nome: "MEGA MAGIA", atributos: { ataque: 2000, defesa: 2000, magia: 0 } }


var cartaMaquina
var cartaJogador
var cartas = [cartaHarry, cartaRick, cartaThomas, cartaLucifer, cartaFin, cartaJack, cartaVoldemort, cartaResplendor, cartaMEGA]
// índice       0           1           2           3               4          5           6            7                 8

/* Formato da array */

// carta[0] cartaHarry
// carta[1] cartaRick
// carta[2] cartaThomas
// carta[3] cartaLucifer
// carta[4] cartaFin
// carta[5] cartaJack
// carta[6] cartaVoldemort
// carta[7] cartaResplendor
// carta[8] cartaMEGA

/* Criando a função para sortear as cartas */
function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        alert('Venceu! Sua carta é maior')
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        alert('Perdeu. Carta da máquina é maior')
    } else {
        alert('Empatou!')
    }
    console.log(cartaMaquina)
}
