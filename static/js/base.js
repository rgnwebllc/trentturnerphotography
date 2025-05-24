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
    setTimeout(typeLetter, 80);
  }
}

window.addEventListener("load", typeLetter);

// Parallax background
const hero = document.querySelector('.hero');

const baseX = 30;
const baseY = 0;

function clamp(val, min, max) {
  return Math.max(min, Math.min(val, max));
}

window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  const moveX = clamp(baseX + (x - 50) / 20, 20, 40);
  const moveY = clamp(baseY + (y - 50) / 20, 0, 5);

  hero.style.backgroundPosition = `${moveX}% ${moveY}%`;
});

window.addEventListener('mouseleave', () => {
  hero.style.backgroundPosition = `${baseX}% ${baseY}%`;
});

// Contact form animation
const submitBtn = document.getElementById("submitBtn");
const submitText = document.getElementById("submitText");
const loadingSpinner = document.getElementById("loadingSpinner");
const successCheck = document.getElementById("successCheck");

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = this;

  submitBtn.classList.remove("btn-success");
  submitText.classList.add("d-none");
  loadingSpinner.classList.remove("d-none");

  try {
    const res = await fetch("/contact/submit/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
      })
    });

    const result = await res.json();
    loadingSpinner.classList.add("d-none");

    if (result.status === "success") {
      successCheck.classList.remove("d-none");
      submitBtn.classList.add("btn-success");
      form.reset();
    } else {
      submitText.classList.remove("d-none");
      alert(result.message || "Something went wrong.");
    }

    setTimeout(() => {
      successCheck.classList.add("d-none");
      submitText.classList.remove("d-none");
      submitBtn.classList.remove("btn-success");
    }, 3000);
  } catch (err) {
    loadingSpinner.classList.add("d-none");
    submitText.classList.remove("d-none");
  }
});