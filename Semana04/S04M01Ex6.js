class CaixaRegistradora {
  constructor() {
    // Inicializa o estoque a partir do localStorage
    this._estoque = JSON.parse(localStorage.getItem("estoque")) || [];
    this._nomeCliente = "";
  }

  adicionarProduto(codigoBarra, preco, nome, quantidade) {
    const produto = { codigoBarra, preco, nome, quantidade };
    this._estoque.push(produto);
    // Salva o estoque atualizado no localStorage
    localStorage.setItem("estoque", JSON.stringify(this._estoque));
  }

  get estoque() {
    return this._estoque;
  }

  set estoque(novoEstoque) {
    this._estoque = novoEstoque;
    // Salva o estoque atualizado no localStorage
    localStorage.setItem("estoque", JSON.stringify(this._estoque));
  }

  iniciarAtendimento(nomeCliente) {
    console.log(`Atendendo ${nomeCliente}`);
    this._nomeCliente = nomeCliente;
  }

  adicionarItem(codigoBarra, quantidade) {
    console.log(
      `Adicionando ${quantidade} itens do produto de código de barras ${codigoBarra}`
    );
    this.removerItem(codigoBarra, quantidade);
  }

  calcularTotal() {
    console.log("Calculando total da compra");
  }

  fecharConta(dinheiroRecebido) {
    console.log(`Fechando conta e recebendo R$${dinheiroRecebido}`);
  }

  removerItem(codigoBarra, quantidade) {
    const index = this._estoque.findIndex(
      (produto) => produto.codigoBarra === codigoBarra
    );
    if (index >= 0) {
      const produto = this._estoque[index];
      if (produto.quantidade >= quantidade) {
        produto.quantidade -= quantidade;
        if (produto.quantidade === 0) {
          this._estoque.splice(index, 1);
        }
        // Salva o estoque atualizado no localStorage
        localStorage.setItem("estoque", JSON.stringify(this._estoque));
      } else {
        console.log(`Não há ${quantidade} unidades do produto ${produto.nome}`);
      }
    } else {
      console.log(`Produto de código de barras ${codigoBarra} não encontrado`);
    }
  }
}

const caixa = new CaixaRegistradora();

// Adiciona produtos ao estoque
caixa.adicionarProduto("1234567890", 5, "Maçã", 10);
caixa.adicionarProduto("568698465", 3, "Banana", 5);

// Inicia atendimento
caixa.iniciarAtendimento("Luis");

// Adiciona itens à compra e remove do estoque
caixa.adicionarItem("1234567890", 3);
caixa.adicionarItem("568698465", 1);
