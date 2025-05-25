document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease-in-out';
        observer.observe(item);
    });

    // Efecto parallax suave para las imágenes
    window.addEventListener('scroll', () => {
        timelineItems.forEach(item => {
            const img = item.querySelector('img');
            const speed = 0.15;
            const rect = item.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                const yPos = -(rect.top * speed);
                img.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
});