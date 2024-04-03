// Sample array containing information for a building
const buildingsData = [
  {
    id: 1011,
    type: 'Habitación',
    modo: 'Renta',
    price: '$ 4,500 MXN',
    status: 'Disponible',
    address: 'Colonia Guerrero',
    details: [
      '12mT','Baño Completo','1 Parking',
    ],
    description: '', // Add the description if available
    extras: [], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21555&authkey=%21AINVCtBKQph5zk0&width=219&height=390',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21561&authkey=%21ALTHCE2rzJUAMoM&width=288&height=390',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21565&authkey=%21ADH6ayVDNpmle-A&width=520&height=390',
      // Add image URLs if available
    ],
    fotosLink: 'https://drive.google.com/drive/folders/1apmBOTpyF57a1S6LZCQT78FQco2A7lUa?usp=drive_link',
  },
  // Add more building objects if needed
]

const app = document.getElementById('cardsContainer');


function createFullscreenButton() {
  const fullscreenButton = document.createElement('button');
  fullscreenButton.innerText = 'Fullscreen';
  fullscreenButton.addEventListener('click', () => this.openFullscreen());
  this.container.appendChild(fullscreenButton);
}

function openFullscreen() {
  if (this.carousel.requestFullscreen) {
    this.carousel.requestFullscreen();
  } else if (this.carousel.webkitRequestFullscreen) { /* Safari */
    this.carousel.webkitRequestFullscreen();
  } else if (this.carousel.msRequestFullscreen) { /* IE11 */
    this.carousel.msRequestFullscreen();
  }
}

const renderCards = (buildings) => {
  buildings.forEach( build => {

  
    const card = document.createElement('div');
        
  // build carousel elements 
    const carouselContainer = document.createElement('section');
    const slider = document.createElement('div');
    const boxImages = document.createElement('div');
    const prevButton = document.createElement('button');
    const prevIcon = document.createElement('span');
    const nextButton = document.createElement('button');
    const nextIcon = document.createElement('span');
    // build information elements
    const contentContainer = document.createElement('div');
    const contentHeader = document.createElement('div');
    const titulo = document.createElement('h3');
    const idIn = document.createElement('span');
    const statusContainer = document.createElement('span');
    const price = document.createElement('p');
    const status = document.createElement('span');
    const address = document.createElement('p');
    const highlights = document.createElement('ul');
    const description = document.createElement('p');
    const tagsContainer = document.createElement('ul');
    const drive = document.createElement('a')

    //array y ciclo para obtener las imagenes
    const images = []
    const details = []
    const tags = []

    build.images.forEach( image => {
      const ImgItemContainer = document.createElement('div');
      const ImgItem = document.createElement('img');
    //clases y anidado de imagenes del carousel
      ImgItemContainer.classList.add('carousel-item');
      ImgItem.alt = 'imagen del inmueble';
      ImgItem.src = image;
      
      ImgItemContainer.append(ImgItem);
      images.push(ImgItemContainer);
    });
    // anidado de details
    build.details.forEach( detail => {
      const itemHigh = document.createElement('li');
      itemHigh.textContent = detail

      details.push(itemHigh);
    })
    build.extras.forEach( extra => {
      const itemTag = document.createElement('li');
      itemTag.textContent = `${extra}`;

      tags.push(itemTag);
    })


  //especificacion de clases y anidado de nodos del carousel
    // Prev button
    prevIcon.classList.add('carousel-control-prev-icon');
    prevIcon.ariaHidden = 'true';

    prevButton.classList.add('carousel-control-prev');
    prevButton.type = 'button';
    prevButton.setAttribute('data-bs-target', '#carouselExample');
    prevButton.setAttribute('data-bs-slide', 'prev');
    prevButton.appendChild(prevIcon);

    // next button
    nextIcon.classList.add('carousel-control-next-icon');
    nextIcon.ariaHidden = 'true';

    nextButton.classList.add('carousel-control-next');
    nextButton.type = 'button';
    nextButton.setAttribute('data-bs-target', '#carouselExample');
    nextButton.setAttribute('data-bs-slide', 'next');
    nextButton.appendChild(nextIcon);
    // images 
    boxImages.classList.add('carousel-inner');
    boxImages.dataset.alt = 'Contenedor Secundario';
    boxImages.append(...images, prevButton, nextButton);
    // Contenedores slider y del carousel
    slider.classList.add('carousel','slide');
    slider.append(boxImages);
    carouselContainer.classList.add('card-carousel-container');
    carouselContainer.append(slider);
    
    // build info
    
    // Headers
    titulo.textContent = `${build.type} en ${build.modo}`;
    idIn.textContent = `ID: ${build.id}`;
    contentHeader.classList.add('card-header');
    contentHeader.append(titulo, idIn);
    // status 
    price.textContent = `${build.price}`;
    price.classList.add('price');
    status.textContent = `${build.status}`;
    statusContainer.classList.add('status');
    statusContainer.append(price,status);
    // addres
    address.textContent = `${build.address}`;
    address.classList.add('address');
    // highlights
    highlights.classList.add('details','Highlights');
    highlights.append(...details);
    // description
    description.classList.add('description');
    description.textContent = `${build.description}`;
    // tags
    tagsContainer.classList.add('tags','extras');
    tagsContainer.append(...tags);
    // drive
    drive.href = build.fotosLink;
    drive.target = 'blank';
    drive.textContent = `Fotos del sitio`;

    contentContainer.classList.add('card-content');
    contentContainer.append(contentHeader,statusContainer,address,highlights,description,tagsContainer,drive);
    
    //Card container
    card.classList.add('card');
    card.append(carouselContainer,contentContainer);

    //reenderizado
    const cards = [];
    cards.push(card);

    // app.append(...cards);

  });  
};

renderCards(buildingsData);