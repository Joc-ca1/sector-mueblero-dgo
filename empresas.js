document.addEventListener('DOMContentLoaded', () => {
    const empresas = document.querySelectorAll('.empresa');

    empresas.forEach(empresa => {
        // Evento para mostrar la información
        empresa.addEventListener('click', (e) => {
            // Si se hizo clic en el botón de cerrar, no mostrar la info
            if (e.target.classList.contains('cerrar-info')) return;

            const info = empresa.querySelector('.empresa-info');
            info.classList.add('mostrar');
        });

        // Evento para el botón de cerrar
        const btnCerrar = empresa.querySelector('.cerrar-info');
        btnCerrar.addEventListener('click', () => {
            const info = empresa.querySelector('.empresa-info');
            info.classList.remove('mostrar');
        });
    });
});