// Carrusel de imágenes
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const numImages = images.length;
let currentImage = 0;
const carouselDots = document.querySelector('.carousel-dots');
let dotButtons = [];

// Función para crear los puntitos de navegación
function createDotButtons() {
    for (let i = 0; i < numImages; i++) {
        const dotButton = document.createElement('button');
        dotButton.classList.add('dot-button');
        dotButton.addEventListener('click', () => {
            currentImage = i;
            moveCarousel();
        });
        dotButtons.push(dotButton);
        carouselDots.appendChild(dotButton);
    }
}

// Modificar la función moveCarousel() para activar el puntito correspondiente
function moveCarousel() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 800) {
        carousel.style.transform = `translateX(-${currentImage * 100}%)`;
    } else {
        carousel.style.transform = `translateX(0)`;
    }

    // Activar el puntito correspondiente
    dotButtons.forEach((button, index) => {
        button.classList.toggle('active', index === currentImage);
    });
}

// Event listener para redimensionar el carrusel cuando cambie el tamaño de la ventana
window.addEventListener('resize', moveCarousel);

// Crear los puntitos de navegación
createDotButtons();

// Avanzar a la siguiente imagen
function nextImage() {
    currentImage = (currentImage + 1) % numImages;
    moveCarousel();
}

// Retroceder a la imagen anterior
function prevImage() {
    currentImage = (currentImage - 1 + numImages) % numImages;
    moveCarousel();
}

// Event listeners para los botones de navegación
document.querySelector('.next-button').addEventListener('click', nextImage);
document.querySelector('.prev-button').addEventListener('click', prevImage);
