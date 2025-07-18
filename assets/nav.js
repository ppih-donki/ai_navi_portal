// assets/nav.js
document.addEventListener('DOMContentLoaded', function() {
  var btn   = document.getElementById('menuBtn');
  var panel = document.getElementById('navPanel');
  if (!btn || !panel) return;

  btn.addEventListener('click', function() {
    panel.classList.toggle('open');
  });
});
