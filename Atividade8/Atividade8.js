function iniciarPesquisa() {
    let somaIdade = 0;
    let maiorIdade = 0;
    let menorIdade = Infinity;
    let qtdPessimo = 0;
    let qtdOtimoBom = 0;
    let qtdMulheres = 0;
    let qtdHomens = 0;
    let qtdOutros = 0;

    const totalPessoas = 45;

    for (let i = 1; i <= totalPessoas; i++) {
        console.log("Entrevistado nº " + i);

        let idade = parseInt(prompt("Idade da pessoa " + i + ":"));
        let sexo = prompt("Sexo (F para Feminino, M para Masculino, O para Outros):").toUpperCase();
        let opiniao = parseInt(prompt("Opinião (4=Ótimo, 3=Bom, 2=Regular, 1=Péssimo):"));

        somaIdade += idade;

        if (idade > maiorIdade) {
            maiorIdade = idade;
        }
        if (idade < menorIdade) {
            menorIdade = idade;
        }

        if (opiniao === 1) {
            qtdPessimo++;
        }

        if (opiniao === 4 || opiniao === 3) {
            qtdOtimoBom++;
        }

        if (sexo === "F") {
            qtdMulheres++;
        } else if (sexo === "M") {
            qtdHomens++;
        } else {
            qtdOutros++;
        }
    }

    let mediaIdade = somaIdade / totalPessoas;
    let porcentagemOtimoBom = (qtdOtimoBom / totalPessoas) * 100;

    alert(
        "--- Resultados da Pesquisa ---" +
        "\nMédia de idade: " + mediaIdade.toFixed(2) +
        "\nPessoa mais velha: " + maiorIdade + " anos" +
        "\nPessoa mais nova: " + menorIdade + " anos" +
        "\nQtd. de respostas 'Péssimo': " + qtdPessimo +
        "\nPorcentagem de 'Ótimo' e 'Bom': " + porcentagemOtimoBom.toFixed(2) + "%" +
        "\nMulheres: " + qtdMulheres + " | Homens: " + qtdHomens + " | Outros: " + qtdOutros
    );
}