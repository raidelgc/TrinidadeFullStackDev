class CaixaRegistradora {
  constructor() {
    this._estoque = [];
    this._nomeCliente = "";
  }

  adicionarProduto(codigoBarra, preco, nome) {
    const produto = { codigoBarra, preco, nome };
    this._estoque.push(produto);
  }

  get estoque() {
    return this._estoque;
  }

  set estoque(novoEstoque) {
    this._estoque = novoEstoque;
  }

  iniciarAtendimento(nomeCliente) {
    console.log(`Atendendo ${nomeCliente}`);
    this._nomeCliente = nomeCliente;
  }

  adicionarItem(codigoBarra, quantidade) {
    console.log(
      `Adicionando ${quantidade} itens do produto de código de barras ${codigoBarra}`
    );
  }

  calcularTotal() {
    console.log("Calculando total da compra");
  }

  fecharConta(dinheiroRecebido) {
    console.log(`Fechando conta e recebendo R$${dinheiroRecebido}`);
  }
}
const caixa = new CaixaRegistradora();
caixa.adicionarProduto("1234567890", 5, "maça");
caixa.adicionarProduto("568698465", 5, "banana");
const inventario = caixa.estoque;
console.log(inventario);
caixa.iniciarAtendimento("Luis");
caixa.adicionarItem("1234567890", 10);
caixa.adicionarItem("568698465", 1);
caixa.calcularTotal();
caixa.fecharConta(80);
