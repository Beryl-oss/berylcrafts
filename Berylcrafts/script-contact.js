// Sélection des éléments
const hamburger = document.getElementById("hamburger");
const header = document.getElementById("navbar");
const crossImg = document.getElementById("cross-img");
const form = document.getElementById('contact-form');
const messageBox = document.getElementById('form-message');
const faqItems = document.querySelectorAll(".faq-item");
const scrollTopBtn = document.createElement("button");

// ——————————————— MENU MOBILE ———————————————
window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768) {
    hamburger.style.display = "block";
    crossImg.style.display = "none";
  }
});

function handleNavbarHamburger() {
  header.classList.remove("hide-navbar");
  header.classList.add("show-navbar");
  header.style.display = "flex";
  hamburger.style.display = "none";
  crossImg.style.display = "block";
}

function handleNavbarCrossImg() {
  header.classList.remove("show-navbar");
  header.classList.add("hide-navbar");
  setTimeout(() => {
    header.style.display = "none";
    header.classList.remove("hide-navbar");
  }, 400);
  hamburger.style.display = "block";
  crossImg.style.display = "none";
}

// ——————————————— SCROLL TO FORM ———————————————
function handleContact() {
  form.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    form.querySelector("input").focus();
  }, 600);
}

// ——————————————— FORM VALIDATION avec confirmation animée ———————————————
form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!form.name.value.trim() || !form.email.value.trim() || !form.message.value.trim()) {
    messageBox.textContent = "Merci de remplir tous les champs.";
    messageBox.style.color = "#ff6666";
    messageBox.style.opacity = "1";
    return;
  }

  messageBox.textContent = "✅ Merci pour votre message, je vous recontacte rapidement !";
  messageBox.style.color = "#b0f7c0";
  messageBox.style.opacity = "1";
  form.reset();

  setTimeout(() => {
    messageBox.style.opacity = "0";
  }, 5000);
});

// ——————————————— MACHINE À ÉCRIRE POUR LE TITRE ———————————————
function typeWriter(element, text, delay = 80) {
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i > text.length - 1) clearInterval(interval);
  }, delay);
}

window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.contact-text h1');
  const originalText = title.textContent;
  title.textContent = "";
  typeWriter(title, originalText);
});

// ——————————————— RIPPLE SUR LES QUESTIONS FAQ ———————————————
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", function(e) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// ——————————————— OUVERTURE / FERMETURE FAQ SIMPLE ———————————————
faqItems.forEach(item => {
  const questionBtn = item.querySelector(".faq-question");
  questionBtn.addEventListener("click", () => {
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

// ——————————————— SCROLL-TO-TOP BUTTON ———————————————
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.title = "Retour en haut";
scrollTopBtn.textContent = "↑";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ——————————————— FADE-IN AU SCROLL DES SECTIONS ———————————————
const elementsToAnimate = document.querySelectorAll('.contact-section, .faq-section, .site-footer');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

elementsToAnimate.forEach(el => observer.observe(el));
