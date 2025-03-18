window.onload = function() {
    var iframe = document.getElementById('sketchfab-model');
    var client = new Sketchfab(iframe);

    // Inicializa la API de Sketchfab
    client.init('437565ba5304406f96a58c32eb60fb15', {
        success: function(api) {
            api.start(); // Inicia el modelo automáticamente

            var rotationSpeed = 0.05; // Velocidad de rotación
            var currentRotation = 0;

            // Función para rotar el modelo
            function rotateModel() {
                // Calcula la nueva orientación
                currentRotation += rotationSpeed;

                // Usamos api.setCameraLookAt para establecer la orientación de la cámara
                api.setCamera({
                    position: [0, 0, 5],  // Posición de la cámara (alejada del modelo)
                    lookAt: [0, 0, 0],    // La cámara siempre mira al centro del modelo
                    up: [0, 1, 0],        // Dirección hacia arriba de la cámara
                    rotation: [currentRotation, 0, 0] // Rotación alrededor del eje X
                });

                // Continuar la rotación
                requestAnimationFrame(rotateModel);
            }

            rotateModel(); // Inicia la rotación
        },
        error: function() {
            console.log('Error al cargar el modelo');
        }
    });
};
