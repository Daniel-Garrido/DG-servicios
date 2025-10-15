// Init AOS & helpers
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
     once: true, 
     duration: 800, 
     easing: 'ease-out-cubic' 
    });
  // Scrollspy refresh
  setTimeout(() => {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar',
      rootMargin: '0px 0px -40%',
    });
  }, 400);

});