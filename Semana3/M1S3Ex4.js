setInterval(() => {
  const day = "2023-04-04";
  const inMounth = new Date(day) - new Date();
  const inDays = inMounth / (1000 * 60 * 60 * 24);
  console.log(inDays);

  if (inDays > 0) {
    console.log(`Faltam ${inDays} dias para o seu aniversário.`);
  } else {
    console.log("Feliz Aniversário");
  }
}, 3000);
