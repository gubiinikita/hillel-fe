let countdownTime = 0;

const timerDisplay = document.getElementById('timer');
const inputField = document.getElementById('timeInput');
const startButton = document.getElementById('startButton');

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
  if (countdownTime > 0) {
    countdownTime--;
    timerDisplay.textContent = formatTime(countdownTime);
  } else {
    clearInterval(timerInterval);
    timerDisplay.textContent = '00:00';
    alert('Time is up');
  }
}

let timerInterval;

function startTimer() {
  const inputSeconds = parseInt(inputField.value, 10);
  if (!isNaN(inputSeconds) && inputSeconds > 0) {
    countdownTime = inputSeconds;
    timerDisplay.textContent = formatTime(countdownTime);
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
  } else {
    alert('Please enter valid time (in seconds)');
  }
}

startButton.addEventListener('click', startTimer);

timerDisplay.textContent = formatTime(countdownTime);
