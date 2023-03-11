let nomes = [
  "Pedro",
  "José",
  "Aderbal",
  "Danilo",
  "Luisa",
  "Vitoria",
  "Luis",
  "Danilo",
  "José",
];

let nomesUnicos = [];
let duplicados = [];

for (let i = 0; i < nomes.length; i++) {
  if (!nomesUnicos.includes(nomes[i])) {
    nomesUnicos.push(nomes[i]);
  } else {
    if (!duplicados.includes(nomes[i])) {
      duplicados.push(nomes[i]);
    }
  }
}
console.log(`${duplicados}`, nomesUnicos);
