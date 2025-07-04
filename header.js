let lastScrollTop = 0;
const header = document.getElementById("header");

// Appliquer une transition fluide une seule fois au chargement
header.style.transition = "top 0.3s ease-in-out";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll vers le bas -> cacher la navbar
    header.style.top = "-100px"; // ou ajuster selon la hauteur de ta navbar
  } else {
    // Scroll vers le haut -> afficher la navbar
    header.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // éviter valeur négative
});
