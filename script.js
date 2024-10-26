document.addEventListener('DOMContentLoaded', function() {
   const sections = document.querySelectorAll('section');

   const options = {
       root: null,
       threshold: 0.1 // Quand 10% de la section est visible
   };

   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('visible');
               observer.unobserve(entry.target); // Arrête d'observer une fois visible
           }
       });
   }, options);

   sections.forEach(section => {
       observer.observe(section);
   });
});