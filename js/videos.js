// Lista de videos y su tiempo de duración en segundos
const videoList = [
    { id: "agvV_8glYz4", time: 10 },  // ID del primer video, duración: 10 segundos
    { id: "NNxHa6HgCjY", time: 10 },  // ID del segundo video, duración: 10 segundos
    { id: "agvV_8glYz4", time: 42 }   // ID del tercer video, duración: 42 segundos
];

let currentVideoIndex = 0; // Índice del video actual
let currentTime = 0; // Tiempo actual de reproducción
let player; // El reproductor de YouTube
let videoLoaded = false; // Indicador para evitar que se cargue el video más de una vez

// Crear el reproductor de YouTube cuando la API esté lista
function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoPlayer', {
        height: '315',
        width: '560',
        videoId: videoList[currentVideoIndex].id,
        events: {
            // Cuando el video empieza, comenzamos a contar
            'onStateChange': onPlayerStateChange
        }
    });
}

// Cuando el video comienza, iniciamos el temporizador
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING && !videoLoaded) {
        // Cuando el video empieza a reproducirse, iniciamos el temporizador
        videoLoaded = true;  // Establecemos que el video está cargado
        startTimer(videoList[currentVideoIndex].time); // Comienza el temporizador
    }
}

// Función para iniciar el temporizador y cambiar el video
function startTimer(seconds) {
    currentTime = 0; // Reiniciamos el tiempo

    // Intervalo que se ejecuta cada segundo
    let timer = setInterval(function () {
        currentTime++;

        // Cuando el tiempo alcanza la duración definida
        if (currentTime >= seconds) {
            clearInterval(timer); // Detenemos el temporizador
            loadNextVideo(); // Cargar el siguiente video
        }
    }, 5000); // Intervalo de 1 segundo
}

// Función para cargar el siguiente video
function loadNextVideo() {
    currentVideoIndex++; // Aumentamos el índice del video actual

    // Si llegamos al final de la lista de videos, reiniciamos
    if (currentVideoIndex >= videoList.length) {
        currentVideoIndex = 0;
    }

    // Cambiar el video usando la API de YouTube
    player.loadVideoById(videoList[currentVideoIndex].id);

    // Reiniciar el indicador para que el video no se cargue nuevamente antes de tiempo
    videoLoaded = false;

    // Iniciar el temporizador para el siguiente video
    startTimer(videoList[currentVideoIndex].time);
}

// Esta línea carga la API de YouTube
function loadYouTubeAPI() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Cargar la API al iniciar la página
loadYouTubeAPI();
