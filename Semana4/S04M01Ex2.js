class Conta {
    constructor(saldoInicial, senha) {
      this._saldo = saldoInicial;
      this._senha = senha;
    }
  
    deposito(valor, senha) {
      if (senha !== this._senha) {
        console.log("Senha incorreta");
        return;
      }
  
      this._saldo += valor;
      console.log(`Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this._saldo}`);
    }
  
    retirada(valor, senha) {
      if (senha !== this._senha) {
        console.log("Senha incorreta");
        return;
      }
  
      if (valor > this._saldo) {
        console.log("Saldo insuficiente");
        return;
      }
  
      this._saldo -= valor;
      console.log(`Retirada de R$${valor} realizada com sucesso. Novo saldo: R$${this._saldo}`);
    }
  }
  
  const contaCorrente = new Conta(1000, "minhasenha");
  contaCorrente.deposito(500, "minhasenha"); // Depósito de R$500 realizado com sucesso. Novo saldo: R$1500
  contaCorrente.retirada(300, "senhaincorreta"); // Senha incorreta
  contaCorrente.retirada(2000, "minhasenha"); // Saldo insuficiente
  contaCorrente.retirada(100, "minhasenha"); // Retirada de R$100 realizada com sucesso. Novo saldo: R$1400
  