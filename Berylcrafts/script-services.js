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

function handleContact() {
    const phone = "50935832268";
    const message = "Bonjour, je suis intéressé(e) par vos services. Pourrions-nous discuter ?";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const section = document.querySelector('.why-choose-me');
  if (section) {
    section.classList.add('hidden');
    observer.observe(section);
  }

  const listItems = document.querySelectorAll('.advantages-list li');
  listItems.forEach(item => {
    item.classList.add('hidden');
    observer.observe(item);
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