function Area(b, a) {
    return b * a;
}

function Retangulo() {
    let base = (Number(prompt("Base: ")));
    let altura = (Number(prompt("Altura: ")));
    let area = Area(base, altura);

    alert(`Area: ${area}`);
}

class Conta {
    constructor(nome, banco, numero, saldo) {
        this.nomeCorrentista = nome;
        this.banco = banco;
        this.numeroDaConta = numero;
        this.saldo = Number(saldo);
    }
}

class Corrente extends Conta {
    constructor(nome, banco, numero, saldo, especial) {
        super(nome, banco, numero, saldo);
        this.saldoEspecial = Number(especial);
    }
}

class Poupanca extends Conta {
    constructor(nome, banco, numero, saldo, juros, vencimento) {
        super(nome, banco, numero, saldo);
        this.juros = Number(juros);
        this.dataVencimento = vencimento;
    }
}

function CriarContas() {
    let c = new Corrente(
        prompt("Nome:"), prompt("Banco:"), prompt("Conta:"), 
        prompt("Saldo:"), prompt("Saldo Especial:")
    );

    let p = new Poupanca(
        prompt("Nome:"), prompt("Banco:"), prompt("Conta:"), 
        prompt("Saldo:"), prompt("Juros:"), prompt("Vencimento:")
    );

    alert(
        "CORRENTE:\n" +
        "Nome: " + c.nomeCorrentista + "\n" +
        "Banco: " + c.banco + "\n" +
        "Saldo: " + c.saldo + "\n" +
        "Especial: " + c.saldoEspecial
    );
    alert(
        "POUPANÇA: \n" +
        "Nome: " + p.nomeCorrentista + "\n" +
        "Banco: " + p.banco + "\n" +
        "Saldo: " + p.saldo + "\n" +
        "Juros: " + p.juros + "\n" +
        "Vencimento: " + p.dataVencimento
    );
}

CriarContas();