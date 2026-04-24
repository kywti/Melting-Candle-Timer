button = document.getElementById("click-btn");

candle = document.getElementById("candle-body");

let hh = 0,
  mm = 0,
  ss = 30;

let height = 300;

let hhCounter = 0,
  mmCounter = 0,
  ssCounter = 0,
  globalCounter = 18;

let timeLeft = document.getElementById("time-left");

let intervalId;
let tempInterval;

if (button) {
  button.addEventListener("click", () => {
    height = 300;
    candle.setAttribute("style", "height:" + height + "px;");
    hh = 0;
    mm = 0;
    ss = 30;
    intervalId = setInterval(frameUpdate, 1000);
    tempInterval = setInterval(tempIntervalFunc, 3000);
  });
}

function frameUpdate() {
  console.log("height: ", height);
  //hh * 3600 + mm * 60 + ss + 1);

  candle.setAttribute("style", "height:" + height + "px;");
  manageTimeLeft();
  if (height == 0) {
    clearInterval(intervalId);
    clearInterval(tempInterval);
    console.log("Time's up!");
    alert("Break time!");
    breakTimer();
  }
}

function breakTimer() {
  button.disabled = true;
  let breakTime = 10;
  let breakInterval = setInterval(() => {
    console.log("break: ", breakTime);
    breakTime -= 2;
    if (breakTime == 0) {
      clearInterval(breakInterval);
      console.log("break over!");
      alert("Work Time!");
      button.disabled = false;
    }
  }, 1000);
}

function manageTimeLeft() {
  let formathh = hh.toString(),
    formatmm = mm.toString(),
    formatss = ss.toString();

  //console.log("global counter =" + globalCounter);
  ss--;
  if (ss < 0) {
    if (mm == 0) {
      if (hh == 0) {
        console.log("timer over");
      } else {
        hh--;
        mm = 59;
      }
    } else {
      mm--;
    }
    ss = 59;
  }

  // timeLeft.innerText = formathh + ":" + formatmm + ":" + formatss;
  globalCounter--;
}

function tempIntervalFunc() {
  height -= 30;
}
