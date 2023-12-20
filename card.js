  // Datos de ejemplo: Array de inmuebles
  const inmuebles = [
    {
      id: 1001,
      images: ['imagen1.jpg', 'imagen2.jpg'],
      title: 'Departamento en venta',
      price: '$4,900,000 MXN',
      status: 'Disponible',
      address: 'Félix Cuevas, Ciudad De México',
      details: ['94mT', '85mC', '2 Hab', '2 WC', '2 Parkings'],
      description: 'Descripción del inmueble.',
      extras: ['Cocina amueblada', 'Terraza', 'Seguridad']
    },
    {
      id: 1002,
      images: ['imagen1.jpg', 'imagen2.jpg'],
      title: 'Departamento en venta',
      price: '$3,900,000 MXN',
      status: 'Disponible',
      address: 'Félix Cuevas, Ciudad De México',
      details: ['94mT', '85mC', '2 Hab', '2 WC', '2 Parkings'],
      description: 'Descripción del inmueble.',
      extras: ['Cocina amueblada', 'Terraza', 'Seguridad']
    },
    {
      id: 1003,
      images: ['imagen1.jpg', 'imagen2.jpg'],
      title: 'Dep en venta',
      price: '$2,900,000 MXN',
      status: 'Disponible',
      address: 'Félix Cuevas, Ciudad De México',
      details: ['94mT', '85mC', '2 Hab', '2 WC', '2 Parkings'],
      description: 'Descripción del inmueble.',
      extras: ['Cocina amueblada', 'Terraza', 'Seguridad']
    },
    {
      id: 1004,
      images: ['imagen1.jpg', 'imagen2.jpg'],
      title: 'Dep en venta',
      price: '$1,900,000 MXN',
      status: 'Disponible',
      address: 'Félix Cuevas, Ciudad De México',
      details: ['94mT', '85mC', '2 Hab', '2 WC', '2 Parkings'],
      description: 'Descripción del inmueble.',
      extras: ['Cocina amueblada', 'Terraza', 'Seguridad']
    },
    // Agrega más inmuebles según sea necesario
  ];

  // Clase para representar un Carousel
  class Carousel {
    constructor(images) {
      this.images = images;
      this.container = document.createElement('div');
      this.container.classList.add('carousel-container');
      this.createCarousel();
      this.createFullscreenButton();
    }

    createCarousel() {
      this.carousel = document.createElement('div');
      this.carousel.id = 'carouselExample';
      this.carousel.classList.add('carousel-slide');

      this.carousel.innerHTML = `
        <div class="carousel-inner" alt="Contenedor de imagenes">
          ${this.images.map((image, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
              <img src="${image}" alt="imagen de inmueble" onclick="openFullscreen(this)">
            </div>
          `).join('')}
          <button class="carousel-control-prev" type="button" data-bs-target="#${this.carousel.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${this.carousel.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
          </button>
        </div>
      `;

      this.container.appendChild(this.carousel);
    }

    createFullscreenButton() {
      const fullscreenButton = document.createElement('button');
      fullscreenButton.innerText = 'Fullscreen';
      fullscreenButton.addEventListener('click', () => this.openFullscreen());
      this.container.appendChild(fullscreenButton);
    }

    openFullscreen() {
      if (this.carousel.requestFullscreen) {
        this.carousel.requestFullscreen();
      } else if (this.carousel.webkitRequestFullscreen) { /* Safari */
        this.carousel.webkitRequestFullscreen();
      } else if (this.carousel.msRequestFullscreen) { /* IE11 */
        this.carousel.msRequestFullscreen();
      }
    }
  }

  // Función para generar la interfaz de la tarjeta de inmueble
  function createInmuebleCard(inmueble) {
    const container = document.getElementById('cards-container');

    // Crea la tarjeta de inmueble y el Carousel asociado
    const card = document.createElement('div');
    card.classList.add('card');
    const carousel = new Carousel(inmueble.images);

    // HTML de la tarjeta de inmueble (puedes modificar esto según tus necesidades)
    card.innerHTML = `
      <div class="card-content">
        <div class="card-header">
          <h3 aria-placeholder="${inmueble.title}"></h3>
          <span>ID: ${inmueble.id}</span>
        </div>
        <div class="status">
          <p class="price">${inmueble.price}</p>
          <span>${inmueble.status}</span>
        </div>
        <p class="address">${inmueble.address}</p>
        <ul class="details Highlights">
          ${inmueble.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
        <p class="description">${inmueble.description}</p>
        <ul class="tags extras">
          ${inmueble.extras.map(extra => `<li>${extra}</li>`).join('')}
        </ul>
      </div>
    `;

    // Agrega la tarjeta y el carousel al contenedor
    container.appendChild(card);
    card.appendChild(carousel.container);
  }

  // Itera sobre el array de inmuebles y crea las tarjetas
  inmuebles.forEach(createInmuebleCard);
