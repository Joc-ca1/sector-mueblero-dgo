// Función para filtrar productos por categoría
function filterByCategory(category) {
    const productos = document.querySelectorAll('.muebleria');
    
    productos.forEach(producto => {
        if (category === 'todos') {
            producto.style.display = 'block';
        } else {
            const info = producto.querySelector('.info');
            const categoriaProducto = info.querySelector('p:first-child').textContent.toLowerCase();
            const tipoProducto = info.querySelector('p:nth-child(3)').textContent.toLowerCase();
            const colorProducto = info.querySelector('p:last-child').textContent.toLowerCase();

            // Filtrar por número de sillas
            if (category === '4sillas' && tipoProducto.includes('4 personas')) {
                producto.style.display = 'block';
            }
            // Filtrar por número de sillas
            else if (category === '6sillas' && tipoProducto.includes('6 personas')) {
                producto.style.display = 'block';
            }
            // Filtrar por número de sillas
            else if (category === '8sillas' && tipoProducto.includes('8 personas')) {
                producto.style.display = 'block';
            }
            // Filtrar por número de sillas
            else if (category === '12sillas' && tipoProducto.includes('12 personas')) {
                producto.style.display = 'block';
            }
            // Filtrar por tipo de mueble
            else if ((category === 'recamaras' && categoriaProducto.includes('recámara')) ||
                     (category === 'buffet' && categoriaProducto.includes('buffet')) ||
                     (category === 'comedores' && categoriaProducto.includes('comedor')) ||
                     (category === 'accesorios' && categoriaProducto.includes('accesorio'))) {
                producto.style.display = 'block';
            }
            // Filtrar por color
            else if ((category === 'tabaco' && colorProducto.includes('tabaco')) ||
                     (category === 'nogal' && colorProducto.includes('nogal'))) {
                producto.style.display = 'block';
            }
            else {
                producto.style.display = 'none';
            }
        }
    });
}

// Función para abrir el modal
function openModal(title, imageSrc, category, dimensions, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal-category').textContent = 'Categoría: ' + category;
    document.getElementById('modal-dimensions').textContent = 'Dimensiones: ' + dimensions;
    document.getElementById('modal-description').textContent = description;
    
    const modal = document.getElementById('modal');
    modal.classList.add('active');
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Asegurarse de que todos los productos sean visibles al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    filterByCategory('todos');
});

// Añadir efecto de scroll al header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});