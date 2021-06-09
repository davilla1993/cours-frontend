function getInputValue() {
  let choice = document.getElementById("choice").value;

  if (isNaN(choice)) {
    alert("INVALIDE ! Merci d'entrer un nombre");
  } else {
    let startingMin = choice;
    // this.choice.value = "";

    let time = startingMin * 60;

    const countDownEl = document.getElementById("countdown");

    setInterval(updateCountdown, 1000);

    function updateCountdown() {
      const minutes = Math.floor(time / 60);

      let seconds = time % 60;

      seconds = seconds < 10 ? "0" + seconds : seconds;

      countDownEl.innerHTML = `${minutes} : ${seconds}`;

      if (time > 0) {
        time--;
      } else {
        countDownEl.innerHTML = `IT'S OVER !`;
      }
    }
  }
}
