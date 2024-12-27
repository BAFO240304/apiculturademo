// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function (event) {
    const circularMenu = document.querySelector('.circular-menu');
    const isClickInside = circularMenu.contains(event.target);

    if (!isClickInside && circularMenu.classList.contains('open')) {
        circularMenu.classList.remove('open');
    }
});