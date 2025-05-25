// Variables para el filtrado
let currentSillasFilter = null;
let currentMuebleriaFilter = null;

// Función para filtrar productos
function filterProducts() {
    const productos = document.querySelectorAll('.muebleria');
    productos.forEach(producto => {
        const sillasText = producto.querySelector('.info p:nth-child(4)').textContent;
        const muebleriaText = producto.querySelector('.info p:nth-child(3)').textContent;
        const numSillas = parseInt(sillasText.match(/\d+/)) || 0;
        const muebleria = muebleriaText.replace('Mueblería ', '');

        const sillasMatch = !currentSillasFilter || numSillas === currentSillasFilter;
        const muebleriaMatch = !currentMuebleriaFilter || muebleria === currentMuebleriaFilter;

        if (sillasMatch && muebleriaMatch) {
            producto.style.display = '';
        } else {
            producto.style.display = 'none';
        }
    });
}

// Event Listeners para los filtros
document.addEventListener('DOMContentLoaded', () => {
    // Botón Todos
    document.querySelector('.todos-button').addEventListener('click', () => {
        currentSillasFilter = null;
        currentMuebleriaFilter = null;
        filterProducts();
    });

    // Filtros de sillas
    document.querySelectorAll('.comedor-options button').forEach(button => {
        button.addEventListener('click', () => {
            currentSillasFilter = parseInt(button.dataset.sillas);
            filterProducts();
        });
    });

    // Filtros de mueblería
    document.querySelectorAll('.muebleria-options button').forEach(button => {
        button.addEventListener('click', () => {
            currentMuebleriaFilter = button.dataset.muebleria;
            filterProducts();
        });
    });
});

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


// Funcionalidad del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});