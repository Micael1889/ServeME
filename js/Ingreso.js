let divPrincipal = document.getElementById("div-input");
let boton = document.getElementById("botonEnvio");
let contador = 0;

let contenidoIngreso = `
    <div class="linea_input">
        <img class="icon_input" src="../IMG/agregar-usuario.png" alt="">
        <input class="input-registro" type="text" id="login-nombre" placeholder="Ingrese su nombre o email">
        <span class="error" id="error-login-nombre"></span>
    </div>
    <div class="linea_input">
        <img class="icon_input" src="../IMG/ojo.png" alt="">
        <input class="input-registro" type="password" id="login-contrasena" placeholder="Ingrese la contraseña">
        <span class="error" id="error-login-contrasena"></span>
    </div>`;

let contenidoRegistro = `
    <div class="linea_input">
        <img class="icon_input" src="../IMG/agregar-usuario.png" alt="">
        <input class="input-registro" type="text" id="reg-nombre" placeholder="Ingrese el nombre">
        <span class="error" id="error-reg-nombre"></span>
    </div>
    <div class="linea_input">
        <img class="icon_input" src="../IMG/agregar-usuario.png" alt="">
        <input class="input-registro" type="text" id="reg-apellido" placeholder="Ingrese el apellido">
        <span class="error" id="error-reg-apellido"></span>
    </div>
    <div class="linea_input">
        <img class="icon_input" src="../IMG/email.png" alt="">
        <input class="input-registro" type="email" id="reg-email" placeholder="Ingrese el Email">
        <span class="error" id="error-reg-email"></span>
    </div>
    <div class="linea_input">
        <img class="icon_input" src="../IMG/ojo.png" alt="">
        <input class="input-registro" type="password" id="reg-contrasena" placeholder="Ingrese la contraseña">
        <span class="error" id="error-reg-contrasena"></span>
    </div>
    <div class="linea_input">
        <img class="icon_input" src="../IMG/ojo.png" alt="">
        <input class="input-registro" type="password" id="reg-rep-contrasena" placeholder="Repite la contraseña">
        <span class="error" id="error-reg-rep-contrasena"></span>
    </div>`;

function cargarContenido() {
    divPrincipal.innerHTML = contador === 0 ? contenidoIngreso : contenidoRegistro;
    boton.textContent = contador === 0
        ? "¿Olvidaste la contraseña o necesitas registrarte?"
        : "¿Ya tienes cuenta? Ingresá aquí";

    agregarListenerEnvio();
    agregarValidacionesIndividuales();
}

function limpiarErrores() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
}

function mostrarError(id, mensaje) {
    const error = document.getElementById(id);
    if (error) error.textContent = mensaje;
}

function validarNombreApellido(texto) {
    return /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(texto);
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function agregarValidacionesIndividuales() {
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("blur", () => validarCampoAlPerderFoco(input.id));
    });
}

function validarCampoAlPerderFoco(id) {
    const valor = document.getElementById(id).value.trim();
    switch (id) {
        case "reg-nombre":
        case "reg-apellido":
            mostrarError("error-" + id, !valor ? "Este campo es obligatorio." :
                !validarNombreApellido(valor) ? "Solo letras y espacios." : "");
            break;
        case "reg-email":
            mostrarError("error-reg-email", !valor ? "El email es obligatorio." :
                !validarEmail(valor) ? "Email inválido." : "");
            break;
        case "reg-contrasena":
            mostrarError("error-reg-contrasena", !valor ? "La contraseña es obligatoria." :
                valor.length < 6 ? "Mínimo 6 caracteres." : "");
            break;
        case "reg-rep-contrasena":
            const pass = document.getElementById("reg-contrasena").value;
            mostrarError("error-reg-rep-contrasena", !valor ? "Repetí la contraseña." :
                valor !== pass ? "Las contraseñas no coinciden." : "");
            break;
        case "login-nombre":
            mostrarError("error-login-nombre", !valor ? "Este campo es obligatorio." : "");
            break;
        case "login-contrasena":
            mostrarError("error-login-contrasena", !valor ? "Este campo es obligatorio." : "");
            break;
    }
}

function agregarListenerEnvio() {
    let btn = document.getElementById("btnEnviar");
    if (!btn) return;

    btn.addEventListener("click", function (e) {
        e.preventDefault();
        limpiarErrores();

        if (contador === 0) {
            //////// login:p
            let usuario = document.getElementById("login-nombre").value.trim().toLowerCase();
            let contra = document.getElementById("login-contrasena").value;
            let valido = true;

            if (!usuario) {
                mostrarError("error-login-nombre", "Campo obligatorio.");
                valido = false;
            }

            if (!contra) {
                mostrarError("error-login-contrasena", "Campo obligatorio.");
                valido = false;
            }

            if (!valido) return;

            ////////buscar usuario
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            let encontrado = usuarios.find(u => (u.email === usuario || u.nombre === usuario) && u.contra === contra);

            if (encontrado) {
                window.location.href = "Panel.html";
            } else {
                mostrarError("error-login-nombre", "Usuario o contraseña incorrectos.");
            }

        } else {
            ///////////////REGISTRO!!!!
            let nombre = document.getElementById("reg-nombre").value.trim();
            let apellido = document.getElementById("reg-apellido").value.trim();
            let email = document.getElementById("reg-email").value.trim().toLowerCase();
            let contra = document.getElementById("reg-contrasena").value;
            let contra2 = document.getElementById("reg-rep-contrasena").value;
            let valido = true;

            if (!nombre || !validarNombreApellido(nombre)) {
                mostrarError("error-reg-nombre", !nombre ? "Obligatorio." : "Solo letras.");
                valido = false;
            }

            if (!apellido || !validarNombreApellido(apellido)) {
                mostrarError("error-reg-apellido", !apellido ? "Obligatorio." : "Solo letras.");
                valido = false;
            }

            if (!email || !validarEmail(email)) {
                mostrarError("error-reg-email", !email ? "Obligatorio." : "Email inválido.");
                valido = false;
            }

            if (!contra || contra.length < 6) {
                mostrarError("error-reg-contrasena", !contra ? "Obligatorio." : "Mínimo 6 caracteres.");
                valido = false;
            }

            if (!contra2 || contra !== contra2) {
                mostrarError("error-reg-rep-contrasena", !contra2 ? "Obligatorio." : "No coinciden.");
                valido = false;
            }

            if (!valido) return;

            //guardar usuario
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

            //evita duplicado
            if (usuarios.some(u => u.email === email)) {
                mostrarError("error-reg-email", "Ya existe un usuario con ese email.");
                return;
            }

            usuarios.push({ nombre, apellido, email, contra });
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            alert("Registro exitoso. Ahora podés ingresar.");
            contador = 0;    // para volver al login
            cargarContenido();
        }
    });
}

boton.addEventListener("click", function () {
    contador = contador === 0 ? 1 : 0;
    cargarContenido();
});

cargarContenido();