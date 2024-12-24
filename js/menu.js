    document.addEventListener('click', function(event) {
        // Verificamos si el clic se realizó fuera del contenedor de la barra de navegación
        if (!event.target.closest('.navbar') && !event.target.closest('.navbar-toggler')) {
            // Si el menú está abierto y el clic fue fuera del menú, lo cerramos
            var navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                var bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bootstrapCollapse.hide();
            }
        }
    });
