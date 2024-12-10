document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links, except when going to another page
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
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

  // Make navigation sticky
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 0) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.width = '100%';
        navbar.style.zIndex = '1000';
        navbar.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.position = 'static';
        navbar.style.boxShadow = 'none';
      }
    }
  });
});