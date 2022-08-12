let colors = [
  "#84cc16",
  "#22c55e",
  "#ef4444",
  "#fde047",
  "#8b5cf6",
  "#ec4899",
  "#fb923c",
];
let balloonIds = [
  "balloon-1",
  "balloon-2",
  "balloon-3",
  "balloon-4",
  "balloon-5",
  "balloon-6",
  "balloon-7",
  "balloon-8",
  "balloon-9",
  "balloon-10",
  "balloon-11",
  "balloon-12",
  "balloon-13",
  "balloon-14",
  "balloon-15",
  "balloon-16",
  "balloon-17",
  "balloon-18",
  "balloon-19",
  "balloon-20",
  "balloon-21",
  "balloon-22",
  "balloon-23",
  "balloon-24",
  "balloon-25",
];

for (let i = 0; i < balloonIds.length; i++) {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  let valBalloon = balloonIds[i];
  let getBalloon = document.getElementById(valBalloon);
  getBalloon.style.backgroundColor = randomColor;
}

let matchBalloon = document.getElementById("match-color");
matchBalloon.style.backgroundColor =
  colors[Math.floor(Math.random() * colors.length)];

let score = 0;
document.getElementById("new-score").innerText = score;
let failed = 0;

function findBalloon(a) {
  let poppedBalloon = document.getElementById(a).style.backgroundColor;
  if (poppedBalloon === matchBalloon.style.backgroundColor) {
    document.getElementById(a).style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    document.getElementById(a).style.transition = "1.2s";
    document.getElementById("new-score").innerText = ++score;
  } else {
    ++failed;
    for (let i = 0; i < failed; i++) {
      document.getElementById(failed).style.display = "none";
    }
  }
  matchBalloon.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  if (score === 10) {
    document.getElementById("game-win").style.display = "flex";
  } else if (failed === 5) {
    document.getElementById("game-over").style.display = "flex";
  }
}
