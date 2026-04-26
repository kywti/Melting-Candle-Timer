candleBody = document.getElementById("candle-body");
breakModal = document.getElementById("modal-background");
breakLabel = document.getElementById("break-label");
breakTimerLabel = document.getElementById("break-timer");
let timeElapsed = document.getElementById("timer");

let timerUpdateInterval;
let frameUpdateInterval;

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

let counter = 0;

let hh = 0,
  mm = 0,
  ss = 0;

let formathh = "",
  formatmm = "",
  formatss = "";
formathh = checkTimeFormat(hh, formathh);
formatmm = checkTimeFormat(mm, formatmm);
formatss = checkTimeFormat(ss, formatss);

let breakmm = 10,
  breakss = 0;

breakCloseButton = document.getElementById("break-close-button");

if (breakCloseButton) {
  breakCloseButton.addEventListener("click", () => {
    breakModal.style.setProperty("visibility", "hidden");
  });
}

button = document.getElementById("start-button");

let formatbreakmm = "",
  formatbreakss = "";
formatbreakmm = checkTimeFormat(breakmm, formatbreakmm);
formatbreakss = checkTimeFormat(breakss, formatbreakss);

breakTimerLabel.innerText = formatbreakmm + ":" + formatbreakss;
isBreakOver = false;

if (button) {
  button.addEventListener("click", () => {
    counter = 0;
    candleBody.src = candleFrames[counter];
    hh = 0;
    mm = 0;
    ss = 0;
    timerUpdateInterval = setInterval(frameUpdate, 1000);
    frameUpdateInterval = setInterval(frameUpdateIntervalFunc, 1000);
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
    breakTimer();
  }
}

function breakTimer() {
  breakModal.style.setProperty("visibility", "visible");
  button.disabled = true;
  breakCloseButton.disabled = true;
  let breakTime = 30;
  let breakInterval = setInterval(() => {
    console.log("break: ", breakTime);
    manageBreakTime();
    breakTime -= 1;
    if (isBreakOver) {
      clearInterval(breakInterval);
      console.log("break over!");
      button.disabled = false;
      breakCloseButton.disabled = false;
      breakLabel.innerText = "BREAK OVER!";
    }
  }, 1000);
}

function manageBreakTime() {
  if (breakss == 0) {
    if (breakmm == 0 && breakss == 0) {
      isBreakOver = true;
    } else {
      breakmm--;
      breakss = 59;
    }
  } else {
    breakss--;
  }
  formatbreakmm = checkTimeFormat(breakmm, formatbreakmm);
  formatbreakss = checkTimeFormat(breakss, formatbreakss);
  breakTimerLabel.innerText = formatbreakmm + ":" + formatbreakss;
}

function manageTimeElapsed() {
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
  formathh = checkTimeFormat(hh, formathh);
  formatmm = checkTimeFormat(mm, formatmm);
  formatss = checkTimeFormat(ss, formatss);

  timeElapsed.innerText = formathh + ":" + formatmm + ":" + formatss;
}

function checkTimeFormat(time, formattime) {
  formattime = time.toString();
  if (time < 10) {
    formattime = "0" + formattime;
  }
  return formattime;
}

function frameUpdateIntervalFunc() {
  counter++;
}
