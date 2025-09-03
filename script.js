const sounds = {
  birds: new Audio("sounds/birds.mp3"),
  forest: new Audio("sounds/forest.mp3"),
  rain: new Audio("sounds/rain.mp3"),
};

for (let key in sounds) {
  sounds[key].loop = true;
}

function toggleSound(type) {
  const sound = sounds[type];
  if (sound.paused) {
    sound.play();
  } else {
    sound.pause();
  }
}

function setVolume(type, value) {
  sounds[type].volume = value;
}

// ------------------ Focus Timer ------------------

let timer;
let timeLeft = 25 * 60;

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  updateDisplay();
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  const display = document.getElementById("time-display");
  if (display) {
    display.textContent = `${minutes}:${seconds}`;
  }
}

// Initialize timer display if on timer page
if (document.getElementById("time-display")) {
  updateDisplay();
}
