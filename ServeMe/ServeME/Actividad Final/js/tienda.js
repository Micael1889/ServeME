document.addEventListener('DOMContentLoaded', function () {
    const botones = document.querySelectorAll('.tocame');

    // Marcar el primer botón como activo
    if (botones.length > 0) {
        botones[0].classList.remove('bg-dark', 'text-light');
        botones[0].classList.add('bg-success', 'text-black');
    }

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            botones.forEach(b => {
                b.classList.remove('bg-success', 'text-black');
                b.classList.add('bg-dark', 'text-light');
            });
            this.classList.remove('bg-dark', 'text-light');
            this.classList.add('bg-success', 'text-black');
        });
    });
});