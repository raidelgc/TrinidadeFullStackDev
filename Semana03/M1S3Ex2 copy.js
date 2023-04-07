let numero = prompt('Digite o telefone');
console.log(numero);
let texto = prompt('Digite a mensagem');
console.log(texto);


console.log(`api.whatsapp.com/send?phone=${numero}&text=${texto}`);
