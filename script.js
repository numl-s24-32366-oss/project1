const actionBtn = document.getElementById('actionBtn');
const message = document.getElementById('message');

actionBtn.addEventListener('click', () => {
  message.textContent = 'Thanks for reaching out! I would love to connect and discuss opportunities.';
  message.style.color = '#064e3b';
});
