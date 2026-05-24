function transformarTexto() {
    // Captura o elemento do input text e os radio buttons
    let campoTexto = document.getElementById("texto");
    let radioMaiusculo = document.getElementById("maiusculo");
    let radioMinusculo = document.getElementById("minusculo");

    // Verifica qual radio button está selecionado e altera o valor do texto
    if (radioMaiusculo.checked) {
        campoTexto.value = campoTexto.value.toUpperCase();
    } else if (radioMinusculo.checked) {
        campoTexto.value = campoTexto.value.toLowerCase();
    }
}