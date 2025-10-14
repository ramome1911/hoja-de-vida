document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse && navbarCollapse.classList.contains('show')) {
        bsCollapse.hide(); // Cierra el menú si está abierto
      }
    });
  });
});

//header fijo al desplazamiento //
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');  
  header.classList.toggle('fixed', window.scrollY > 0);
  header.style.marginBottom = window.scrollY > 0 ? '20px' : '0';

});
//header en menu hamburguesa//
window.addEventListener('resize', function() {
  const header = document.querySelector('header');
  if (window.innerWidth < 768) {
    header.classList.add('mobile');
  } else {
    header.classList.remove('mobile');
  }
});

// === Validación del formulario de contacto ===
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Validar campos
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Si todo es válido, puedes enviar el formulario (aquí solo se muestra un mensaje)
  alert('Formulario enviado con éxito.');
});




