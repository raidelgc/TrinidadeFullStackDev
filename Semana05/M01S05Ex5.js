/*Criar um algoritmo que conte o total de vogais baseado na string que foi enviada.

Regra 1: Caso não seja uma string, retorne uma mensagem de erro.

Regra 2: Caso identifique pelo menos 1 vogal, retorne o número exato.

Regra 3: Caso na palavra, não conste nenhuma vogal, retorne uma mensagem informe que não tem nenhuma vogal*/

function contarVogais(palavra) {
    if (typeof palavra !== "string") {
      return "Erro: entrada inválida. Por favor, informe uma string.";
    }
  
    const vogais = ["a", "e", "i", "o", "u"];
    let totalVogais = 0;
  
    for (let i = 0; i < palavra.length; i++) {
      const letra = palavra[i].toLowerCase();
  
      if (vogais.includes(letra)) {
        totalVogais++;
      }
    }
  
    if (totalVogais === 0) {
      return "A palavra não contém nenhuma vogal.";
    }
  
    return `A palavra contém ${totalVogais} vogais.`;
  }
  
  contarVogais("raidel");
  
