  // Obtén todos los elementos con la clase 'carousel-slide'
  const carousels = document.querySelectorAll('.carousel');

  // Itera sobre cada elemento 'carousel-slide'
  carousels.forEach((carousel) => {
    // Obtiene todos los elementos con la clase 'carousel-item'
    const carouselItems = carousel.querySelectorAll('.carousel-item');

    // Configuración inicial
    let counter = 0;

    // Función para mostrar la imagen actual
    function showSlide(index) {
      // Oculta todas las imágenes
      carouselItems.forEach((item) => {
        item.style.display = 'none';
      });

      // Muestra la imagen actual
      carouselItems[index].style.display = 'flex';
    }

    // Función para cambiar a la siguiente imagen
    function nextSlide() {
      counter = (counter + 1) % carouselItems.length;
      showSlide(counter);
    }

    // Función para cambiar a la imagen anterior
    function prevSlide() {
      counter = (counter - 1 + carouselItems.length) % carouselItems.length;
      showSlide(counter);
    }

    // Mostrar la primera imagen al cargar
    showSlide(counter);

    // Cambiar automáticamente de imagen cada 3 segundos
    setInterval(nextSlide, 5000);

    // Agrega eventos click a los botones de control
    const prevButton = carousel.querySelector('.carousel-control-prev');
    const nextButton = carousel.querySelector('.carousel-control-next');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  });
