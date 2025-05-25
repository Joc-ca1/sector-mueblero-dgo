function filterByCategory(category) {
    const productos = document.querySelectorAll('.muebleria');

    productos.forEach(producto => {
        const info = producto.querySelector('.info');
        const descripcion = info.textContent.toLowerCase();

        // Filtrar por número de sillas
        if (['4sillas', '6sillas', '8sillas', '10sillas', '12sillas'].includes(category)) {
            const numSillas = category.replace('sillas', '');
            const tieneSillas = descripcion.includes(numSillas + ' sillas') || 
                                descripcion.includes(numSillas + ' personas');
            producto.style.display = tieneSillas ? 'block' : 'none';
        }
        // Filtrar por tipo buffet
        else if (category === 'buffet') {
            const esBuffet = descripcion.includes('buffet');
            producto.style.display = esBuffet ? 'block' : 'none';
        }
        // Filtrar por color
        else if (['tabaco', 'nogal'].includes(category)) {
            const tieneColor = descripcion.includes(`color: ${category}`);
            producto.style.display = tieneColor ? 'block' : 'none';
        }
        // Mostrar todos
        else if (category === 'todos') {
            producto.style.display = 'block';
        }
        // Ocultar si no coincide con ninguna categoría
        else {
            producto.style.display = 'none';
        }
    });
}

// Escuchar clicks en botones de filtro
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        filterByCategory(category);
    });
});

