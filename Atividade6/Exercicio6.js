function exercicioMedia() {
    let nome = prompt("Digite o nome do aluno:");
    
    let n1 = parseFloat(prompt("Digite a 1ª nota:"));
    let n2 = parseFloat(prompt("Digite a 2ª nota:"));
    let n3 = parseFloat(prompt("Digite a 3ª nota:"));
    let n4 = parseFloat(prompt("Digite a 4ª nota:"));

    let media = (n1 + n2 + n3 + n4) / 4;

    alert("Resultado do Aluno: " + nome + "\nMédia Final: " + media.toFixed(2));
}

function exercicioOperacoes() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let soma = num1 + num2;
    let sub  = num1 - num2;
    let mult = num1 * num2;
    let div  = num1 / num2;
    let resto = num1 % num2;

    let mensagem = "Operações com " + num1 + " e " + num2 + ":\n" +
                   "\nSoma: " + soma +
                   "\nSubtração: " + sub +
                   "\nProduto: " + mult +
                   "\nDivisão: " + div +
                   "\nResto: " + resto;

    alert(mensagem);
}