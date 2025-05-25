document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    let currentIndex = 0;
    const totalItems = items.length;
    let autoplayInterval;
    let isTransitioning = false;

    // Función para actualizar el carrusel
    const updateCarousel = () => {
        if (isTransitioning) return;
        isTransitioning = true;
        
        // Actualizar todas las imágenes
        items.forEach((item, index) => {
            item.classList.remove('active', 'prev', 'next');
            
            // Calcular la posición relativa al item actual
            const position = (index - currentIndex + totalItems) % totalItems;
            
            if (position === 0) {
                item.classList.add('active');
            } else if (position === 1 || position === (totalItems - 1)) {
                item.classList.add(position === 1 ? 'next' : 'prev');
            }
        });
        
        // Restablecer isTransitioning después de la transición
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    };

    // Función para ir al siguiente slide
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    };

    // Función para ir al slide anterior
    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    };

    // Iniciar autoplay
    const startAutoplay = () => {
        stopAutoplay();
        autoplayInterval = setInterval(nextSlide, 5000);
    };

    // Detener autoplay
    const stopAutoplay = () => {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    };

    // Event listeners para los botones
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (!isTransitioning) {
            prevSlide();
            startAutoplay(); // Reiniciar el autoplay después de la interacción manual
        }
    });

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (!isTransitioning) {
            nextSlide();
            startAutoplay(); // Reiniciar el autoplay después de la interacción manual
        }
    });

    // Event listeners para pausar el autoplay cuando el usuario interactúa con el carrusel
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Inicializar el carrusel
    updateCarousel();
    startAutoplay();

    // Event listener para las teclas de flecha
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            startAutoplay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            startAutoplay();
        }
    });
})

