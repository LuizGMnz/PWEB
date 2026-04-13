let escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();
let numeroAleatorio = Math.random();
let escolhaComputador;

if (numeroAleatorio < 0.33) {
    escolhaComputador = "pedra";
} else if (numeroAleatorio < 0.66) {
    escolhaComputador = "papel";
} else {
    escolhaComputador = "tesoura";
}

let resultado = "";

if (escolhaUsuario === escolhaComputador) {
    resultado = "Empate!";
} else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra")
) {
    resultado = "Parabéns, você venceu!";
} else if (escolhaUsuario !== "pedra" && escolhaUsuario !== "papel" && escolhaUsuario !== "tesoura") {
    resultado = "Escolha inválida. Digite pedra, papel ou tesoura.";
} else {
    resultado = "Você perdeu! O computador venceu.";
}

alert("Você escolheu: " + escolhaUsuario + 
      "\nComputador escolheu: " + escolhaComputador + 
      "\n\nResultado: " + resultado);