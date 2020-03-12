
const menuIcon = document.querySelector('.menu-icon');

const menuOverlay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  menuOverlay.classList.toggle('menu-open');

});
