let count = 0;
const el = document.getElementById('count');
document.getElementById('inc').addEventListener('click', () => { el.textContent = ++count; });
document.getElementById('reset').addEventListener('click', () => { count = 0; el.textContent = count; });
