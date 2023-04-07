/*Dada a seguinte lista, de forma decrescente, retorne os dados das 2 listas de forma agrupada, pela seguinte ordem.

usuarios - Crescente: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']

frutas - Descrescente:[ “Banana”, “Morango”, “Maçã”, “Uva”, “Pêra” , “Laranja“]

Resultado esperado: ['Pedro - Laranja', ‘José - Pêra’, 'Aderbal - Uva', 'Danilo - Maçã', 'Luisa - Morango', 'Vitoria - Banana' ]*/

const nomes = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
const frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];
const novasFrutas = frutas.slice().reverse(); // cria uma cópia da lista invertida

const array = [];
for (let i = 0; i < nomes.length && i < novasFrutas.length; i++) {
  array.push(`${nomes[i]}-${novasFrutas[i]}`);
}
console.log(array);

/*let nomes = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
let frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];

const novasFrutas = frutas.reverse();

const nomesComFrutas = nomes.map((nome, index) => `${nome}n - ${novasFrutas[index]}`);

console.log(nomesComFrutas);*/
