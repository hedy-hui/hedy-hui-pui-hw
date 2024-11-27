<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling and toggler collapse for navigation links
    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }

        // Close navbar if toggler is open
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
          navbarToggler.click();
        }
      });
    });

    // Bootstrap tooltip initialization (for hover interactions)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Hover interaction for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
        this.style.transform = "scale(1.03)";
      });
      card.addEventListener('mouseleave', function () {
        this.style.boxShadow = "none";
        this.style.transform = "scale(1)";
      });
    });
  });
</script>
