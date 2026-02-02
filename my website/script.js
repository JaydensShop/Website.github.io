function openTab(id, el) {
  document.querySelectorAll('.content').forEach(c =>
    c.classList.remove('active')
  );
  document.querySelectorAll('.tab').forEach(t =>
    t.classList.remove('active')
  );

  document.getElementById(id).classList.add('active');
  el.classList.add('active');
}

function joinDiscord() {
  window.open('https://discord.gg/vVqt65QzJS', '_blank');
}

function randomNumber() {
  document.getElementById('rand').innerText =
    'Random: ' + Math.floor(Math.random() * 1000);
}
