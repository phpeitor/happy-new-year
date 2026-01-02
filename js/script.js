const h2 = document.querySelector('#newYearText');
const container = document.querySelector('.container');
const texts = document.querySelectorAll('.text');
const video = document.getElementById('background-video');
const now = new Date();
const currentYear = now.getFullYear();
const isDecember = now.getMonth() === 11; 

const displayYear = isDecember ? currentYear + 1 : currentYear;

h2.innerHTML = `Happy New Year ${displayYear}`;

createCubes(currentYear , isDecember);

h2.onclick = function () {
  const isActive = this.classList.toggle('active');
  container.classList.toggle('newyear', isActive);

  if (isActive) {
    video.classList.add('playing');
    video.play().catch(() => {});
  } else {
    video.classList.remove('playing');
    video.pause();
    video.currentTime = 0;
  }
};

const glowingWrapper = document.getElementById('glowing-wrapper');

const GLOWING_COUNT = 4;
const SPANS_PER_GLOW = 3;

for (let g = 0; g < GLOWING_COUNT; g++) {
  const glowing = document.createElement('div');
  glowing.className = 'glowing';

  for (let i = 1; i <= SPANS_PER_GLOW; i++) {
    const span = document.createElement('span');
    span.style.setProperty('--i', i);
    glowing.appendChild(span);
  }

  glowingWrapper.appendChild(glowing);
}

function createCubes(year, animate) {
  const digits = String(year).split('');

  texts.forEach((text, index) => {
    text.innerHTML = '';

    const start = digits[index];

    for (let i = 0; i < 4; i++) {
      const span = document.createElement('span');
      span.style.setProperty('--i', i);

      if (!animate) {
        span.textContent = start;
      } else {
        if (i === 0) span.textContent = start;
        else if (i === 3 && index === 3)
          span.textContent = (Number(start) + 1) % 10;
        else
          span.textContent = (Number(start) + i) % 10;
      }

      text.appendChild(span);
    }
  });
}