document.querySelectorAll('.hover-effect').forEach(image => {
    image.addEventListener('mouseenter', () => {
      image.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
  
    image.addEventListener('mouseleave', () => {
      image.style.boxShadow = 'none';
    });
  });  