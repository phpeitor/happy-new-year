const h2 = document.querySelector('#newYearText');
const container = document.querySelector('.container');
const texts = document.querySelectorAll('.text');
const video = document.getElementById('background-video');
const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

h2.innerHTML = `Happy New Year ${nextYear}`;

createCubes(currentYear);

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

function createCubes(year) {
  const digits = String(year).split('');

  texts.forEach((text, index) => {
    text.innerHTML = '';

    const start = digits[index];
    const end = index === 3 ? (Number(start) + 1) % 10 : start;

    for (let i = 0; i < 4; i++) {
      const span = document.createElement('span');
      span.style.setProperty('--i', i);

      if (i === 0) span.textContent = start;
      else if (i === 3) span.textContent = end;
      else span.textContent = (Number(start) + i) % 10;

      text.appendChild(span);
    }
  });
}