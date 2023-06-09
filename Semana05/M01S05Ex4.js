/*Utilizar o array de objetos:

[

{nome: "luis", idade: 26},

{nome: "norma", idade: 16},

{nome: "daiana", idade: 26},

{nome: "jorge", idade: 16},

{nome: "kauan", idade: 16},

{nome: "charles", idade: 26},

{nome: "marco", idade: 16},

{nome: "bruno", idade: 16}

]

‌
Retornar uma lista separada pelos usuários com idades menores de 18 e outra com os usuários maiores ou iguais a 18.*/
const array = [
  { nome: "luis", idade: 26 },
  { nome: "norma", idade: 16 },
  { nome: "daiana", idade: 26 },
  { nome: "jorge", idade: 16 },
  { nome: "kauan", idade: 16 },
  { nome: "charles", idade: 26 },
  { nome: "marco", idade: 16 },
  { nome: "bruno", idade: 16 },
];

const menores = [];
const maiores = [];

for (let i = 0; i < array.length; i++) {
  if (array[i].idade < 18) {
    menores.push(array[i]);
  } else {
    maiores.push(array[i]);
  }
}

console.log("Usuários menores de idade: ", menores);
console.log("Usuários maiores de idade: ", maiores);
