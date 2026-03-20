// funcionamiento de la librería AOS y Scrollspy de Bootstrap
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


// Cambiar entre modo claro y oscuro
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  // Cargar modo guardado si existe
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Cambiar icono y guardar preferencia
    if (body.classList.contains("light-mode")) {
      toggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
      localStorage.setItem("theme", "light");
    } else {
      toggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
      localStorage.setItem("theme", "dark");
    }
  });
});

// Cargar header y footer desde archivos externos
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("footer", "Partials/footer.html");
});

async function loadComponent(id, file) {
  //variable de contenedor de footer
  const contenedor = document.getElementById(id);

  try {
    const footerResponse = await fetch(file);
    if (!footerResponse.ok) throw new Error("No se pudo cargar " + file);
    contenedor.innerHTML = await footerResponse.text();
  } catch (error) {
    console.error(error);
    console.log("Error"+error)
  }
}
