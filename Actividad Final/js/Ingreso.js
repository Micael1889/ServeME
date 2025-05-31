let divPrincipal = document.getElementById("div-input");
let boton = document.getElementById(`botonEnvio`);
let contador = 0;

let contenidoIngreso = `<input  class="input-datos" type="text" name="Nombre" id=""  placeholder="      Ingrese el nombre">
            <input class="input-datos" type="text" name="Contra" placeholder="      Ingrese la contrasena">`;

let contenidoRegistro = `<input type="text" name="Nombre" id=""  placeholder="      Ingrese el nombre">
            <input class="input-datos" type="text" name="Apellido" placeholder="      Ingrese el apellido">
            <input class="input-datos" type="email  " name="Email" placeholder="      Ingrese el Email">
            <input class="input-datos" type="text" name="Contrasena" placeholder="      Ingrese la contrasena">
            <input class="input-datos" type="text" name="Contrasena" placeholder="      Repite la contrasena">
           `;

divPrincipal.innerHTML = contenidoIngreso;

document.getElementById(`botonEnvio`).addEventListener(`click`, function () {
  console.log(`hola`);

  if (contador == 0) {
    divPrincipal.innerHTML = ``;
    divPrincipal.innerHTML = contenidoRegistro;
    boton.textContent = `Ya tienes cuenta? ingrese aqui`;
    contador = 1;
  } else {
    divPrincipal.innerHTML = ``;
    divPrincipal.innerHTML = contenidoIngreso;
    boton.textContent = `Olvidaste la contrasena, o necesitas registratrte?`;
    contador = 0;
  }
});
