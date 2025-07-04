// ========== NAVBAR MOBILE (hamburger / cross) ==========
const hamburger = document.getElementById("hamburger");
const header = document.getElementById("navbar");
const crossImg = document.getElementById("cross-img");

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


// ========== SLIDER TEMOIGNAGES (manuel uniquement) ==========
const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.slider-button.prev');
  const nextBtn = document.querySelector('.slider-button.next');
  const dots = document.querySelectorAll('.dot');

  let currentSlide = 0;

  function updateSlide() {
    // Déplace le slider
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Met à jour uniquement le point actif
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
  });

  // Initialisation du slider
  updateSlide();