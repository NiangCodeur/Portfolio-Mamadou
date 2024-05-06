/* const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".nav");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};*/

/*
window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  menuIcon.classList.remove("active");
};*/
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".nav");
const navLinks = navbar.querySelectorAll("a"); // Sélectionne tous les liens dans la barre de navigation

// Fonction pour fermer le menu et l'icône
function closeMenu() {
  menuIcon.classList.remove("bx-x"); // Enlève la classe 'bx-x' de l'icône du menu
  navbar.classList.remove("active"); // Enlève la classe 'active' de la navbar
}

// Gestionnaire d'événements pour l'icône du menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Ajoute le gestionnaire d'événements à chaque lien dans la navbar
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
// -- scroll reval --
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .title", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js

let typed = new Typed(".multiple-text", {
  strings: ["Développeur frontend", "Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
