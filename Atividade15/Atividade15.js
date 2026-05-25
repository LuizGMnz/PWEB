function validar() {
    var campoNome = document.principalForm.elements["nome"];
    var campoEmail = document.principalForm.elements["email"];
    var campoComentario = document.principalForm.elements["comentario"];
    var opcoesPesquisa = document.principalForm.elements["pesquisa"];

    if (campoNome.value.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        campoNome.focus();
        return false;
    }

    if (campoEmail.value.trim() === "") {
        alert("Por favor, preencha o e-mail.");
        campoEmail.focus();
        return false;
    }

    if (campoComentario.value.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        campoComentario.focus();
        return false;
    }

    var valorPesquisa = "";
    for (var i = 0; i < opcoesPesquisa.length; i++) {
        if (opcoesPesquisa[i].checked) {
            valorPesquisa = opcoesPesquisa[i].value;
            break;
        }
    }

    if (valorPesquisa === "") {
        alert("Por favor, responda à pesquisa (Sim ou Não).");
        return false;
    }

    if (valorPesquisa === "Sim") {
        alert("Volte sempre à esta página!");
    } else if (valorPesquisa === "Não") {
        alert("Que bom que você voltou a visitar esta página!");
    }

    return true;
}