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
    const progresses = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progress = entry.target;
          const targetPercent = parseInt(progress.getAttribute("data-percent"));

          // ⏱ Durée en fonction du pourcentage (par ex. 25% = 0.5s, 80% = 1.6s)
          const duration = targetPercent * 0.02; // 0.02s par % (donc 100% = 2s)
          const durationMs = duration * 1000;

          // Applique la durée à l'animation CSS
          progress.style.setProperty('--target-width', targetPercent + '%');
          progress.style.animation = `bounceProgress ${duration}s ease-out forwards`;

          // 🔢 Animation du compteur numérique synchronisée avec la durée
          let count = 0;
          const intervalTime = durationMs / targetPercent;
          const interval = setInterval(() => {
            if (count >= targetPercent) {
              clearInterval(interval);
              return;
            }
            count++;
            progress.setAttribute("data-percent", count + "%");
          }, intervalTime);

          obs.unobserve(progress);
        }
      });
    }, {
      threshold: 0.5
    });

    progresses.forEach(progress => {
      observer.observe(progress);
    });
  });

  //GOOGLE ANALYSTICS
  window.dataLayer =  window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');

let lastScrollTop = 0;
let ticking = 0;
const head = document.getElementById("header");

  window.addEventListener('scroll', () => {
      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        head.style.top = "-60px";
        } else {
          head.style.top = "0";
        }

        lastScrollTop = currentScroll;
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
