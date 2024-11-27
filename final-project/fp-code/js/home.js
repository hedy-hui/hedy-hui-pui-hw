<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
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
      });
    });

    // Bootstrap tooltip initialization (for hover interactions)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
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

    // Animate hero text
    const heroText = document.querySelector('.hero-text h1');
    heroText.classList.add('animate__animated', 'animate__fadeInDown');
  });
</script>