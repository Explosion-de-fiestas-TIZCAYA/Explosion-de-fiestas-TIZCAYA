document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.producto-slider');
    
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-img');
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].style.opacity = '0';
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.opacity = '1';
        }

        function showPreviousImage() {
            images[currentIndex].style.opacity = '0';
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].style.opacity = '1';
        }

        // Manejo de eventos táctiles
        let touchStartX = 0;
        let touchEndX = 0;

        slider.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        slider.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                showNextImage();
            } else if (touchEndX - touchStartX > 50) {
                showPreviousImage();
            }
        });

        // Manejo de eventos de teclado
        slider.setAttribute('tabindex', '0');
        slider.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPreviousImage();
            }
        });
    });
});