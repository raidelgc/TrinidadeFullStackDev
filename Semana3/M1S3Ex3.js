let tarefas = [
  { atividade: "Acordar" },
  { atividade: "Desligar Alarma" },
  { atividade: "Pegar onibus" },
  { atividade: "Trabalhar" },
  { atividade: "Aula" },
];
console.log(tarefas);
let buscar = tarefas.find((buscar) => {
  return buscar.atividade === "Aula";
});
console.log(buscar);
let alteraAcordar = 0;
tarefas.splice(alteraAcordar, 1, "Descansar");

console.log(tarefas);
let deleta = tarefas.pop(1);
console.log(tarefas);
tarefas.push("Ir para casa");
console.log(tarefas);
