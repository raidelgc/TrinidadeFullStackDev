class Conta {
  constructor(saldo, senha) {
    this._saldo = saldo;
    this._senha = senha;
  }

  deposito(valor, senha) {
    if (senha === this._senha) {
      this._saldo += valor;
      console.log(`Depósito de R$${valor} efetuado com sucesso.`);
      console.log(`Novo saldo: R$${this._saldo}`);
    } else {
      console.log(`Senha incorreta.`);
    }
  }

  retirada(valor, senha) {
    if (senha === this._senha) {
      if (valor <= this._saldo) {
        this._saldo -= valor;
        console.log(`Retirada de R$${valor} efetuada com sucesso.`);
        console.log(`Novo saldo: R$${this._saldo}`);
      } else {
        console.log(`Saldo insuficiente.`);
      }
    } else {
      console.log(`Senha incorreta.`);
    }
  }
}

class ContaPoupança extends Conta {
  constructor(saldo, senha) {
    super(saldo, senha);
    this._juros = 0.007; // índice de juros de 0.7%
  }

  atualizaJuros() {
    const ganho = this._saldo * this._juros;
    this._saldo += ganho;
    console.log(
      `Juros atualizados. Ganho: R$${ganho}. Novo saldo: R$${this._saldo}`
    );
  }
}

class ContaPoupançaPremium extends ContaPoupança {
  constructor(saldo, senha) {
    super(saldo, senha);
    this._juros = 0.012; // índice de juros de 1.2%
  }

  atualizaJuros() {
    const ganho = this._saldo * this._juros;
    this._saldo += ganho;
    console.log(
      `Juros atualizados. Ganho: R$${ganho}. Novo saldo: R$${this._saldo}`
    );
  }
}

const contaPoupanca = new ContaPoupança(1000, "minhasenha");

contaPoupanca.deposito(500, "minhasenha"); // Depósito de R$500 efetuado com sucesso. Novo saldo: R$1500
contaPoupanca.retirada(200, "minhasenha"); // Retirada de R$200 efetuada com sucesso. Novo saldo: R$1300

console.log(`Saldo atual: R$${contaPoupanca._saldo}`); // Saldo atual: R$1300

contaPoupanca.atualizaJuros(); // Juros atualizados. Ganho: R$9.1. Novo saldo: R$1309.1
console.log(`Saldo atual: R$${contaPoupanca._saldo}`); // Saldo atual: R$1309.1

const poupancaPremium = new ContaPoupançaPremium(1000, "senha123");
console.log(poupancaPremium._saldo); //
