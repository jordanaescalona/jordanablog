// Selecciona botón y nav
const toggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

// Click botón hamburguesa
toggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

// Opcional: cerrar menú al hacer click en un enlace
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
  });
});