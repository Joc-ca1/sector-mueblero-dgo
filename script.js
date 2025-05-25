document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const chatBubble = document.querySelector('.chat-bubble');
    const hero = document.querySelector('.hero');

    // Función para cambiar opacidad del header al hacer scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Agregar eventos
    window.addEventListener('scroll', handleScroll);
    chatBubble.addEventListener('click', handleChatClick);
    window.addEventListener('load', updateBackgroundImage);
    window.addEventListener('resize', updateBackgroundImage);
    
  
});


// cuando pasas el cursoor se ahce zoom la imagen
document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll(".muebleria img, .promociones .imagen img");

    imagenes.forEach((img) => {
        img.addEventListener("mouseover", function () {
            this.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.3)";
            this.style.opacity = "0.9";
        });

        img.addEventListener("mouseout", function () {
            this.style.boxShadow = "none";
            this.style.opacity = "1";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const secciones = document.querySelectorAll(".hero, .sobre-nosotros");

    function mostrarSecciones() {
        secciones.forEach(seccion => {
            const posicion = seccion.getBoundingClientRect().top;
            const alturaPantalla = window.innerHeight / 1.3; // Ajuste para activación
            if (posicion < alturaPantalla) {
                seccion.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", mostrarSecciones);
    mostrarSecciones(); // Ejecuta la función al cargar la página
});


// COEMNTARIOS
document.addEventListener("DOMContentLoaded", function () {
    const testimonios = [
      {
        texto: "Increíble calidad y diseño! Compré un sofá moderno y no solo es hermoso, sino también súper cómodo...",
        autor: "Juan Torres, Dgo"
      },
      {
        texto: "Excelente servicio al cliente, rápido y eficaz.",
        autor: "Carlos Méndez, CDMX"
      },
      {
        texto: "Muy buena relación calidad-precio.",
        autor: "Ana Sofía López, GDL"
      }
    ];
  
    let indice = 0;
    const comentario = document.querySelector(".comentario");
    const autor = document.querySelector(".autor");
    const puntos = document.querySelectorAll(".punto");
    const flechaIzq = document.querySelector(".flecha.izquierda");
    const flechaDer = document.querySelector(".flecha.derecha");
  
    function actualizarTestimonio() {
      comentario.textContent = testimonios[indice].texto;
      autor.textContent = testimonios[indice].autor;
  
      puntos.forEach((punto, i) => {
        punto.classList.toggle("activo", i === indice);
      });
    }
  
    flechaIzq.addEventListener("click", () => {
      indice = (indice - 1 + testimonios.length) % testimonios.length;
      actualizarTestimonio();
    });
  
    flechaDer.addEventListener("click", () => {
      indice = (indice + 1) % testimonios.length;
      actualizarTestimonio();
    });
  
    puntos.forEach((punto, i) => {
      punto.addEventListener("click", () => {
        indice = i;
        actualizarTestimonio();
      });
    });
  
    setInterval(() => {
      indice = (indice + 1) % testimonios.length;
      actualizarTestimonio();
    }, 8000);
  });
  


