document.addEventListener("DOMContentLoaded", function() {
    // Lista de las publicaciones incrustadas en tu página
    const instagramEmbeds = document.querySelectorAll('.instagram-media'); // Selecciona todas las publicaciones incrustadas

    let currentIndex = 0; // Índice del contenido que se va a mostrar

    // Función para mover al siguiente bloque de Instagram
    function moveToNextPost() {
        // Ocultar la publicación actual
        instagramEmbeds[currentIndex].style.display = 'none';

        // Incrementar el índice
        currentIndex++;

        // Si llegamos al final, reiniciar el índice
        if (currentIndex >= instagramEmbeds.length) {
            currentIndex = 0;
        }

        // Mostrar la siguiente publicación
        instagramEmbeds[currentIndex].style.display = 'block';
    }

    // Iniciar el carrusel.js que se mueve cada 5 segundos (5000ms)
    setInterval(moveToNextPost, 5000);

    // Mostrar el primer post inicialmente
    instagramEmbeds[currentIndex].style.display = 'block';
});
