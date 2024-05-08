const burguerMenu = document.querySelector('.burguer-menu');
const mobileDropMenu = document.querySelector('.mobile-menu');
const headInMenu = document.querySelector('.BuscarInmueble');
const dropHeadInMenu = document.querySelector('.drop-menu-desk');
const cdIcon = document.getElementById('contactDropIcon');
// const carousel = document.getElementById('carouselExample');


function toggleMenu(event) {
  if (event.target.className === 'burguer-menu') {
    mobileDropMenu.classList.toggle('inactive')
  } else {
    dropHeadInMenu.classList.toggle('inactive')
  }
};

// full screen function

function openFullscreen( openCarousel ) {
  openCarousel = carousel;
  if (openCarousel.requestFullscreen) {
    openCarousel.requestFullscreen();
  } else if (openCarousel.webkitRequestFullscreen) { /* Safari */
    openCarousel.webkitRequestFullscreen();
  } else if (openCarousel.msRequestFullscreen) { /* IE11 */
    openCarousel.msRequestFullscreen();
  }
}

// Drop contact

function showCD() {
  contactDrop.classList.toggle('pop')
}



burguerMenu.addEventListener('click', toggleMenu)
headInMenu.addEventListener('click', toggleMenu)
