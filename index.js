button = document.getElementById("start-button");
candleBody = document.getElementById("candle-body");
const candleFrames = [
  "img/candle-1.png",
  "img/candle-2.png",
  "img/candle-3.png",
  "img/candle-4.png",
  "img/candle-5.png",
  "img/candle-6.png",
  "img/candle-7.png",
  "img/candle-8.png",
  "img/candle-9.png",
  "img/candle-10.png",
];

let hh = 0,
  mm = 0,
  ss = 0;

let timeElapsed = document.getElementById("timer");

let timerUpdateInterval;
let frameUpdateInterval;

let counter = 0;

if (button) {
  button.addEventListener("click", () => {
    counter = 0;
    candleBody.src = candleFrames[counter];
    hh = 0;
    mm = 0;
    ss = 0;
    timerUpdateInterval = setInterval(frameUpdate, 1000);
    frameUpdateInterval = setInterval(frameUpdateIntervalFunc, 360000);
  });
}

function frameUpdate() {
  console.log("counter: ", counter);

  candleBody.src = candleFrames[counter];
  manageTimeElapsed();
  if (counter == 9) {
    clearInterval(timerUpdateInterval);
    clearInterval(frameUpdateInterval);
    console.log("Time's up!");
    alert("Break time!");
    breakTimer();
  }
}

function breakTimer() {
  button.disabled = true;
  let breakTime = 600;
  let breakInterval = setInterval(() => {
    console.log("break: ", breakTime);
    breakTime -= 1;
    if (breakTime == 0) {
      clearInterval(breakInterval);
      console.log("break over!");
      alert("Work Time!");
      button.disabled = false;
    }
  }, 1000);
}

function manageTimeElapsed() {
  let formathh = hh.toString(),
    formatmm = mm.toString(),
    formatss = ss.toString();

  //console.log("global counter =" + globalCounter);
  ss++;
  if (ss == 60) {
    if (mm == 59) {
      hh++;
      mm = 0;
    } else {
      mm++;
    }
    ss = 0;
  }
  timeElapsed.innerText = formathh + ":" + formatmm + ":" + formatss;
}

function frameUpdateIntervalFunc() {
  counter++;
}
