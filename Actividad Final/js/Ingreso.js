let divPrincipal = document.getElementById("div-input");
let boton = document.getElementById(`botonEnvio`);
let contador = 0;

let contenidoIngreso = `<div class="linea_input">
                    <img  class="icon_input"  src="../IMG/agregar-usuario.png" alt=""><input class="input-registro" type="text" name="Nombre" id=""  placeholder="      Ingrese el nombre">
                </div>
                
                <div>
                    <img  class="icon_input"  src="../IMG/ojo.png" alt="">                <input class="input-registro" type="password" name="Contra" placeholder="      Ingrese la contrasena">


                </div>`;

let contenidoRegistro = `<div class="linea_input">
                <img  class="icon_input"  src="../IMG/agregar-usuario.png" alt=""><input class="input-registro" type="text" name="Nombre" id=""  placeholder="      Ingrese el nombre">
                </div>

                <div class="linea_input">
                    <img  class="icon_input"  src="../IMG/agregar-usuario.png" alt=""> <input class="input-registro" type="text" name="Apellido" placeholder="      Ingrese el apellido" >
                </div>
             
                <div class="linea_input">
                    <img  class="icon_input"  src="../IMG/email.png" alt=""><input class="input-registro" type="email  " name="Email" placeholder="      Ingrese el Email">
                </div>
               
                <div class="linea_input">
                    <img  class="icon_input"  src="../IMG/ojo.png" alt=""><input class="input-registro" type="password" name="Contrasena" placeholder="      Ingrese la contraseña">
                </div>
                
                <div class="linea_input">
                    <img  class="icon_input"  src="../IMG/ojo.png" alt=""><input class="input-registro" type="password" name="Contrasena" placeholder="      Repite la contraseña">
                </div>
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
    boton.textContent = `Olvidaste la contraseña, o necesitas registratrte?`;
    contador = 0;
  }
});
