  <script>
        document.addEventListener('DOMContentLoaded', function() {
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
            
            const carousel = document.getElementById('certificateCarousel');
            if (carousel) {
                const bsCarousel = new bootstrap.Carousel(carousel, {
                    interval: false,
                    keyboard: true,
                    pause: 'hover',
                    wrap: true
                });
                
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'ArrowLeft') {
                        bsCarousel.prev();
                    } else if (e.key === 'ArrowRight') {
                        bsCarousel.next();
                    }
                });
                
                const totalSlides = document.querySelectorAll('.carousel-item').length;
                let currentSlide = 1;
                
                carousel.addEventListener('slid.bs.carousel', function(event) {
                    currentSlide = parseInt(event.to) + 1;
                });
            }
        });
    </script>
