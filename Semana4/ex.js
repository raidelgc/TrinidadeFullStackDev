const list = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];

const posInicial = 0;
const posFinal = 2;

if (
  posInicial < 0 ||
  posInicial >= list.length ||
  posFinal < 0 ||
  posFinal >= list.length
) {
  console.log(
    "Posição inválida. Por favor, selecione uma posição entre 0 e " +
      (list.length - 1)
  );
} else {
  const temp = list[posInicial];
  list[posInicial] = list[posFinal];
  list[posFinal] = temp;

  console.log(list);
}

/*
function trocarPosicao(inicial, final) {
  const lista =  ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

  const novaLista = []

  for(let index = 0; index < lista.length; index++){
    if(index === inicial) {
      novaLista.push(lista[final])
      continue
    }
    if(index === final){
      novaLista.push(lista[inicial])
      continue
    }
    novaLista.push(lista[index])
  }

  console.log(novaLista)
}

trocarPosicao(0, 2)

if(typeof inicial !== 'number' || typeof final !== 'number') {
    return console.log('O atributo enviado não é um número')
  }

  for (let index = 0; index < lista.length; index++) {
    if (index === inicial) {
      novaLista.push(lista[final])
      continue
    }
    if (index === final) {
      novaLista.push(lista[inicial])
      continue
    }
    novaLista.push(lista[6])
  }

  console.log(novaLista)
}

trocarPosicao(5, 1)
*/

/*
function busca(nome) {
    if(typeof nome !== 'string') throw new Error('Nome inválido')
    let index = lista.findIndex(el => el.toLocaleLowerCase() == nome.toLocaleLowerCase())
    if(index < 0) return console.warn('nome na lista não encontrado')
    console.log(lista[index], lista);
}

busca('Danilo')
*/

/*
function procurarUsuario(nome) {
  const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
  
  if(!lista.includes(nome)){
    return console.log(`O valor enviado ${nome} não consta na lista`)
  }
  
  const restanteDaLista = lista.filter((nomeNaLista) => nomeNaLista !== nome)
  console.log(nome, restanteDaLista)
}

procurarUsuario("pedro"
*/