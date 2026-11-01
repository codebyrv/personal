const button = document.getElementById('themeToggle');
const body = document.body;

const applyTheme = (isLight) => {
  body.classList.toggle('light', isLight);
  const nextLabel = isLight ? 'Switch to dark mode' : 'Switch to light mode';
  button.setAttribute('aria-label', nextLabel);
  button.textContent = isLight ? '☀' : '☾';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  applyTheme(true);
} else {
  applyTheme(false);
}

button.addEventListener('click', () => {
  applyTheme(!body.classList.contains('light'));
});

const typewriter = document.getElementById('typewriterText');
if (typewriter) {
  const text = typewriter.dataset.text || '';
  let index = 0;

  const tick = () => {
    typewriter.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) {
      setTimeout(tick, 45);
    }
  };

  tick();
}

const revealItems = document.querySelectorAll('.reveal');
revealItems.forEach((item, index) => {
  setTimeout(() => item.classList.add('visible'), 120 * index);
});

const particles = document.getElementById('particles');
if (particles) {
  for (let i = 0; i < 18; i += 1) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particles.appendChild(particle);
  }
}
