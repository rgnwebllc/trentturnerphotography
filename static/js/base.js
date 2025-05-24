if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

// Typewriter effect
const text = "Redefine Confidence Through the Lens";
const target = document.getElementById("typewriter-text");
let index = 0;

function typeLetter() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeLetter, 80); // Adjust speed here
  }
}

window.addEventListener("load", typeLetter);

// Parallax background
const hero = document.querySelector('.hero');

const baseX = 30; // desired resting horizontal position (show more of her face)
const baseY = 0;  // keep top aligned

function clamp(val, min, max) {
  return Math.max(min, Math.min(val, max));
}

window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  // Clamp background movement range
  const moveX = clamp(baseX + (x - 50) / 20, 20, 40); // horizontal range from 20%–40%
  const moveY = clamp(baseY + (y - 50) / 20, 0, 5);    // vertical range from 0%–5%

  hero.style.backgroundPosition = `${moveX}% ${moveY}%`;
});

window.addEventListener('mouseleave', () => {
  hero.style.backgroundPosition = `${baseX}% ${baseY}%`;
});