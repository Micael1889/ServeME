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

function alertaMozo(id){
    Swal.fire({
        title: "Notificación",
        text: id,
        icon: "success",
        confirmButtonColor: "#12372A"
      });
}


function suma_Prod() {
    const cant_precio = document.querySelector(".cant_dinero")
    const cant_art = document.querySelector(".cant_prod");
    const precio_actual = document.querySelector(".botonito")

    let num_art = parseInt(cant_art.textContent);
    let num_precio = parseInt(cant_precio.textContent);
    let precio_acumulado = parseInt(precio_actual.textContent);
    cant_art.textContent = num_art + 1;
    precio_actual.textContent = num_precio + precio_acumulado;
}

// ------------------------------ CATEGORIAS ---------------------------------

