const codes = document.querySelector('.code-container');

window.addEventListener('click', (e) => {
  document.querySelector('input').focus();
});
window.addEventListener('keydown', (e) => {
  codes.innerHTML = `
    <nav>
      <small>event.key</small>
      <div>${e.key === " " ? 'Space' : e.key}</div>
    </nav>
    <nav>
      <small>event.keyCode</small>
      <div>${e.keyCode === " " ? 'Space' : e.keyCode}</div>
    </nav>
    <nav>
      <small>event.code</small>
      <div>${e.key === " " ? 'Space' : e.code}</div>
    </nav>
    <input type="text">
  `
});