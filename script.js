let clicks = 0;

function openTab(id, el) {
  document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  if (el) el.classList.add("active");

  document.getElementById("sidebar").classList.remove("open");
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}

function joinDiscord() {
  window.open("https://discord.gg/vVqt65QzJS", "_blank");
}

function randomNumber() {
  document.getElementById("rand").innerText =
    Math.floor(Math.random() * 10000);
}

function coinFlip() {
  document.getElementById("coin").innerText =
    Math.random() > 0.5 ? "HEADS" : "TAILS";
}

function rollDice() {
  document.getElementById("dice").innerText =
    "DICE: " + (Math.floor(Math.random() * 6) + 1);
}

function countClick() {
  clicks++;
  document.getElementById("count").innerText = clicks;
}

function fakeScan() {
  const msgs = ["SCANNING...", "CHECKING FILES...", "NO THREATS FOUND"];
  let i = 0;
  const el = document.getElementById("scan");
  el.innerText = msgs[i];

  const interval = setInterval(() => {
    i++;
    if (i >= msgs.length) return clearInterval(interval);
    el.innerText = msgs[i];
  }, 700);
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

function shakePage() {
  document.body.classList.add("shake");
  setTimeout(() => document.body.classList.remove("shake"), 300);
}

document.getElementById("users").innerText =
  Math.floor(Math.random() * 50) + 1;
