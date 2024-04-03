// Sample array containing information for a building
  const buildingsData = [
  {
    id: 1001,
    type: 'Departamento',
    modo: 'venta',
    price: '$4,900,000 MXN',
    status: 'Disponible',
    address: 'Félix Cuevas, Ciudad De México',
    details: ['94m2','85mC','2 Hab','2 WC','2 Parkings',''],
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
    fotosLink: 'https://drive.google.com/drive/folders/15dS3fMs9T4eAV_2FTtd0mBv47zqS6vx3?usp=sharing',
  },
  {
    id: 1002,
    type: 'Departamento',
    modo: 'venta',
    price: '$9,700,000 MXN',
    status: 'Disponible',
    address: 'Bosque Real, HUIXQUILUCAN',
    details: ['246m2','200mC','3 Hab','3 1/2 WC','2 Parkings',
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
    fotosLink: 'https://drive.google.com/drive/folders/1fPTbyJzxQl-R8XxWLXqLWWnszzLV-_B3?usp=sharing',
  },
  {
    id: 1003,
    type: 'Departamento',
    modo: 'venta',
    price: '$2,900,000 MXN',
    status: 'Disponible',
    address: 'Obrera, Ciudad De México',
    details: [
      '80m2','2 Hab','2 WC','1 Parkings',
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
    fotosLink: 'https://drive.google.com/drive/folders/18oBDtMnZ88L9H7N7Abg3Q5cJ4yV98COW?usp=drive_link',
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
    fotosLink: 'https://drive.google.com/drive/folders/1JKyZsyhuM_m7L9Qe7f0YwTDqa27lCEIZ?usp=drive_link',
  },
  {
    id: 1006,
    type: 'Casa',
    modo: 'venta',
    price: '$2,100,000 MXN',
    status: 'Disponible',
    address: 'Ajusco, Tlalpan',
    details: [
      '239m2','150mC','3 Hab','2 1/2 WC','3 Parkings',
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
    fotosLink: 'https://drive.google.com/drive/folders/11V7ermj7Vj0c6o2kPQeVX34bSlyVH1HG?usp=drive_link',
  },
  {
    id: 1007,
    type: 'Casa',
    modo: 'Venta',
    price: '$ 30,000,000 MXN',
    status: 'Disponible',
    address: 'Jardines del Pedregal',
    details: [
      '1350m2','4 Hab','5 WC','10 Parkings',
    ],
    description: '', // Add the description if available
    extras: ['6 Oficinas' , 'Area de Lavado', 'Area de servicio'], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21303&authkey=%21AGJzZ4kuyh1I2OE&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21304&authkey=%21ACcst4OPRSEFgQw&width=1200&height=675',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21306&authkey=%21AIt_Q5vXkqv1LjI&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21315&authkey=%21ABXkGueQE1LXqn8&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21329&authkey=%21AGEMPLXz-z5zoa0&width=660',
      // Add image URLs if available
    ],
    fotosLink: 'https://drive.google.com/drive/folders/1Zb8AYno93Bi-uzXIWlqo3-YFtjQRwy_Z?usp=drive_link',
  },
  {
    id: 1008,
    type: 'Casa',
    modo: 'Venta',
    price: '$ 33,000,000 MXN',
    status: 'Disponible',
    address: 'Jardindes del pedregal',
    details: [
      '1383m2','6 Hab','7 1/2 WC','10 Parkings',
    ],
    description: '', // Add the description if available
    extras: ['Elevador', 'Estudio'], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21469&authkey=%21ABtysoV5sgG_NRw&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21472&authkey=%21AKHg3sHqv2vJ9pw&width=1200&height=675',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21461&authkey=%21AAyuPqJhgackSOQ&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21489&authkey=%21AB9RKxM1sntMiBQ&width=1200&height=675',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21483&authkey=%21AGkzIjqsxdU2jLw&width=1200&height=675',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21475&authkey=%21AJToKzoLEKbzwZQ&width=660',
      // Add image URLs if available
    ],
    fotosLink: 'https://drive.google.com/drive/folders/1VdBZDIxz2gV-HI2n5gnyN0h3WXU2c4qK?usp=drive_link',
  },
  {
    id: 1009,
    type: 'Departamento',
    modo: 'Venta',
    price: '$ 1,350,000 MXN',
    status: 'Disponible',
    address: 'Calzada de Tlalpan',
    details: [
      '42m2','1 Hab','1 WC',
    ],
    description: 'Recamara amplia, planta baja.', // Add the description if available
    extras: [], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21521&authkey=%21AFHXD3a7QVX4f9c&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21525&authkey=%21ANDrKSrbc7fRva4&width=660',
      // Add image URLs if available
    ],
    fotosLink: 'https://drive.google.com/drive/folders/1dgekBvDTVnwQegXrife44oME5LbnMWhr?usp=drive_link',
  },
  {
    id: 1010,
    type: 'Departamento',
    modo: 'Venta',
    price: '$ 1,100,000 MXN',
    status: 'Disponible',
    address: 'Gustavo A. Madero, CDMX',
    details: [
      '59.8m2','2 Hab','1 WC',' Parkings',
    ],
    description: '', // Add the description if available
    extras: ['Cuarto de lavado'], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21533&authkey=%21AFDHOvwKuYF3nVY&height=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21531&authkey=%21ADayiAdITVHFSI4&height=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21540&authkey=%21AAbcWuHn38sugL0&width=1200&height=1599',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21539&authkey=%21AGGtbInpUrR3ZB8&width=1200&height=1599',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21550&authkey=%21ANWfXmUMdtF2zR0&height=660',
      // Add image URLs if available
    ],
    fotosLink: 'https://drive.google.com/drive/folders/1njlo4OzJftvBG9tSV9BSH1TS0UkD0f9_?usp=drive_link',
  },
  {
    id: 1012,
    type: 'Departamento',
    modo: 'Venta',
    price: '$ 1,296,000 MXN',
    status: 'Disponible',
    address: 'Colonia La Planta',
    details: [
      '83m2','2 Hab','1 WC',' Parkings',
    ],
    description: '', // Add the description if available
    extras: [], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21584&authkey=%21AGvYFtCYGCyMjnQ&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21578&authkey=%21AMqkv-5it50u_Vc&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21579&authkey=%21AG66s94L22vbVWE&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21570&authkey=%21AG1m8pQ8XnOpBZk&height=256',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21582&authkey=%21AKzN0EoE7ajCx_4&height=256',
      // Add image URLs if available
    ],
    fotosLink: 'https://drive.google.com/drive/folders/1n1rAAiAxAqWfwqL5nN0TFOo9rk24pis6?usp=drive_link',
  },
  {
    id: 1013,
    type: 'Departamento',
    modo: 'Venta',
    price: '$ 990,000 MXN',
    status: 'Disponible',
    address: 'Iztapalapa',
    details: [
      '62m2','2 Hab','1 WC','1 Parkings',
    ],
    description: '', // Add the description if available
    extras: [], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21591&authkey=%21ALpdKErSGcN8s3E&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21592&authkey=%21AMAISQ_bZ99PTfA&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21600&authkey=%21ANx-3ezCugsD5kk&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21606&authkey=%21AIiGg3AeU0tm118&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21598&authkey=%21AGepWvyXx3INLq8&height=660',
      // Add image URLs if available
    ],
    fotosLink: 'https://drive.google.com/drive/folders/11x2cB_8gCn4K0PVFXa-iMUtk1A15EcAR?usp=drive_link',
  },
  {
    id: 1014,
    type: 'Departamento',
    modo: 'Venta',
    price: '$ 1,500,000 MXN',
    status: 'Disponible',
    address: 'Cuauhtémoc, CDMX',
    details: [
      '52m2','1 Hab','1 WC',
    ],
    description: 'Posibilidad de construir 1 habitacion extra. 5° Piso', // Add the description if available
    extras: [], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21616&authkey=%21AD7rRA4QD62NAuA&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21615&authkey=%21AOFHZm6BgfgJYeQ&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21617&authkey=%21AE1e9tfJJ4TTIFA&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21619&authkey=%21AF2A08xWuxZr1Z8&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21624&authkey=%21ACTuqYxcfOW4E6U&width=660',
      // Add image URLs if available
    ],
    fotosLink: 'https://drive.google.com/drive/folders/1jO3FKwaGHA8fNrp1hmJaxQhnKZVNup3x?usp=drive_link',
  },
  {
    id: 1015,
    type: 'Departamento',
    modo: 'Venta',
    price: '$ 1,400,000 MXN',
    status: 'Disponible',
    address: 'Venustiano Carranza',
    details: [
      '50m2','2 Hab','1 WC',
    ],
    description: '', // Add the description if available
    extras: [], // Add more extras as needed
    images: [
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21635&authkey=%21AJOc2nVt8-4Meac&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21635&authkey=%21AJOc2nVt8-4Meac&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21639&authkey=%21AAreiujNEdBCxLo&width=1200&height=900',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21636&authkey=%21AIq4Alv1Ahk7_3M&width=660',
      'https://onedrive.live.com/embed?resid=C09768F8905DB1DB%21632&authkey=%21AH-Aa6c3BQBKzgo&height=660',
      // Add image URLs if available
    ],
    fotosLink: 'https://drive.google.com/drive/folders/1c6XbSHIHDdcFJrbe-0XZAEQBxvSd0Iji?usp=drive_link',
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