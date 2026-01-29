const wildfire = new Audio("wildfire.mp3");
const hurricane = new Audio("hurricane.mp3");

const wildfireBtn = document.getElementById("wildfireBtn");
const hurricaneBtn = document.getElementById("hurricaneBtn");

function stopAll() {
  wildfire.pause();
  hurricane.pause();

  wildfire.currentTime = 0;
  hurricane.currentTime = 0;

  wildfireBtn.classList.remove("playing");
  hurricaneBtn.classList.remove("playing");
}

wildfireBtn.addEventListener("click", () => {
  stopAll();
  wildfire.play();
  wildfireBtn.classList.add("playing");
});

hurricaneBtn.addEventListener("click", () => {
  stopAll();
  hurricane.play();
  hurricaneBtn.classList.add("playing");
});
