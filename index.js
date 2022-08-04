const start = document.getElementById("btn2");
const lap = document.getElementById("btn1");
const seconds = document.getElementById("secnds");
const minutes = document.getElementById("min");
const hrline = document.getElementById("hrline");

var scnd = 0;
var mintCnt = 0;
var isStarted = true;
var waqtinSeconds;
var waqtinMinutes;

function increaseSeconds() {
  if (scnd > 58) scnd = -1;
  scnd++;
  seconds.innerText = scnd;
}

function increaseMinutes() {
  mintCnt++;
  minutes.innerText = "0" + mintCnt;
}

start.addEventListener("click", starrt);

function starrt() {
  if (isStarted === true) {
    waqtinSeconds = setInterval(increaseSeconds, 1000);
    waqtinMinutes = setInterval(increaseMinutes, 60000);
    start.innerText = "Pause";
    isStarted = false;
  } else {
    clearInterval(waqtinSeconds);
    clearInterval(waqtinMinutes);
    isStarted = true;
    start.innerText = "Start";
  }
}

lap.addEventListener("click", lapfun);
var i = 0;

function lapfun() {
  const line = document.createElement("HR");
  line.setAttribute("class", "lline");
  var lline = document.getElementsByClassName("lline");
  var timtime = document.createElement("li");
  timtime.textContent = mintCnt + ":" + scnd;

  hrline.appendChild(line);
  lline[i].appendChild(timtime);
  i++;
}
