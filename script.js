const wildfire = new Audio('wildfire.mp3');
const hurricane = new Audio('hurricane.mp3');

const wildfireBtn = document.getElementById('wildfireBtn');
const hurricaneBtn = document.getElementById('hurricaneBtn');
const stopBtn = document.getElementById('stopBtn');
const volumeSlider = document.getElementById('volumeSlider');

let currentAudio = null;
let currentButton = null;

// Set default volume
wildfire.volume = hurricane.volume = volumeSlider.value;

// Play function
function playSound(audio, button) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentButton.classList.remove('playing');
  }

  audio.play();
  button.classList.add('playing');

  currentAudio = audio;
  currentButton = button;
}

// Button events
wildfireBtn.onclick = () => playSound(wildfire, wildfireBtn);
hurricaneBtn.onclick = () => playSound(hurricane, hurricaneBtn);

// Stop
stopBtn.onclick = () => {
  if (!currentAudio) return;

  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentButton.classList.remove('playing');

  currentAudio = null;
  currentButton = null;
};

// Volume control
volumeSlider.oninput = () => {
  wildfire.volume = hurricane.volume = volumeSlider.value;
};
