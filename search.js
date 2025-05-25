document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-container button');
    const searchInput = document.querySelector('.search-container input');

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        // Mapeo de términos de búsqueda a páginas
        const searchMapping = {
            'comedor': 'comedores.html',
            'comedores': 'comedores.html',
            'buffet': 'buffeteros.html',
            'buffetero': 'buffeteros.html',
            'buffeteros': 'buffeteros.html',
            'cocina': 'cocinas.html',
            'cocinas': 'cocinas.html',
            'isla': 'islas.html',
            'islas': 'islas.html',
            'recamara': 'recamaras.html',
            'recamaras': 'recamaras.html',
            'accesorio': 'accesorios.html',
            'accesorios': 'accesorios.html'
        };

        // Buscar coincidencias y redirigir
        for (const [key, url] of Object.entries(searchMapping)) {
            if (searchTerm.includes(key)) {
                window.location.href = url;
                return;
            }
        }

        // Si no hay coincidencias
        alert('No se encontraron resultados para: ' + searchTerm);
    }

    // Evento para el botón de búsqueda
    searchButton.addEventListener('click', handleSearch);

    // Evento para la tecla Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});