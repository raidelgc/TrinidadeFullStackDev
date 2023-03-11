/*Utilizando a lista: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']

Através de lógica de programação, adicione um ou mais nomes na lista, porém não é possível receber um nome igual.

Regra 1: É necessário enviar um ou mais nomes;

Regra 2: Caso um ou mais nomes já exista na lista retorne uma mensagem de erro;

Regra 3: Se entre os nomes enviados, receber um valor diferente de uma string, retornar uma mensagem de erro;

Regra 4: Caso se enquadre, nas primeiras 3 regras, retornar um log da nova lista com os nomes adicionados junto aos anteriores*/

const lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];

function adicionarNomes(...nomes) {
  // verifica se foram enviados um ou mais nomes
  if (nomes.length === 0) {
    console.log("Erro: é necessário enviar um ou mais nomes");
    return lista;
  }

  // verifica se todos os parâmetros são strings
  if (!nomes.every(nome => typeof nome === "string")) {
    console.log("Erro: entre os nomes enviados, há um valor diferente de uma string");
    return lista;
  }

  // verifica se os nomes já existem na lista
  for (const nome of nomes) {
    if (lista.includes(nome)) {
      console.log(`Erro: o nome "${nome}" já existe na lista`);
      return lista;
    }
  }

  // adiciona os nomes à lista e exibe o resultado
  lista.push(...nomes);
  console.log(lista);
  return lista;
}

// exemplos de uso
adicionarNomes("Luan", "Marina");
adicionarNomes("Luisa", "Maria");
adicionarNomes(10, "Paulo");
adicionarNomes();
