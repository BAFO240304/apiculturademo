function openLightbox(element) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');

            // Get the image source from the clicked carousel item
            const imgSrc = element.querySelector('img').src;

            // Set the lightbox image source
            lightboxImg.src = imgSrc;

            // Show the lightbox
            lightbox.style.display = 'flex';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.style.display = 'none';
        }

        // Close lightbox when escape key is pressed
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeLightbox();
            }
        });