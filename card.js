// Sample array containing information for a building
  const buildingsData = [
  {
    id: 1001,
    type: 'Departamento',
    modo: 'venta',
    price: '$4,900,000 MXN',
    status: 'Disponible',
    address: 'Félix Cuevas, Ciudad De México',
    details: ['94mT','85mC','2 Hab','2 WC','2 Parkings',''],
    description: '', // Add the description if available
    extras: ['Cocina amueblada', 'Terraza', 'Seguridad'], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21203&authkey=%21APLYz_pVMCJ3qE8&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21200&authkey=%21APqCzOr0nmAbesU&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21201&authkey=%21AN75v6pKluyjEFw&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21205&authkey=%21ALc_QugOU4kSmf4&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21206&authkey=%21AMMhV-xxwkHCG5o&width=660'
      // Add image URLs if available
    ],
    fotosLink: '',
  },
  {
    id: 1002,
    type: 'Departamento',
    modo: 'venta',
    price: '$9,700,000 MXN',
    status: 'Disponible',
    address: 'Bosque Real, HUIXQUILUCAN',
    details: ['246mT','200mC','3 Hab','3 1/2 WC','2 Parkings',
    ],
    description: '', // Add the description if available
    extras: [], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21186&authkey=%21AEyz372WYCEgFwE&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21185&authkey=%21AEINytce6H0eP1I&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21181&authkey=%21ABd43peFfnvj2vQ&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21178&authkey=%21AHSzUOG3WNoLO-A&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21184&authkey=%21ALmXBEd2CbewrUQ&width=660'
      // Add image URLs if available
    ],
  },
  {
    id: 1003,
    type: 'Departamento',
    modo: 'venta',
    price: '$2,900,000 MXN',
    status: 'Disponible',
    address: 'Obrera, Ciudad De México',
    details: [
      '80mC','2 Hab','2 WC','1 Parkings',
    ],
    description: '', // Add the description if available
    extras: [], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21212&authkey=%21AIinnzHn0XAdgKU&width=680&height=464',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21214&authkey=%21AK4fo8mD35stN8c&width=680&height=464',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21213&authkey=%21AJozQmWfjmd5UEw&width=680&height=464',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21215&authkey=%21ACHbxuBVuFYR0JQ&width=680&height=464',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21216&authkey=%21ADFckUFyUMJRnDI&width=680&height=464',
      ,
      // Add image URLs if available
    
    ],
  },
  {
    id: 1004,
    type: 'Casa',
    modo: 'venta',
    price: '$2,500,000 MXN',
    status: 'Disponible',
    address: 'Ciudad Neza, Estado De México',
    details: [
      '3 Hab','2 1/2 WC','2 Parkings',
    ],
    description: '', // Add the description if available
    extras: [], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21188&authkey=%21AD9Vw69q8_2zPPU&width=680&height=464',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21189&authkey=%21ACM3tJV6zzRU-9c&width=680&height=464',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21191&authkey=%21AFmJcCBjqGKf3yw&width=680&height=464',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21195&authkey=%21AGRr2VwB4-HnHUE&width=680&height=464',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21197&authkey=%21AGb_IOJAJXFS7zM&width=680&height=464',
      // Add image URLs if available
    ],
  },
  {
    id: 1006,
    type: 'Casa',
    modo: 'venta',
    price: '$2,100,000 MXN',
    status: 'Disponible',
    address: 'Ajusco, Tlalpan',
    details: [
      '239mT','150mC','3 Hab','2 1/2 WC','3 Parkings',
    ],
    description: '', // Add the description if available
    extras: [], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21399&authkey=%21AHL0gi_ucAopZu8&width=1200&height=900',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21397&authkey=%21AK6LWUAIOxumJpM&width=1200&height=900',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21400&authkey=%21AGR7v8MT3lUzyhM&width=900&height=1200',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21406&authkey=%21AGvQTmxckKeVEGk&width=675&height=1200',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21403&authkey=%21AEWmvyxEYtTit54&width=1200&height=900',
      // Add image URLs if available
    ],
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
    highlights.classList.add('details','Highlights')
    highlights.append(...details)
    // description
    description.classList.add('description')
    description.textContent = `${build.description}`
    // tags
    tagsContainer.classList.add('tags','extras')
    tagsContainer.append(...tags)
    
    contentContainer.classList.add('card-content')
    contentContainer.append(contentHeader,statusContainer,address,highlights,description,tagsContainer)
    
    //Card container
    card.classList.add('card');
    card.append(carouselContainer,contentContainer);

    //reenderizado
    const cards = [];
    cards.push(card);

    app.append(...cards);

  });  
};

renderCards(buildingsData);