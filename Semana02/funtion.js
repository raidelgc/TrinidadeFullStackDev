/*let copa2026 = ["brasil", "franca", "alemanha", "italia", "espanha"];
copa2026.push("argentina"); //añadir al final del array
copa2026.unshift("campeche"); //añadir al inicio
copa2026.splice(3, 1, "equador"); //la posicion 3 elimina  y añade equador

copa2026.forEach((time) => {
  console.log(`o time è:${time}`);
});
console.log(copa2026);*/
/*let copa2026 = ["brasil", "franca", "alemanha", "italia", "espanha"];
let list = document.getElementById("list");
copa2026.forEach((time) => {
  let li = document.createElement("li");
  li.innerHTML = time;
  ul.appendChild(li);
});
*/
/*const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const dobro = numero.map((numero) => {
  return numero * 2;
});
console.log(dobro);*/ /*tabuada*/

const carteiras = [29.55, 41.22, 33.54, 12.12];
const carteiraTotal = carteiras.reduce((acumulador, valorAtual) => {
  return (acumulador = acumulador + valorAtual);
});
console.log(carteiraTotal);
