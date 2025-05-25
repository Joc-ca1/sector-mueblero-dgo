function filterByCategory(category) {
    const products = document.querySelectorAll('.muebleria');
    
    products.forEach(product => {
        const info = product.querySelector('.info');
        const productType = info.querySelector('p').textContent.toLowerCase();
        const description = info.textContent.toLowerCase();
        
        if (category === 'todos') {
            product.style.display = 'block';
        } else if (category === 'buffet') {
            product.style.display = productType.includes('buffet') ? 'block' : 'none';
        } else if (category === 'cocina') {
            product.style.display = productType.includes('cocina') ? 'block' : 'none';
        } else if (category === 'isla') {
            product.style.display = productType.includes('isla') ? 'block' : 'none';
        } else {
            // Extraer el número de sillas de la descripción
            const sillasMatch = description.match(/(\d+)\s*sillas?/i);
            const personasMatch = description.match(/(\d+)\s*personas/i);
            const numSillas = sillasMatch ? sillasMatch[1] : (personasMatch ? personasMatch[1] : '0');
            
            // Comparar con la categoría seleccionada
            const categoryNum = category.replace('sillas', '');
            product.style.display = numSillas === categoryNum ? 'block' : 'none';
        }
    });
}

// Aplicar el filtro 'todos' al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    filterByCategory('todos');
});