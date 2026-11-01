const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const typewriterText = document.getElementById('typewriterText');

let typewriterTimer = null;
let charIndex = 0;

function applyTheme(isLight) {
  body.classList.toggle('light', isLight);
  body.classList.toggle('dark', !isLight);
  themeToggle.textContent = isLight ? '☀' : '☾';
  localStorage.setItem('letter-theme', isLight ? 'light' : 'dark');
}

const savedTheme = localStorage.getItem('letter-theme');
applyTheme(savedTheme === 'light');

themeToggle.addEventListener('click', () => {
  const isLight = !body.classList.contains('light');
  applyTheme(isLight);
});

// Typewriter effect for hero title
function typeWriter() {
  const text = typewriterText.dataset.text || '';
  if (charIndex <= text.length) {
    typewriterText.textContent = text.slice(0, charIndex);
    charIndex += 1;
    typewriterTimer = setTimeout(typeWriter, 45);
  }
}

if (typewriterText) {
  typewriterText.textContent = '';
  charIndex = 0;
  typeWriter();
}

// Reveal-on-scroll animations
const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));

// Simple ambient background motion for a cleaner, calmer look.
const particles = document.getElementById('particles');
for (let i = 0; i < 10; i += 1) {
  const particle = document.createElement('span');
  particle.className = 'particle';
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.bottom = `${Math.random() * 35}%`;
  particle.style.animationDuration = `${16 + Math.random() * 14}s`;
  particle.style.animationDelay = `${Math.random() * 8}s`;
  particle.style.opacity = String(0.15 + Math.random() * 0.3);
  particles.appendChild(particle);
}


