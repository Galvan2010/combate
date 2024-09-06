let redCounter = 0;
let blueCounter = 0;

function incrementar(color) {
  if (color === 'red') {
    redCounter++;
    document.getElementById('red-counter').innerText = redCounter;
  } else if (color === 'blue') {
    blueCounter++;
    document.getElementById('blue-counter').innerText = blueCounter;
  }
}

function resetear(color) {
  if (color === 'red') {
    redCounter = 0;
    document.getElementById('red-counter').innerText = redCounter;
  } else if (color === 'blue') {
    blueCounter = 0;
    document.getElementById('blue-counter').innerText = blueCounter;
  }
}

let timerInterval;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startPause() {
  if (!running) {
    running = true;
    timerInterval = setInterval(runTimer, 1000);
  } else {
    running = false;
    clearInterval(timerInterval);
  }
}

function reset() {
  running = false;
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('timer').innerText = '00:00:00';
}

function runTimer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const displayHours = (hours < 10) ? `0${hours}` : hours;
  const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
  const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;

  document.getElementById('timer').innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}
