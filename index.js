  <script>
    document.addEventListener('DOMContentLoaded', function() {
          const currentPage = window.location.pathname.split('/').pop();
          const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
              link.classList.add('active');
            }
          });
          const skillB
