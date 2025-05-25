// Funcionalidad del modal
function openModal(title, imageSrc, type, dimensions, description) {
    document.getElementById('modal').classList.add('active');
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-type').textContent = `Tipo: ${type}`;
    document.getElementById('modal-dimensions').textContent = `Dimensiones: ${dimensions}`;
    document.getElementById('modal-description').textContent = description;
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// Cerrar modal al hacer clic fuera de él
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Funcionalidad de filtros
document.addEventListener('DOMContentLoaded', function() {
    const productos = document.querySelectorAll('.muebleria');
    const todosButton = document.querySelector('.todos-button');
    const muebleriaButtons = document.querySelectorAll('[data-muebleria]');

    // Mostrar todos los productos
    todosButton.addEventListener('click', function() {
        productos.forEach(producto => {
            producto.style.display = 'block';
        });
    });

    // Filtrar por mueblería
    muebleriaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const muebleria = this.getAttribute('data-muebleria');
            productos.forEach(producto => {
                const infoText = producto.querySelector('.info').textContent;
                const productoMuebleria = infoText.includes(`Mueblería ${muebleria}`);
                if (productoMuebleria) {
                    producto.style.display = 'block';
                    producto.style.opacity = '1';
                } else {
                    producto.style.display = 'none';
                    producto.style.opacity = '0';
                }
            });
        });
    });
});

// Funcionalidad del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});