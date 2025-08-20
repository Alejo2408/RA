// Este es un ejemplo simple. Podrías usarlo para animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    console.log('La página ha cargado y está lista para interactuar.');
    // Aquí iría el código para la galería interactiva
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalBody = document.getElementById('modal-body');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // CÓDIGO NUEVO PARA EL MENÚ DE HAMBURGUESA
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const dataType = item.getAttribute('data-type');
            const dataSrc = item.getAttribute('data-src');
            const dataTitle = item.getAttribute('data-title');
            const dataDesc = item.getAttribute('data-desc');

            // Limpia el contenido anterior de la modal
            modalBody.innerHTML = '';

            // Crea el contenido según el tipo (imagen o video)
            if (dataType === 'imagen') {
                const img = document.createElement('img');
                img.src = dataSrc;
                modalBody.appendChild(img);
            } else if (dataType === 'video') {
                const iframe = document.createElement('iframe');
                iframe.src = dataSrc;
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'autoplay; encrypted-media');
                iframe.setAttribute('allowfullscreen', 'true');
                iframe.style.width = '100%';
                iframe.style.height = '500px'; 
                modalBody.appendChild(iframe);
            }

            // Llena los datos del proyecto en la modal
            modalTitle.textContent = dataTitle;
            modalDescription.textContent = dataDesc;

            // Muestra la modal
            modal.style.display = 'block';
        });
    });

    // Cierra la modal al hacer clic en la "X"
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalBody.innerHTML = ''; // Limpia el contenido al cerrar
    });

    // Cierra la modal al hacer clic fuera de ella
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalBody.innerHTML = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        // Formspree maneja el envío, no necesitamos event.preventDefault()
        // Aquí puedes agregar validaciones si lo deseas antes de que el formulario se envíe.

        // Por ahora, solo puedes dejar el evento sin el preventDefault
        // o eliminar el evento completo y dejar que el HTML se encargue
        // de enviar los datos directamente a Formspree.

        console.log('El formulario está listo para ser enviado a Formspree.');
    });
});
