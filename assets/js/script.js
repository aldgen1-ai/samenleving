// script.js - vereenvoudigde versie
// Behoudt alleen de "back to top"-knopfunctionaliteit
// Auteur: aangepast door ChatGPT voor Cortaen.nl

document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');

  if (!backToTop) return; // Stop als er geen knop is

  // Toon of verberg de knop bij scrollen
  const toggleBackToTop = () => {
    if (window.scrollY > 100) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  };

  window.addEventListener('scroll', toggleBackToTop);
  window.addEventListener('load', toggleBackToTop);

  // Scroll soepel naar boven bij klikken
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
