const burguerMenu = document.querySelector('.burguer-menu');
const mobileDropMenu = document.querySelector('.mobile-menu');
const headInMenu = document.querySelector('.BuscarInmueble');
const dropHeadInMenu = document.querySelector('.drop-menu-desk');

burguerMenu.addEventListener('click', toggleMenu)
headInMenu.addEventListener('click', toggleMenu)

function toggleMenu(event) {
  if (event.target.className === 'burguer-menu') {
    mobileDropMenu.classList.toggle('inactive')
  } else {
    dropHeadInMenu.classList.toggle('inactive')
  }
};