const startTimer = () => {
  console.log("Iniciando o cronômetro...");
  let count = 10;
  const countdown = setInterval(() => {
    console.log(count);
    count--;
    if (count < 0) {
      clearInterval(countdown);
      console.log("Seu tempo acabou!! Tente novamente!!");
    }
  }, 1000);
};
