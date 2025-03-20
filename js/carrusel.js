 const carouselImages = document.querySelector('.carousel-images');
        const images = document.querySelectorAll('.carousel-images img');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentIndex = 0;

        // Función para cambiar la imagen en el carrusel
        function updateCarousel() {
            carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Función para ir a la siguiente imagen
        nextButton.addEventListener('click', () => {
            if (currentIndex < images.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Vuelve al principio
            }
            updateCarousel();
        });

        // Función para ir a la imagen anterior
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = images.length - 1; // Va al final
            }
            updateCarousel();
        });

        // Configuración del autoscroll cada 5 segundos
        setInterval(() => {
            nextButton.click();
        }, 2000); // Cambia de imagen cada 5 segundos