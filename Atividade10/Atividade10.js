let altura = Number(prompt("Informe a altura: "));
let peso = Number(prompt("Informe o peso: "));

alert(`Classificação do IMC: ${IMC(altura, peso)}\nAltura: ${altura}m\nPeso: ${peso}kg`);

function IMC(alt, pes){
    let imc = (pes / Math.pow(alt, 2));

    if (imc > 40.0){
        return ("Obesidade Grave");

    } else if (imc >= 30.0){
        return ("Obesidade");

    } else if (imc >= 25.0){
        return ("Sobrepeso");

    } else if (imc >= 18.5){
        return ("Normal");
    } else {
        return ("Magreza");
    }
}