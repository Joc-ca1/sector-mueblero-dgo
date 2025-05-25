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